// Builds /llms.txt and /llms-full.txt (https://llmstxt.org) from the site content,
// so AI assistants get the same facts as the page without parsing HTML.
import {
  site,
  profile,
  about,
  stats,
  socials,
  featured,
  experience,
  education,
  achievements,
  skills,
  projects,
  services,
} from './profile';

const url = `${site.url}/`;
const stripHtml = (s: string) => s.replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)').replace(/<[^>]+>/g, '');
const link = (text: string, href: string, note?: string) => `- [${text}](${href})${note ? `: ${note}` : ''}`;

function header() {
  return [
    `# ${profile.name}`,
    '',
    `> ${profile.role} with 11+ years of experience in scalable backend architectures, event-driven microservices (Java, Spring WebFlux, Apache Kafka, Node.js) and multi-cloud deployments (AWS, GCP, Docker, Kubernetes). Founder of SarvaKosh, Bharatiya Comics, FinCalculator and the Pustak Scan app. Based in Pune, India.`,
    '',
    `- Website: ${url}`,
    `- Email: ${profile.email}`,
    `- Book a 30-minute call: ${profile.booking}`,
    `- GitHub: ${profile.github}`,
    `- Resume (PDF): ${site.url}${profile.resume}`,
    `- Location: Pune, Maharashtra, India`,
    `- Highlights: ${stats.map((s) => `${s.value} ${s.label}`).join('; ')}`,
  ];
}

export function llmsTxt() {
  const lines = [
    ...header(),
    '',
    '## Founder',
    '',
    ...featured
      .filter((f) => f.relation === 'Founder')
      .map((f) => link(f.name, f.url, `${f.description} (${f.facts.join(', ')})`)),
    '',
    '## Products built as an employee',
    '',
    ...featured
      .filter((f) => f.relation === 'Employee')
      .map((f) => link(f.name, f.url, `${f.role}. ${f.description} (${f.facts.join(', ')})`)),
    '',
    '## Experience',
    '',
    ...experience
      .filter((j) => j.role)
      .map((j) => `- ${j.company}: ${j.role} (${j.period})`),
    '',
    '## Profile',
    '',
    link('Full profile for LLMs', `${site.url}/llms-full.txt`, 'complete experience, skills, projects and services in Markdown'),
    link('Resume (PDF)', `${site.url}${profile.resume}`),
    link('Portfolio website', url),
    '',
    '## Optional',
    '',
    ...socials.map((s) => link(s.name, s.href)),
    link('Website source code', site.sourceCode),
    '',
  ];
  return lines.join('\n');
}

export function llmsFullTxt() {
  const out: string[] = [...header(), '', '## About', '', ...about.flatMap((p) => [p, '']), '## Featured work', ''];

  for (const f of featured) {
    out.push(`### ${f.name} (${f.relation === 'Founder' ? 'Founder' : f.role})`, '', `URL: ${f.url}`, '', f.description, '');
    out.push(...f.facts.map((x) => `- ${x}`));
    if (f.links) out.push(...f.links.map((l) => link(l.label, l.href)));
    out.push('');
  }

  out.push('## Experience', '');
  for (const j of experience) {
    out.push(`### ${j.company}${j.role ? ` - ${j.role}` : ''}`, '', `Period: ${j.period}`, '');
    if (j.stack) out.push('Tech stack:', ...j.stack.map((s) => `- ${s}`), '');
    if (j.highlights) out.push('Highlights:', ...j.highlights.map((h) => `- ${stripHtml(h)}`), '');
    for (const g of j.groups ?? []) {
      out.push(`#### ${g.title}`, '');
      if (g.items) out.push(...g.items.map((x) => `- ${x}`), '');
      if (g.stack) out.push('Tech stack:', ...g.stack.map((s) => `- ${s}`), '');
      if (g.note) out.push(`${g.note.title}: ${g.note.text}`, '');
    }
  }

  out.push('## Education', '', ...education.map((e) => `- ${e.title}, ${e.place} (${e.period})`), '');
  out.push('## Achievements', '', ...achievements.map((a) => `- ${a.title}${a.detail ? `: ${a.detail}` : ''} (${a.year})`), '');

  out.push('## Skills', '');
  for (const g of skills) {
    const names = g.subgroups.flatMap((sg) => sg.skills.map((s) => s.name));
    out.push(`- ${g.title}: ${names.join(', ')}`);
  }
  out.push('');

  out.push('## Projects (archive)', '');
  for (const p of projects) {
    const desc = p.detail?.intro ?? p.detail?.body?.[0];
    const target = p.href ? ` - ${p.href}` : '';
    out.push(`- ${p.title} (${p.subtitle}; ${p.tech})${target}${desc ? `: ${desc}` : ''}`);
  }
  out.push('');

  out.push('## Services', '');
  for (const s of services) out.push(`- ${s.title} (${s.price}): ${s.lines.join(' ')}`);
  out.push('', `Contact: ${profile.email}`, '');

  out.push('## Links', '', ...socials.map((s) => link(s.name, s.href)), '');
  return out.join('\n');
}
