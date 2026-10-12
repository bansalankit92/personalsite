// Fetches the public GitHub contribution calendar at build time (no token needed).
// Returns null if GitHub is unreachable so a build never fails because of it.

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  level: number; // 0-4, GitHub's intensity bucket
  count: number;
  week: number; // column
  weekday: number; // row, 0 = Sunday
}

export interface Contributions {
  total: number;
  weeks: number;
  days: ContributionDay[];
  months: { label: string; week: number }[];
}

export async function getContributions(user: string): Promise<Contributions | null> {
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { 'User-Agent': 'ankitbansal.co.in build' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Tooltip text holds the counts: "3 contributions on October 12th." / "No contributions on ..."
    const counts = new Map<string, number>();
    for (const m of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
      const n = m[2].match(/^(\d[\d,]*) contribution/);
      counts.set(m[1], n ? Number(n[1].replace(/,/g, '')) : 0);
    }

    const days: ContributionDay[] = [];
    for (const m of html.matchAll(/<td\b[^>]*>/g)) {
      const tag = m[0];
      const date = tag.match(/data-date="([^"]+)"/)?.[1];
      const id = tag.match(/\bid="contribution-day-component-(\d+)-(\d+)"/);
      const level = tag.match(/data-level="(\d)"/)?.[1];
      if (!date || !id || level === undefined) continue;
      days.push({
        date,
        level: Number(level),
        count: counts.get(`contribution-day-component-${id[1]}-${id[2]}`) ?? 0,
        weekday: Number(id[1]),
        week: Number(id[2]),
      });
    }
    if (days.length === 0) return null;

    const totalMatch = html.match(/([\d,]+)\s+contributions?\s+in the last year/);
    const total = totalMatch ? Number(totalMatch[1].replace(/,/g, '')) : days.reduce((a, d) => a + d.count, 0);
    const weeks = Math.max(...days.map((d) => d.week)) + 1;

    // A month label goes on the first column whose first day starts that month
    const months: { label: string; week: number }[] = [];
    let last = -1;
    for (let w = 0; w < weeks; w++) {
      const first = days.filter((d) => d.week === w).sort((a, b) => a.weekday - b.weekday)[0];
      if (!first) continue;
      const dt = new Date(`${first.date}T00:00:00Z`);
      const m = dt.getUTCMonth();
      if (m !== last && dt.getUTCDate() <= 7) {
        months.push({ label: dt.toLocaleString('en', { month: 'short', timeZone: 'UTC' }), week: w });
        last = m;
      }
    }
    return { total, weeks, days, months };
  } catch {
    return null;
  }
}
