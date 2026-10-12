// Single source of truth for all site content.
// To update the site, edit this file and rebuild.

export const site = {
  url: 'https://ankitbansal.co.in',
  title: 'Ankit Bansal - Senior Software Engineer',
  description:
    'I am Ankit Bansal, a Senior Software Engineer with 11 years of experience building scalable backend systems, event-driven microservices and cloud platforms.',
  ogDescription:
    'I am Ankit Bansal, a Senior Software Engineer with 11 years of experience in scalable backend architectures, event-driven microservices and multi-cloud deployments.',
  keywords:
    'ankit bansal, senior software engineer, backend engineer, java, spring boot, spring webflux, apache kafka, microservices, node.js, next.js, oauth2, aws, gcp, docker, kubernetes, postgresql, mongodb, elasticsearch, resume, portfolio',
  googleSiteVerification: 'OuZYB7ACASzioV462WESC4bBSbmF27AUCGZbj0ssNRw',
  gtmId: 'GTM-P6T6C2F',
  sourceCode: 'https://github.com/bansalankit92/personalsite',
};

export const profile = {
  name: 'Ankit Bansal',
  role: 'Senior Software Engineer',
  tagline: 'Senior Software Engineer / Backend & Distributed Systems / Problem Solver',
  // Rotating words from the old hero ("I am ...")
  typedStrings: ['Tech Enthusiast', 'Backend Engineer', 'Problem Solver', 'Ankit Bansal'],
  stack: ['Java', 'Spring WebFlux', 'Kafka', 'Node.js', 'Next.js', 'AWS/GCP'],
  birthDate: '1993-12-27',
  careerStart: '2015-09-23',
  location: 'Pune - 412101',
  email: 'contact@ankitbansal.co.in',
  photo: 'ankit2.jpeg',
  resume: '/docs/Ankit_Bansal_SSE_Resume_11_yrs_exp.pdf',
};

export const about = [
  'I am a Senior Software Engineer with 11 years of experience, specializing in scalable backend architectures and enterprise systems.',
  'I build non-blocking, event-driven microservices with Java, Spring WebFlux and Apache Kafka, and have worked extensively on RESTful API integrations, custom API adapters and OAuth2/OIDC security.',
  'I have designed and deployed workflows across multi-cloud environments (AWS, GCP, Railway.com) using Docker and Kubernetes, and enjoy owning the full SDLC, from architecture and POCs to production support and performance tuning.',
  'I have worked in both start-ups and enterprises, and I like to explore new technologies and always strive to learn something new every day.',
];

export const stats = [
  { value: '11+', label: 'years experience', dynamic: 'career' },
  { value: '200K+', label: 'users scaled at Peerlist' },
  { value: '2M+', label: 'emails per campaign' },
  { value: '30–40', label: 'Fortune 500 API integrations' },
];

export type SocialIcon = 'github' | 'linkedin' | 'facebook' | 'hackerrank' | 'hackerearth' | 'x' | 'instagram';
export const socials: { name: string; href: string; icon: SocialIcon }[] = [
  { name: 'GitHub', href: 'http://github.com/bansalankit92/', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ankitbansal2/', icon: 'linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/ankeet.bansal', icon: 'facebook' },
  { name: 'HackerRank', href: 'https://www.hackerrank.com/bansal_ankit92', icon: 'hackerrank' },
  { name: 'HackerEarth', href: 'https://www.hackerearth.com/@bansal.ankit92', icon: 'hackerearth' },
  { name: 'X', href: 'https://x.com/ankeetbansal', icon: 'x' },
  { name: 'Instagram', href: 'https://www.instagram.com/ankeetbansal/', icon: 'instagram' },
];

export const quotes = {
  experience: {
    text: 'Given the choice between the experience of pain and nothing, I would choose pain.',
    author: 'William Faulkner',
  },
  skills: {
    text: 'Man often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.',
    author: 'Mahatma Gandhi',
  },
  projects: { text: 'You can do anything you set your mind to.', author: 'Benjamin Franklin' },
  services: {
    text: 'When someone tells me ‘no,’ it doesn’t mean I can’t do it, it simply means I can’t do it with them.',
    author: 'Karen E. Quinones Miller',
  },
};

// Highlight strings may contain trusted inline HTML (links).
export interface Job {
  id: string;
  company: string;
  role?: string;
  period: string;
  stack?: string[];
  highlights?: string[];
  // Freelancing has sub-roles
  groups?: { title: string; stack?: string[]; items?: string[]; note?: { title: string; text: string } }[];
}

export const experience: Job[] = [
  {
    id: 'peerlist',
    company: 'Peerlist',
    role: 'Product Engineer (Full Stack)',
    period: 'Jun 2023 - Sep 2026',
    stack: [
      'BE - Node.js, Express.js',
      'FE - Next.js',
      'DB - MongoDB',
      'Infra - Docker, Kubernetes',
      'Cloud - AWS, GCP, Railway.com',
      'Payments - Stripe',
      'Monitoring - New Relic',
    ],
    highlights: [
      'Joined <a href="https://peerlist.io" target="_blank" rel="noopener">Peerlist.io</a> as a full stack developer when it had around 2,000 users and helped scale the platform to 200K+ users.',
      'Worked on almost every feature of Peerlist.io across frontend and backend, along with performance optimization and scalability improvements.',
      'Integrated the Stripe payment gateway into Peerlist.io.',
      'Built and scaled <a href="https://autosend.com" target="_blank" rel="noopener">Autosend.com</a> from the ground up into a high-throughput, containerized email delivery platform processing over 2 million emails in a campaign.',
      'Worked across the entire SDLC for Peerlist.io and Autosend.com, from requirements, architecture and design through development, automated testing, deployment, and production operations.',
      'Architected high-throughput API integrations, microservices and workflow automation pipelines across multi-cloud infrastructure to maximize uptime and operational scalability.',
      'Established standardized RESTful API integration patterns across backend services, enabling seamless third-party integrations and unified monitoring through New Relic APM.',
      'Conducted technical research, experiments, and POCs to evaluate emerging architectural patterns and optimize performance, reliability, and throughput.',
    ],
  },
  {
    id: 'gojek',
    company: 'GoJek - GoFin Labs',
    role: 'Senior Software Engineer',
    period: 'Feb 2021 - Jun 2023',
    stack: [
      'BE - Java 17, Kotlin, Spring Boot, Spring WebFlux, Apache Kafka',
      'Security - OAuth2/OIDC, Spring Security, SSO',
      'DB - PostgreSQL',
      'Testing - JUnit, Mockito',
      'Infra - Docker, Kubernetes, GCP',
      'Stats/Analytics - New Relic, Datadog',
      'FE - React.js',
    ],
    highlights: [
      'GoModal Project: orchestrated distributed merchant lending integration workflows supporting 1M+ active users, optimizing throughput across asynchronous message streams.',
      'Deployed non-blocking, reactive microservices using Spring WebFlux and Apache Kafka streams, reducing API response times by 35% across compliance and credit eligibility workflows.',
      'Implemented secure OAuth2/OIDC authentication across consumer-facing API gateways, mitigating security vulnerabilities and ensuring regulatory compliance.',
      'Designed and built core backend APIs and KYC verification flows, integrating real-time credit-score eligibility checks.',
      'Containerized and orchestrated microservices using Docker and Kubernetes, ensuring seamless deployment pipelines and high availability.',
    ],
  },
  {
    id: 'antbrains',
    company: 'Antbrains Corp',
    role: 'Software Engineer',
    period: 'Apr 2020 - Dec 2020',
    stack: ['BE - Java, Spring Boot, JAX-RS', 'DB - CouchDB'],
    highlights: [
      'Integrated APIs for 30-40 Fortune 500 companies with the core platform, enabling secure and standardized third-party system connectivity.',
      'Engineered an access point framework to communicate securely with external systems as modular extensions.',
      'Designed and built a code-generation framework that dynamically generates Java code used as extensions within the main platform.',
    ],
  },
  {
    id: 'clairvoyant',
    company: 'Clairvoyant India Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Oct 2016 - Apr 2020',
    stack: [
      'BE - Java 8, Spring Boot, Spring Cloud, Apache Camel, Quartz',
      'DB - MongoDB',
      'Messaging - Apache Kafka',
      'Search - Elasticsearch',
      'Testing - JUnit, Mockito, JMeter',
      'Logging - Kibana',
      'FE - Angular, NgRx, D3.js',
    ],
    highlights: [
      'Designed and developed backend APIs and file-processing workflows for Communication Control, processing XML, CSV, and flat files and routing requests to external printing vendors.',
      'Implemented a file-watcher service using Apache Camel to detect incoming files, retrieve configurations from MongoDB, process requests, and handle processing errors.',
      'Built backend and frontend components for Tableau Reports, developing D3.js-based visualizations from scratch using Angular, Java, and Spring Boot.',
      'Developed and integrated services for Fulfillment Hub, a transaction-integration platform that routed requests from multiple clients to downstream vendors.',
      'Integrated Apache Kafka and Elasticsearch to develop watcher jobs for in-application and email notifications.',
      'Performed performance and load testing using JMeter, and monitored production logs and troubleshot issues using Kibana.',
      'Worked across the SDLC with clients across locations, from requirements and design through testing, production releases, and issue resolution.',
    ],
  },
  {
    id: 'persistent',
    company: 'Persistent Systems Ltd. (Cisco)',
    role: 'Software Engineer',
    period: 'Sep 2015 - Oct 2016',
    stack: ['BE - Java JAX-RS, BPEL, Spring, RESTful/SOAP Web Services', 'DB - Oracle 10g/12c', 'FE - HTML5, JavaScript'],
    highlights: [
      'Developed enterprise SOAP web services using BPEL and RESTful APIs in Java JAX-RS to facilitate cross-system data synchronization.',
      'Engineered a web-based service discovery application using Spring, HTML5, and JavaScript to search and monitor active enterprise web services.',
      'Executed database migration scripts for Oracle 10g to 12c, maintaining data integrity and system availability.',
    ],
  },
  {
    id: 'freelancing',
    company: 'Freelancing',
    period: 'Sept 2015 - till date',
    groups: [
      {
        title: 'WordPress developer',
        items: [
          'Developed a few blogging websites for bloggers in WordPress.',
          'Developed an ecommerce website for a shop in WooCommerce.',
          'Developed a learning portal to run various digital courses (MOOCs) using LearnPress.',
        ],
      },
      {
        title: 'Full stack developer',
        stack: ['FE - HTML5, CSS3, Bootstrap, Angular4', 'BE - Nodejs', 'DB - MySQL', 'Hosting - AWS'],
        note: {
          title: 'Role - Lead Developer',
          text: 'Worked closely with clients in all phases of software development, from gathering requirements to maintenance.',
        },
      },
    ],
  },
  {
    id: 'side-projects',
    company: 'Side projects (Blockchain)',
    period: 'Dec 2017 - May 2018',
    stack: ['FE - HTML5, CSS3, Bootstrap, Angular4, Web3js', 'Contract - Solidity', 'Blockchain - Ethereum'],
    highlights: [
      'Founded a cryptocurrency - <a href="https://uniteforcause.com" target="_blank" rel="noopener">UFC coin</a>.',
      'Developed a DApp - Fundraising website on blockchain.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Engineering - Computer Science (First Class, 65%)',
    place: 'DYPIET, University of Pune',
    period: '2011-2015',
  },
  { title: 'High School- Maths & Science (70%)', place: 'Maharashtra State Board', period: '2009-2011' },
];

export const achievements = [
  {
    title: 'CEO Commendation, Clairvoyant',
    detail: 'Recognized for exceptional engineering work and cross-team mentorship',
    year: '2017',
  },
  { title: 'Top 7 Nationwide, TechGig Code Gladiators', detail: 'Theme-based programming competition', year: '2016' },
  { title: 'Winner, Coding PowerHouse Competition', year: '2016' },
  { title: 'Winner, Full Stack Hackathon', detail: 'Conducted by Persistent Systems', year: '2015' },
];

export interface Skill {
  name: string;
  value: number; // self-rating 0-100, carried over from the old progress bars
}
export interface SkillGroup {
  title: string;
  key: string; // shown as the "package.json" key
  subgroups: { title?: string; skills: Skill[] }[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Programming Languages',
    key: 'languages',
    subgroups: [
      { skills: [{ name: 'Java 17', value: 80 }, { name: 'Kotlin', value: 52 }] },
      {
        title: 'Web',
        skills: [
          { name: 'HTML5', value: 75 },
          { name: 'CSS3', value: 55 },
          { name: 'JavaScript', value: 75 },
          { name: 'TypeScript', value: 75 },
        ],
      },
    ],
  },
  {
    title: 'Server Side',
    key: 'server',
    subgroups: [
      {
        skills: [
          { name: 'Spring-Boot', value: 80 },
          { name: 'Spring WebFlux', value: 75 },
          { name: 'Hibernate/JPA', value: 57 },
          { name: 'JAX-RS', value: 70 },
          { name: 'Apache Kafka', value: 70 },
          { name: 'Apache Camel', value: 40 },
          { name: 'Node.js / Express.js', value: 85 },
          { name: 'OAuth2 / Spring Security', value: 60 },
        ],
      },
    ],
  },
  {
    title: 'AI & Agents',
    key: 'ai',
    subgroups: [
      {
        title: 'AI coding assistants',
        skills: [
          { name: 'Claude Code', value: 80 },
          { name: 'GitHub Copilot', value: 65 },
          { name: 'Cursor', value: 65 },
        ],
      },
      {
        title: 'AI agents',
        skills: [
          { name: 'Hermes Agent', value: 65 },
          { name: 'MCP (Model Context Protocol)', value: 60 },
          { name: 'Claude Agent SDK / Vercel AI SDK', value: 55 },
          { name: 'LangChain / LangGraph', value: 50 },
        ],
      },
      {
        title: 'LLM engineering',
        skills: [
          { name: 'LLM APIs (Claude / OpenAI)', value: 75 },
          { name: 'Prompt & Context Engineering', value: 70 },
          { name: 'RAG / Vector Search', value: 55 },
        ],
      },
    ],
  },
  {
    title: 'Cloud & DevOps',
    key: 'cloud',
    subgroups: [
      {
        skills: [
          { name: 'AWS', value: 60 },
          { name: 'GCP', value: 60 },
          { name: 'Docker / Kubernetes', value: 65 },
          { name: 'Railway.com / Vercel /Dokploy', value: 85 },
          { name: 'New Relic / Datadog', value: 75 },
        ],
      },
    ],
  },
  {
    title: 'Database Management Systems',
    key: 'databases',
    subgroups: [
      { title: 'RDBMS', skills: [{ name: 'PostgreSQL', value: 65 }, { name: 'MySQL', value: 60 }] },
      { title: 'NoSQL', skills: [{ name: 'MongoDB', value: 85 }] },
      { title: 'Search Engines', skills: [{ name: 'Elasticsearch', value: 55 }] },
    ],
  },
  {
    title: 'Frontend Frameworks',
    key: 'frontend',
    subgroups: [
      {
        skills: [
          { name: 'Angular', value: 60 },
          { name: 'React', value: 80 },
          { name: 'Next.js', value: 85 },
        ],
      },
    ],
  },
  {
    title: 'Concepts',
    key: 'concepts',
    subgroups: [
      {
        skills: [
          { name: 'OOPs', value: 77 },
          { name: 'Data Structures', value: 70 },
          { name: 'Algorithms', value: 56 },
          { name: 'DBMS', value: 55 },
          { name: 'Design Patterns', value: 50 },
          { name: 'OOAD', value: 40 },
          { name: 'Microservices', value: 70 },
          { name: 'Agile Development', value: 70 },
        ],
      },
    ],
  },
  {
    title: 'Build Tools',
    key: 'build',
    subgroups: [{ skills: [{ name: 'Maven', value: 55 }, { name: 'Gradle', value: 45 }] }],
  },
  {
    title: 'Unit Testing',
    key: 'testing',
    subgroups: [{ skills: [{ name: 'JUnit/Mockito', value: 60 }, { name: 'Karma/Jasmine', value: 40 }] }],
  },
  {
    title: 'Version Control System',
    key: 'vcs',
    subgroups: [{ skills: [{ name: 'Git/GitHub', value: 80 }] }],
  },
  {
    title: 'IDE',
    key: 'ide',
    subgroups: [
      {
        skills: [
          { name: 'IntelliJ IDEA', value: 80 },
          { name: 'Visual Studio Code', value: 90 },
        ],
      },
    ],
  },
];

export function skillLevel(value: number) {
  if (value >= 75) return 'expert';
  if (value >= 60) return 'advanced';
  if (value >= 45) return 'intermediate';
  return 'familiar';
}

export interface ProjectDetail {
  heading: string;
  intro?: string;
  link?: { label: string; text: string; href?: string };
  body?: string[];
  list?: { text: string; children?: string[] }[];
  meta: { label: string; value: string }[][];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string;
  image: string; // file name in src/assets/projects
  href?: string; // external link
  detail?: ProjectDetail; // opens a dialog
}

export const projects: Project[] = [
  { id: 'ufccoin', title: 'UFC coin', subtitle: 'Blockchain', tech: 'Cryptocurrency Blockchain', image: 'ufccoin.png', href: 'https://uniteforcause.com' },
  { id: 'cryptofundraising', title: 'Crypto money raising', subtitle: 'Blockchain', tech: 'DApp - Blockchain', image: 'cryptofundraising.png', href: 'https://beta-cryptomoneyraiser.firebaseapp.com/#/' },
  { id: 'engikart', title: 'Engikart', subtitle: 'Enterprise Application', tech: 'Nodejs-Angular4', image: 'engikart.png', href: 'http://engikart.com' },
  { id: 'engilearn', title: 'Online Learning Platform', subtitle: 'Moocs', tech: 'Wordpress', image: 'engilearn.png', href: 'http://engilearn.engikart.com/#/' },
  { id: 'codevik', title: 'Tech blog', subtitle: 'Codevik', tech: 'Wordpress', image: 'codevik.png', href: 'http://codevik.com/' },
  { id: 'pdc', title: 'Conference Website', subtitle: 'Pune Data conference', tech: 'Bootstrap - UI', image: 'pdc.png', href: 'http://punedataconference.com/' },
  { id: 'videolust', title: 'Random Youtube Videos', subtitle: 'Video Lust', tech: 'Android', image: 'videolust.png', href: 'https://play.google.com/store/apps/details?id=com.codevik.videolust' },
  {
    id: 'ataproject',
    title: 'AtA Project',
    subtitle: 'Web App',
    tech: 'Java - Bootstrap',
    image: 'ata1.png',
    detail: {
      heading: 'Attribute Authority',
      body: [
        'My role was to develop Complete UI version 2.0 using AngularJs, Bootstrap, HTML5 at front End.',
        'At Server Side to get the user data, process it to make SOAP Request(XML) and send this request to AtA service and get the SOAP Response from that services and send this SOAP Response to user so that it can Download/Check/Use and this server side was developed using Spring MVC frameworks',
      ],
      meta: [
        [
          { label: "Front End Technologies and Api's", value: 'HTML5, AngularJS,Bootstrap, CodeMirror' },
          { label: 'Back End Technologies', value: 'J2EE6, Spring Framework, Apache commons HTTPClient' },
        ],
        [
          { label: 'Client', value: 'CISCO' },
          { label: 'Service', value: 'Web Design' },
        ],
      ],
    },
  },
  {
    id: 'reactiv',
    title: 'REACTIV',
    subtitle: 'Full Stack Java Web App',
    tech: 'Java - Bootstrap',
    image: 'reactiv.png',
    detail: {
      heading: 'REACTIV',
      intro: 'Realtime Collaborative Technical Interview with Video/Live Interviews.',
      body: [
        'We developed an online coding environment for conducting coding interview. We provided an online editor where candidate and interviewer can collaboratively write code, we also provided automated judging to make the task of objectively evaluating the candidate performance easier and chatting and video calling to communicate each other. Also created job portal that tracks candidate request and HR can choose selective candidate and the schedule an interview. He / She can also able to pick what questions candidate needs to solve.',
      ],
      list: [
        { text: 'Requirements Gathering.' },
        { text: 'Designed whole structure, Data Flow of the project.' },
        { text: 'Developed all required Bean classes i.e. Model part of MVC.' },
        { text: 'Implemented Controllers i.e. to get the user data, process it and send required JSON object as response.' },
        {
          text: 'Front End part Designed Admin and Company Module',
          children: [
            'Some Basic Statistical Analysis.',
            'Admin approves companies, check list of questions and Test Cases and Interview Details.',
            'Company can schedule interviews, check interviews and questions to be asked, check student scores.',
          ],
        },
      ],
      meta: [
        [
          { label: "Front End Technologies and Api's", value: 'HTML5, JQuery,Bootstrap, CodeMirror, WebSocket' },
          { label: 'Back End Technologies', value: 'J2EE6, JSP, Servlets, Hibernate' },
          { label: 'DBMS', value: 'MySQL' },
        ],
        [
          { label: 'Competition/Hackathon', value: '(Winners) Persistent Systems Ltd.' },
          { label: 'Service', value: 'Full Stack Web App' },
        ],
      ],
    },
  },
  {
    id: 'placestovisit',
    title: 'Places To Visit',
    subtitle: 'Web App',
    tech: 'Javascript',
    image: 'placestovisit.png',
    detail: {
      heading: 'Places To visit',
      intro: "Shows the list of nearby places that You haven't visited yet",
      link: { label: 'Website', text: 'http://placestovisit.ankitbansal.co.in', href: 'http://placestovisit.ankitbansal.co.in' },
      body: [
        'In this app user gets to know all the interesting places which s/he doesn’t know or haven’t visited yet. User first has to logged in via FB account and after successfully logged in and selecting the interesting place s/he gets detailed info about top 20 places s/he haven’t visited on map. Then on selecting the place to visit user get the routes with the via option like which place to go before visiting destination and user can also post its location, message on Facebook.',
      ],
      meta: [
        [
          { label: 'Front End Technologies', value: 'HTML5, JQuery,Bootstrap' },
          { label: "Third Party API's", value: 'FaceBook Graph API, MapMyIndia API' },
        ],
        [
          { label: 'App Competition', value: '(Finalist) Techgig Code Gladiator 2016' },
          { label: 'Service', value: 'Web App' },
        ],
      ],
    },
  },
  {
    id: 'jdacodehub',
    title: 'Code Hub',
    subtitle: 'Full Stack Java Web App',
    tech: 'Java - Bootstrap',
    image: 'jdacodehub.png',
    detail: {
      heading: 'CodeHub 12hrs Challenge',
      intro: 'To Search various code submissions by Users based on Full Text Search and show analytics of the all the Code Submissions',
      link: { label: 'Website', text: 'http://jda-codehub.heroku.com', href: 'http://jda-codehub.heroku.com' },
      meta: [
        [
          { label: 'Front End Technologies', value: 'HTML5, AngularJs,Bootstrap' },
          { label: 'BackEnd Technologies', value: 'J2EE6, Spring MVC 4, Servlets' },
          { label: 'DBMS', value: 'MySQL' },
        ],
        [
          { label: 'App Competition', value: 'JDA' },
          { label: 'Service', value: 'Full Stack Web App' },
        ],
      ],
    },
  },
  {
    id: 'campusinforetrieval',
    title: 'Campus Info Retrieval',
    subtitle: 'Android App Development',
    tech: 'Android - PHP',
    image: 'campusinforetrieval.png',
    detail: {
      heading: 'Mobile Based Campus Information Retrieval Android App',
      intro: 'Students and Teachers can get all the information/notification on mobile and no need to visit any notice board or anything',
      link: { label: 'Paper Published', text: 'IJCSMC' },
      body: [
        'I have developed this application in android keeping in mind that, in a real world scenario, such as college campus, the information is shared in the form of notices, hand-written manuals, oral communication, among the students. So this application provides students and teachers with information regarding library books availability, placement activities, general notices, and important notices regarding all departments, discussion forum to discuss on various topics. This application also includes functionality such as showing college campus map, route direction of college and provides various important contacts information like hospitals and ambulance nearby campus for emergency purpose. This information is provided to students in a cost and time effective way. Just install the available Android application and explore the services.',
      ],
      meta: [
        [
          { label: 'Mobile App', value: 'Android (using Android Studio)' },
          { label: 'Server Side', value: 'PHP, Slim Framework - RESTFul API' },
        ],
        [
          { label: 'BE Project', value: 'DYPIET pimpri' },
          { label: 'Service', value: 'Android App' },
        ],
      ],
    },
  },
  {
    id: 'excelfeatures',
    title: 'More Excel Sheet Features',
    subtitle: 'DeskTop',
    tech: 'Java',
    image: 'excelfeatures.png',
    detail: {
      heading: 'Additional Spread Sheet Features',
      intro: 'Find Data Duplication in rows, Compare Columns and get the missing data',
      meta: [
        [
          { label: 'Front End', value: 'Swing' },
          { label: 'Programming Languages', value: 'J2SE7' },
        ],
        [
          { label: 'Client', value: 'DYPIET pimpri - Library' },
          { label: 'Service', value: 'Desktop App' },
        ],
      ],
    },
  },
  {
    id: 'zombiebird',
    title: 'Zombie Bird',
    subtitle: 'Android Game Development',
    tech: 'Android - Libgdx',
    image: 'zombiebird.png',
    detail: {
      heading: 'Zombie Bird',
      intro: 'Game same as flappy bird',
      link: { label: 'Website', text: 'Not yet published at AppStore' },
      body: ['Flappy Bird'],
      meta: [
        [
          { label: 'Platforms', value: 'HTML5, Android, Desktop' },
          { label: 'Gaming API', value: 'LibGdx' },
        ],
        [
          { label: 'Extra Activities', value: 'Just For Fun' },
          { label: 'Service', value: 'Game' },
        ],
      ],
    },
  },
  {
    id: 'personalsite',
    title: 'Personal Site',
    subtitle: 'Web Design',
    tech: 'Bootstrap-UI',
    image: 'personalsite.png',
    detail: {
      heading: 'Personal Interactive Site',
      intro: 'Online Interactive Resume',
      link: { label: 'Website', text: 'https://ankitbansal.co.in', href: 'https://ankitbansal.co.in' },
      body: [
        'Current Site. Originally built in 2016 with HTML5, JQuery, AngularJS, Bootstrap, CSS3, Typed.js, Wow.js and SmoothScroll.js; rebuilt in 2026 with Astro as a static, terminal-themed site.',
      ],
      meta: [
        [{ label: 'Front End Technologies', value: 'Astro, TypeScript, CSS (2016: HTML5, JQuery, AngularJS, Bootstrap, CSS3, Typed.js, Wow.js, SmoothScrolljs)' }],
        [
          { label: 'Extra Activities', value: 'Just for fun' },
          { label: 'Service', value: 'Web Design' },
        ],
      ],
    },
  },
  { id: 'maitribazaar-app', title: 'Ecommerce website', subtitle: 'Maitri Bazaar Grocery Shop', tech: 'Ionic', image: 'maitribazaar-app.JPG', href: 'https://play.google.com/store/apps/details?id=com.maitribazaar.groceryapp' },
  { id: 'patrah', title: 'Ecommerce website', subtitle: 'Patrah Sustainable Clothing', tech: 'Wordpress', image: 'patrah.png', href: 'https://patrah.com' },
  { id: 'maitribazaar-web', title: 'Ecommerce website', subtitle: 'Maitri Bazaar Grocery Shop', tech: 'Wordpress', image: 'maitribazaar-web.JPG', href: 'https://maitribazaar.com' },
];

// Featured websites: founder projects first, then products built as an employee.
export interface Featured {
  id: string;
  name: string;
  url: string;
  domain: string;
  relation: 'Founder' | 'Employee';
  role: string;
  description: string;
  facts: string[];
  links?: { label: string; href: string }[]; // notable sub-sections of the site
  image: string; // file name in src/assets/featured
}

export const featured: Featured[] = [
  {
    id: 'sarvakosh',
    name: 'SarvaKosh',
    url: 'https://sarvakosh.com',
    domain: 'sarvakosh.com',
    relation: 'Founder',
    role: 'Founder',
    description:
      'Open digital library of Bharatiya granths and scriptures. Read original Sanskrit, Hindi and regional texts alongside their manuscript scans, with line-by-line verification and entity references.',
    facts: ['350+ granths', '50,000+ scanned pages', 'Free & open heritage'],
    image: 'sarvakosh.png',
  },
  {
    id: 'bharatiyacomics',
    name: 'Bharatiya Comics',
    url: 'https://bharatiyacomics.com',
    domain: 'bharatiyacomics.com',
    relation: 'Founder',
    role: 'Founder',
    description:
      'Cinematic vertical webcomics adapted faithfully from the classical granths, epics and folklore of Bharat, in English and Hindi.',
    facts: ['472 chapters', 'Betal Pachisi, Singhasan Battisi & more', 'EN / हिन्दी'],
    image: 'bharatiyacomics.png',
  },
  {
    id: 'fincalculator',
    name: 'FinCalculator',
    url: 'https://fincalculator.in',
    domain: 'fincalculator.in',
    relation: 'Founder',
    role: 'Founder',
    description:
      'Free financial calculators for India: income tax, salary, SIP, loans and business, with the formulas shown and nothing stored. Rebuilt with Next.js (first built with Angular 9 as SIP, Income Tax and Loan calculators), with money lessons for kids and first-jobbers and a free public calculation API.',
    facts: ['1 lakh+ monthly visitors', '80+ calculators', 'Next.js', 'Public API & widgets'],
    links: [
      { label: 'FinJunior · /kids', href: 'https://fincalculator.in/kids' },
      { label: 'FinYouth · /youth', href: 'https://fincalculator.in/youth' },
    ],
    image: 'fincalculator.png',
  },
  {
    id: 'peerlist',
    name: 'Peerlist',
    url: 'https://peerlist.io',
    domain: 'peerlist.io',
    relation: 'Employee',
    role: 'Product Engineer (Full Stack)',
    description:
      'The professional network for builders to show their work, launch projects and find jobs. Joined at around 2,000 users and worked on almost every feature, performance and Stripe payments.',
    facts: ['2K → 200K+ users', 'Stripe payments', 'Jun 2023 – Sep 2026'],
    image: 'peerlist.png',
  },
  {
    id: 'autosend',
    name: 'AutoSend',
    url: 'https://autosend.com',
    domain: 'autosend.com',
    relation: 'Employee',
    role: 'Product Engineer, built at Peerlist',
    description:
      'Email platform for transactional, marketing and automated emails via API and SMTP. Built and scaled from the ground up into a high-throughput, containerized delivery platform.',
    facts: ['2M+ emails per campaign', 'API & SMTP relay', 'Docker / Kubernetes'],
    image: 'autosend.png',
  },
];

export const projectsNote = [
  'Published several more similar projects. And many more to add soon...',
  'There are multiple projects which I started but left in the middle because of priority changes.',
];

export const services = [
  {
    command: './hire --website',
    title: 'Website Development',
    icon: 'programming.png',
    lines: ['Ecommerce, Moocs, Blogs Website Development in Wordpress.'],
    price: '₹12k/website + hosting',
  },
  {
    command: './hire --interview',
    title: 'Technical Interviews',
    icon: 'interview.png',
    lines: ['Short of interviewers?', 'I can help in Frontend and Backend interviews.'],
    price: '₹2000/interview',
  },
  {
    command: './hire --freelance',
    title: 'Freelancing',
    icon: 'computer.png',
    lines: [
      'Website development in Tech stack - Java, Spring Boot Microservices, Node.js, React, Angular.',
      'Providing mentorship in understanding your work and code.',
    ],
    price: '₹2500/hour',
  },
];
