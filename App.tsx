import { useState, useEffect } from 'react';
import SnippetDetail, { type SnippetData } from './SnippetDetail';
import justinTimeImg from './imports/image-1.png';
import bpiImg from './imports/image-2.png';
import ewalletImg from './imports/image-3.png';
import interstaffImg from './imports/image-4.png';
import next4growthImg from './imports/image-5.png';
import webdivineImg from './imports/image-6.png';

const projects = [
  {
    id: 1,
    title: 'BPI Digital Banking',
    category: 'Banking · Mobile',
    year: '2022–2025',
    description:
      'Product Integration Officer at Bank of the Philippine Islands, specialising in Onboarding and New-to-Bank journeys, and cross-product selling features — Open New Account, Apply for Credit Card, Open Wealth Fund, and Apply for Loans. Owned the end-to-end product design process from discovery and UX research through stakeholder sign-off and dev handoff.',
    image: bpiImg,
    tags: ['Onboarding', 'Cross-product Selling', 'UX Research', 'Mobile', 'Fintech'],
    wide: true,
    marginY: true,
  },
  {
    id: 2,
    title: 'E-wallet Mobile App',
    category: 'Fintech · Mobile',
    year: '2019–2022',
    description:
      'Main Designer and Product Owner — a personal fintech initiative designed for individuals who want a separate digital bank and everyday e-wallet. The app tracks daily spending, surfaces insights on where money goes, and sends notifications to keep users aware of how much they\'ve spent versus how much they should. Features include balance overview, transaction history, send money, and a spend chart with category breakdown.',
    image: ewalletImg,
    tags: ['Main Designer', 'Product Owner', 'Fintech', 'Mobile', 'Personal Project'],
    wide: false,
    marginY: true,
  },
  {
    id: 3,
    title: 'HRMS Dashboard',
    category: 'Enterprise · Web',
    year: '2022–2025',
    description:
      'Main Designer and Product Owner for Lognwork\'s HR management system — data visualisation, journey mapping, and design system documentation from concept to launch.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
    tags: ['Main Designer', 'Product Owner', 'Dashboard', 'Design Systems'],
    wide: false,
    marginY: true,
  },
  {
    id: 4,
    title: 'AI Companion Platform',
    category: 'AI · Web',
    year: '2024',
    description:
      'Main Designer and Product Owner for vsona.ai — led concept validation, rapid POC prototyping, and final interface delivery, bridging AI product requirements with intuitive UX.',
    image:
      'https://images.unsplash.com/photo-1776702683574-f91f73a3cd26?w=800&h=600&fit=crop&auto=format',
    tags: ['Main Designer', 'Product Owner', 'AI Product', 'POC'],
    wide: false,
    marginY: true,
  },
  {
    id: 5,
    title: 'IBM e-Learning Experiences',
    category: 'Enterprise · Learning',
    year: '2019–2022',
    description:
      'Main Designer and Product Owner for e-learning experiences across IBM\'s global business units. Led Design Thinking workshops and coached junior designers on tools and professional workflows.',
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop&auto=format',
    tags: ['Main Designer', 'Product Owner', 'e-Learning', 'Global'],
    wide: false,
    marginY: true,
  },
  {
    id: 6,
    title: 'Recruitment & SaaS Platforms',
    category: 'Web · SaaS',
    year: '2016–2019',
    description:
      'Main Designer and Product Owner for staffing and financial services web platforms — interstaffinc.com and next4growth.com — from UX discovery through responsive delivery.',
    image:
      'https://images.unsplash.com/photo-1783194588870-c00c3b134780?w=800&h=600&fit=crop&auto=format',
    tags: ['Main Designer', 'Product Owner', 'Web App', 'SaaS'],
    wide: false,
  },
  {
    id: 7,
    title: 'JustInTime',
    category: 'HR Tech · Mobile & Web',
    year: '2016–2019',
    description:
      'Main Designer and Product Owner for JustInTime — an HR platform for remote employee monitoring. Employees use the mobile app to view schedules, log attendance, and check in or out from the field. The HR team gets a full web dashboard with attendance tracking, workforce analytics (total hours, field work, leave), employee directory, and payroll management.',
    image: justinTimeImg,
    tags: ['Main Designer', 'Product Owner', 'HR Tech', 'Mobile', 'Web Dashboard'],
    wide: true,
    marginY: true,
  },
];

const experience = [
  {
    role: 'Product Design Lead',
    company: 'Stratpoint Global Outsourcing',
    period: 'Sept 2025 – Present',
    description:
      'Built and led the Product Design team across client and internal initiatives. Established scalable design frameworks and AI-powered workflows. Merged BA and UI/UX functions into unified Product Designer roles — driving UX discovery, journey mapping, IA, and rapid prototyping aligned with business goals.',
  },
  {
    role: 'Product Integration Officer',
    company: 'Bank of the Philippine Islands (BPI)',
    period: '2022 – 2025',
    description:
      'Oversaw the UI/UX team in end-to-end product design for the bank\'s digital platforms. Conducted UX research, stakeholder interviews, and requirements gathering. Facilitated Agile ceremonies and managed the product backlog across cross-functional teams.',
  },
  {
    role: 'UI/UX Designer & Technical Coach',
    company: 'IBM',
    period: '2019 – 2022',
    description:
      'Designed e-learning experiences for IBM clients and employees across multiple global business units. Led Design Thinking workshops, presented interactive prototypes to project stakeholders, and coached junior designers on technical tools and workflows.',
  },
  {
    role: 'UI/UX Designer',
    company: 'CCS PH',
    period: '2016 – 2019',
    description:
      'Designed mobile apps and websites for a diverse client portfolio from discovery through delivery. Presented user flows, wireframes, and UX recommendations. Mentored junior designers and contributed to A/B testing and usability research.',
  },
  {
    role: 'Multimedia Designer',
    company: 'Louise Berger Group',
    period: '2014 – 2016',
    description:
      'Produced e-learning courses, video documentaries, design collateral, and newsletters for internal departments across the organisation.',
  },
];

const skills = [
  'Product & UI/UX Design',
  'Design Systems',
  'Team Leadership & Mentoring',
  'UX Research & Discovery',
  'Information Architecture',
  'Agile & Sprint Facilitation',
  'Rapid Prototyping',
  'A/B Testing & Usability QA',
  'Design Thinking',
  'AI-Powered Workflows',
  'Stakeholder Presentation',
  'Print & Brand Design',
];

const tools = [
  'Figma',
  'Sketch',
  'Adobe Creative Suite',
  'Miro',
  'Mural',
  'Notion',
  'Trello',
  'Claude AI',
  'Gemini',
];

const snippets: SnippetData[] = [
  {
    title: 'BPI Digital Banking',
    client: 'Bank of the Philippine Islands',
    category: 'Banking · Mobile',
    image: bpiImg,
    link: null,
    overview:
      "As Product Integration Officer, I owned the end-to-end design of BPI's highest-impact digital touchpoints — Onboarding, New-to-Bank journeys, and cross-product selling features including Open New Account, Apply for Credit Card, Open Wealth Fund, and Apply for Loans. I led UX research, wireframing, prototyping, and dev handoff across a cross-functional team of engineers, product managers, and compliance stakeholders.",
    challenges: [
      'Regulatory compliance requirements constrained the interface heavily, limiting copy and layout flexibility.',
      'High drop-off rates during onboarding due to lengthy KYC and document upload steps.',
      'Cross-selling features were buried and had low discoverability, resulting in missed revenue opportunities.',
      'Coordinating design decisions across legal, risk, and engineering teams with competing priorities.',
    ],
    strategy: [
      'Ran moderated usability tests and exit-intent interviews to identify the exact steps causing drop-off.',
      'Redesigned the onboarding flow using progressive disclosure — breaking the process into smaller, clearly-labelled milestones.',
      'Introduced contextual cross-sell prompts tied to user account events (e.g. salary credit triggering a savings upgrade offer).',
      'Built a shared design system that aligned legal-approved copy with UI patterns, reducing review cycles.',
      'Facilitated weekly design critiques with engineering and compliance to surface blockers early.',
    ],
    results: [
      'Reduced onboarding drop-off by surfacing friction points and restructuring the form sequence.',
      'Cross-sell feature uptake improved following contextual prompt redesign.',
      'Delivered a reusable component library that accelerated subsequent feature releases.',
      "Design system adopted across BPI's mobile and web digital platforms.",
    ],
  },
  {
    title: 'E-wallet Mobile App',
    client: 'Personal Project',
    category: 'Fintech · Mobile',
    image: ewalletImg,
    link: null,
    overview:
      'A self-initiated fintech product designed for individuals who want a dedicated digital wallet separate from their main bank account. The app tracks daily spending in real time, surfaces category-level insights, and sends smart notifications when users approach their self-set spend limits — helping build healthier financial habits without friction.',
    challenges: [
      'Designing for behaviour change is complex — users often resist spending visibility because it creates anxiety.',
      'Balancing feature richness (insights, send money, card management) with a simple, non-overwhelming UI.',
      'Notification fatigue: too many alerts would cause users to disable them entirely.',
      'Defining the MVP scope solo, without a product team or external stakeholders to validate against.',
    ],
    strategy: [
      'Anchored the design in spending psychology — framing insights as neutral facts, not judgements, to reduce anxiety.',
      'Used a card-based information hierarchy to let users surface detail on demand rather than presenting everything upfront.',
      'Designed a tiered notification system: one daily summary plus a real-time alert only when 80% of a budget is reached.',
      'Conducted guerrilla testing with 5 participants to validate the spend chart and category breakdown before finalising.',
    ],
    results: [
      'Delivered a complete end-to-end mobile design covering balance overview, send money, spend chart, and category breakdown.',
      'Notification strategy kept alert volume low while maintaining spend awareness.',
      'The project became a showcase piece for personal fintech product thinking and was referenced in subsequent client pitches.',
    ],
  },
  {
    title: 'JustInTime HR App',
    client: 'JustInTime (Personal Project)',
    category: 'HR Tech · Mobile & Web',
    image: justinTimeImg,
    link: null,
    overview:
      'An HR platform designed for organisations with field-based and remote workforces. The mobile app lets employees view their daily schedules, log attendance, and check in or out using location-based verification. The web dashboard gives HR teams a real-time view of workforce attendance, total hours logged, field vs. office splits, leave requests, and payroll-ready summaries.',
    challenges: [
      'Field-based check-ins require location reliability — poor GPS signal or device inconsistencies could break attendance records.',
      'HR managers needed an at-a-glance dashboard without being overwhelmed by raw data from dozens of employees.',
      'Bridging the UX between a consumer-grade mobile app and an enterprise web dashboard serving very different user types.',
      'Ensuring the mobile UI worked well on mid-range Android devices commonly used by field staff.',
    ],
    strategy: [
      'Designed a geo-fenced check-in model with a clear status indicator (checked in / checked out / late) to give employees immediate feedback.',
      'Structured the dashboard around key HR KPIs — Total Hours, Present, Field Work, Leave — visible at the top before drilling into individual records.',
      'Applied separate design languages for the two surfaces: a warm, friendly mobile UI for employees vs. a data-dense, neutral dashboard for HR.',
      'Used low-fidelity prototypes with field staff and HR managers separately to validate the two different interaction models.',
    ],
    results: [
      'Replaced manual attendance sheets with a digital check-in system, eliminating data entry errors.',
      'HR managers gained real-time visibility into field workforce status without chasing updates.',
      'The employee directory, attendance log, and payroll summary were consolidated into a single dashboard workflow.',
      'Delivered a scalable design system covering both mobile and web surfaces.',
    ],
  },
  {
    title: 'Interstaff',
    client: 'Interstaff Inc.',
    category: 'Freelance · Web',
    image: interstaffImg,
    link: 'https://www.interstaffinc.com/',
    overview:
      'UI/UX designer for a US-based nursing staffing platform connecting international nurses with Registered Nursing roles in the United States. The project covered the full public-facing website including "For Nurses", "For Hospitals", and the application journey — with bilingual support for English and Spanish-speaking audiences.',
    challenges: [
      'Building trust with an international nursing audience who are making a life-changing career decision.',
      'Designing for two distinct user groups — nurses seeking opportunities and hospitals seeking candidates — within a single site.',
      'Bilingual UX (English/Spanish) required layout flexibility and careful typographic hierarchy across both languages.',
      'Complex regulatory and visa information needed to be communicated clearly without legal jargon.',
    ],
    strategy: [
      'Led with emotional design — hero imagery and testimonials from placed nurses to establish credibility and aspiration.',
      'Created distinct entry points for nurses and hospitals in the primary navigation to reduce friction for both audiences.',
      'Applied plain-language principles to the visa and process content, using step-by-step visual flows instead of dense paragraphs.',
      'Designed a bilingual toggle system that preserved layout integrity across English and Spanish content.',
    ],
    results: [
      'Delivered a live bilingual website serving both nurse and hospital audiences.',
      'Improved content clarity around the US Registered Nursing pathway, reducing inbound support queries.',
      'Site has been in active use connecting international nurses with US healthcare employers.',
    ],
  },
  {
    title: 'Next4Growth',
    client: 'Next4Growth',
    category: 'Freelance · Web & Dev',
    image: next4growthImg,
    link: 'https://www.next4growth.com/',
    overview:
      'UI/UX designer and developer for a bookkeeping and fractional CFO services firm serving small businesses and startups. I designed and built the full website — covering services pages, tech integrations showcasing QuickBooks and Xero compatibility, and an appointment booking flow to convert visitors into consultations.',
    challenges: [
      'Financial services language is technical and trust-sensitive — the design needed to feel credible without being cold.',
      'Small business owners are time-poor; the site needed to communicate value quickly and route users to booking with minimal steps.',
      'Acting as both designer and developer required scope discipline to avoid scope creep during build.',
    ],
    strategy: [
      'Led with a clear value proposition above the fold — "Bookkeeping & CFO Services for Small Businesses" — with an immediate CTA to book a free consultation.',
      'Showcased tech integrations (QuickBooks, Xero) prominently to signal credibility with existing small business tools.',
      "Structured services pages around the client's pain points (cashflow, tax, reporting) rather than service names.",
      'Built the site in a component-based structure for easy content updates by the client post-launch.',
    ],
    results: [
      'Live website with active appointment booking converting visitors to consultations.',
      'Services clearly communicated across bookkeeping, payroll, and fractional CFO offerings.',
      'Client able to independently update content post-handoff.',
    ],
  },
  {
    title: 'Web Divine',
    client: 'Web Divine (Agency)',
    category: 'Agency · Web',
    image: webdivineImg,
    link: 'https://webdivine.agency/',
    overview:
      "Designed the agency's own website and delivered client sites across healthcare, retail, not-for-profit, and professional services industries for Web Divine, an Australia-based design agency. Over the engagement I contributed to 60+ client projects — spanning discovery, wireframing, visual design, and delivery.",
    challenges: [
      'Maintaining design quality and brand consistency at pace across 60+ projects with varying client briefs.',
      'Adapting the design process to wildly different industries — healthcare UX requirements differ substantially from retail or non-profit.',
      "The agency's own website needed to demonstrate design capability while remaining fast to build and easy to maintain.",
    ],
    strategy: [
      'Developed reusable design components and brand adaptation templates to accelerate project delivery without sacrificing quality.',
      'Established a discovery-first intake process for each client — even a brief 30-minute stakeholder session shaped better outcomes.',
      'For the agency site, prioritised portfolio presentation and client testimonials as the primary conversion mechanism.',
    ],
    results: [
      '60+ client websites designed and delivered across diverse industries.',
      'Agency site live and in active use for client acquisition.',
      'Reusable component approach reduced average design-to-delivery time across the portfolio.',
    ],
  },
];

const caseStudies = [
  {
    title: "Redesigning BPI's Mobile Banking App",
    subtitle: 'Onboarding & Cross-Selling',
    description:
      'Led the UI/UX strategy and design execution for the app\'s highest-impact touchpoints — the Onboarding and New-to-Bank journeys, Open New Account, Apply for Credit Card, Open Wealth Fund, and Apply for Loans.',
    metrics: [
      { value: '+50%', label: 'Increase in web traffic' },
      { value: '+20%', label: 'Performance uplift' },
    ],
    tags: ['Banking', 'Mobile', 'UX Research', 'Product Strategy'],
    file: '/case-study-bpi.pdf',
    accent: '#C0392B',
  },
  {
    title: 'Designing a Paperless Expense Tracker',
    subtitle: 'ExpenseSnap — for Employees & Finance Teams',
    description:
      'End-to-end product design for an internal mobile app replacing manual paper-based expense tracking. Led from discovery to prototype — UX research, journey mapping, style guide, wireframes, and user testing.',
    metrics: [
      { value: '100%', label: 'Paperless workflow' },
      { value: 'Real-time', label: 'Spend visibility' },
      { value: 'AI-SDLC', label: 'AI-assisted process' },
    ],
    tags: ['Fintech', 'Internal Tool', 'AI-Assisted', 'Product Design'],
    file: '/case-study-expensesnap.pdf',
    accent: '#1A3C34',
  },
  {
    title: "Airnergy Renewables' Digital Experience",
    subtitle: 'Making renewable energy simple and trustworthy',
    description:
      'Lead Product Designer — redefined the brand\'s digital experience turning technical, jargon-heavy content into a clear, user-centred interface that improved engagement and reduced confusion across devices.',
    metrics: [
      { value: '-28%', label: 'User confusion' },
      { value: '-33%', label: 'Drop-off rate' },
    ],
    tags: ['Web Design', 'Brand', 'UX Strategy', 'Responsive'],
    file: '/case-study-airnergy.pdf',
    accent: '#2D4A2A',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'snippets' | 'case-studies'>('snippets');
  const [selectedSnippet, setSelectedSnippet] = useState<SnippetData | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (selectedSnippet) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'auto';
    }
  }, [selectedSnippet]);

  if (selectedSnippet) {
    return (
      <SnippetDetail
        snippet={selectedSnippet}
        onBack={() => setSelectedSnippet(null)}
      />
    );
  }

  return (
    <div>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a href="#top" className="nav-name"><span>Janeil Vino</span></a>
        <ul className="nav-links">
          <li><a href="#work"><span>Work</span></a></li>
          <li><a href="#experience"><span>Experience</span></a></li>
          <li><a href="#skills"><span>Skills</span></a></li>
          <li><a href="#contact"><span>Contact</span></a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div>
          <p className="hero-label">Product Design Lead</p>
          <h1 className="hero-name" style={{ color: 'rgb(8, 20, 76)' }}>
            <span>Janeil Vino</span>
          </h1>
          <p className="hero-bio" style={{ color: 'rgb(28, 28, 27)' }}>
            <span>10+ years designing digital products across banking, enterprise, and tech — building design teams, scalable systems, and experiences that connect user needs to business outcomes.</span>
          </p>
          <div className="hero-links">
            <a href="mailto:vinojaneil@gmail.com"><span>vinojaneil@gmail.com</span></a>
            <span className="divider">·</span>
            <a href="tel:+639542390908"><span>+63 954 239 0908</span></a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num" style={{ color: 'rgb(8, 20, 76)' }}>10+</span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat">
            <span className="stat-num" style={{ color: 'rgb(8, 20, 76)' }}>50%</span>
            <span className="stat-label">Web traffic uplift</span>
          </div>
          <div className="stat">
            <span className="stat-num" style={{ color: 'rgb(8, 20, 76)' }}>5</span>
            <span className="stat-label">Industries</span>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section">
        <div className="section-header">
          <span className="section-num" style={{ color: 'rgb(95, 88, 76)' }}>01</span>
          <h2 className="section-title" style={{ color: 'rgb(8, 20, 76)' }}>Previous Work</h2>
        </div>

        {/* Deep Dives sub-section */}
        <div className="deep-dives deep-dives--flush">
          <div className="deep-dives-header">
            <div className="tab-toggle">
              <button
                className={`tab-btn${activeTab === 'snippets' ? ' tab-btn--active' : ''}`}
                onClick={() => setActiveTab('snippets')}
              >
                <span>Snippets</span>
              </button>
              <button
                className={`tab-btn${activeTab === 'case-studies' ? ' tab-btn--active' : ''}`}
                onClick={() => setActiveTab('case-studies')}
              >
                <span>Case Studies</span>
              </button>
            </div>
          </div>

          {activeTab === 'snippets' && (
            <div className="snippets-grid">
              {snippets.map((s) => (
                <div
                  key={s.title}
                  className="snippet-card snippet-card--clickable"
                  onClick={() => setSelectedSnippet(s)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedSnippet(s)}
                >
                  <div className="snippet-img-wrap">
                    <img src={s.image} alt={s.title} className="snippet-img" />
                    <div className="snippet-img-overlay">
                      <span>View Project →</span>
                    </div>
                  </div>
                  <div className="snippet-info">
                    <p className="snippet-category"><span>{s.category}</span></p>
                    <h3 className="snippet-title"><span>{s.title}</span></h3>
                    <p className="snippet-desc"><span>{s.overview}</span></p>
                    {s.link && (
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noreferrer"
                        className="snippet-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Visit site →</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'case-studies' && (
            <div className="cs-list">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="cs-card">
                  <div className="cs-accent" style={{ background: cs.accent }} />
                  <div className="cs-body">
                    <div className="cs-top">
                      <div>
                        <h3 className="cs-title"><span>{cs.title}</span></h3>
                        <p className="cs-subtitle"><span>{cs.subtitle}</span></p>
                      </div>
                      <a href={cs.file} target="_blank" rel="noreferrer" className="cs-cta">
                        <span>View Case Study</span>
                      </a>
                    </div>
                    <p className="cs-desc"><span>{cs.description}</span></p>
                    <div className="cs-metrics">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="cs-metric">
                          <span className="cs-metric-val"><span>{m.value}</span></span>
                          <span className="cs-metric-label"><span>{m.label}</span></span>
                        </div>
                      ))}
                    </div>
                    <ul className="cs-tags">
                      {cs.tags.map((t) => (
                        <li key={t}><span>{t}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section section--alt">
        <div className="section-header">
          <span className="section-num" style={{ color: 'rgb(95, 88, 76)' }}>02</span>
          <h2 className="section-title" style={{ color: 'rgb(8, 20, 76)' }}>Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((e, i) => (
            <div key={i} className="exp-item">
              <p className="exp-period">{e.period}</p>
              <div>
                <h3 className="exp-role">{e.role}</h3>
                <p className="exp-company">{e.company}</p>
                <p className="exp-desc">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-num" style={{ color: 'rgb(95, 88, 76)' }}>03</span>
          <h2 className="section-title" style={{ color: 'rgb(8, 20, 76)' }}>Skills & Tools</h2>
        </div>
        <div className="skills-wrap">
          <div>
            <h3 className="skills-group-title">Competencies</h3>
            <ul className="skills-list">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="skills-group-title">Tools</h3>
            <ul className="skills-list">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="education">
              <h3 className="skills-group-title" style={{ marginTop: '2.5rem' }}>
                Education
              </h3>
              <p className="edu-degree">Bachelor of Arts in Multimedia Arts</p>
              <p className="edu-school">
                De La Salle College of Saint Benilde · 2010–2014
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="contact">
        <div className="contact-inner">
          <p className="contact-label">Let's work together</p>
          <a href="mailto:vinojaneil@gmail.com" className="contact-email">
            vinojaneil@gmail.com
          </a>
          <div className="contact-links">
            <a href="tel:+639542390908">+63 954 239 0908</a>
            <a
              href="https://vinojaneil.wixsite.com/site"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio Archive
            </a>
          </div>
          <p className="contact-copy">© 2026 Janeil Vino</p>
        </div>
      </footer>
    </div>
  );
}
