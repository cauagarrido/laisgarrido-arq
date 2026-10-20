import { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Instagram, Mail, Menu, Phone, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

type ProjectImage = { image: string; description: string };
type Project = { name: string; type: string; description: string; images: ProjectImage[] };

const residentialProjects: Project[] = [
  { name: 'Casa para viver com calma', type: 'Residencial · Arquitetura', description: 'Uma casa pensada para desacelerar. A integração entre os ambientes, a luz natural e os materiais acolhedores criam um refúgio para a rotina da família.', images: [
    { image: '/foto3.webp', description: 'A área social reúne estar e jantar em um ambiente aberto, iluminado e convidativo.' },
    { image: '/RENDER 09.webp', description: 'Texturas naturais e marcenaria sob medida dão unidade aos espaços.' },
    { image: '/foto1.webp', description: 'A composição de materiais traz aconchego sem abrir mão da leveza.' },
  ] },
  { name: 'Um refúgio natural', type: 'Residencial · Interiores', description: 'Interiores serenos, com tons orgânicos e materiais que aproximam a casa da natureza. Cada escolha foi feita para tornar os momentos cotidianos mais agradáveis.', images: [
    { image: '/foto4.webp', description: 'Uma paleta suave conecta os acabamentos e cria uma atmosfera tranquila.' },
    { image: '/foto2.webp', description: 'A luz percorre o ambiente e valoriza a simplicidade das formas.' },
    { image: '/RENDER 09.webp', description: 'Detalhes de madeira aquecem a composição e equilibram os tons claros.' },
  ] },
  { name: 'Lar, em cada detalhe', type: 'Residencial · Interiores', description: 'Um projeto de interiores construído em torno da personalidade dos moradores, com soluções funcionais e detalhes que tornam cada ambiente único.', images: [
    { image: '/foto1.webp', description: 'Elementos escolhidos com cuidado traduzem a identidade dos moradores.' },
    { image: '/foto3.webp', description: 'O layout aproveita melhor cada área e aproxima os ambientes de convivência.' },
    { image: '/foto4.webp', description: 'Acabamentos naturais completam o espaço com conforto visual.' },
  ] },
  { name: 'Luz e aconchego', type: 'Residencial · Arquitetura', description: 'A luz natural orienta este projeto residencial. A arquitetura valoriza as aberturas, a ventilação e uma relação mais leve entre interior e exterior.', images: [
    { image: '/foto2.webp', description: 'A entrada de luz transforma a percepção do espaço ao longo do dia.' },
    { image: '/RENDER 09.webp', description: 'Planos limpos e materiais acolhedores dão ritmo aos interiores.' },
    { image: '/foto3.webp', description: 'A área de convivência foi desenhada para receber com conforto.' },
  ] },
];

const commercialProjects: Project[] = [
  { name: 'Espaço de encontros', type: 'Comercial · Interiores', description: 'Um ambiente comercial que convida a ficar. O projeto combina circulação fluida, áreas de encontro e uma identidade acolhedora para receber diferentes públicos.', images: [
    { image: '/foto1.webp', description: 'A área principal organiza os fluxos e cria pontos naturais de encontro.' },
    { image: '/foto2.webp', description: 'A iluminação destaca os materiais e ajuda a criar uma atmosfera convidativa.' },
    { image: '/RENDER 09.webp', description: 'A marcenaria integra armazenamento e identidade visual.' },
  ] },
  { name: 'Um lugar para receber', type: 'Comercial · Interiores', description: 'Um espaço de atendimento pensado para unir acolhimento e praticidade. O layout orienta a circulação e deixa a experiência mais confortável desde a chegada.', images: [
    { image: '/foto2.webp', description: 'A recepção oferece uma chegada simples e acolhedora.' },
    { image: '/foto4.webp', description: 'Materiais resistentes e tons equilibrados dão personalidade ao espaço.' },
    { image: '/foto1.webp', description: 'A disposição do mobiliário mantém o ambiente aberto e funcional.' },
  ] },
  { name: 'Arquitetura que acolhe', type: 'Comercial · Arquitetura', description: 'Uma arquitetura comercial que aproxima marca e espaço. A proposta organiza os usos com clareza e cria ambientes agradáveis para clientes e equipe.', images: [
    { image: '/foto3.webp', description: 'A composição principal traduz a identidade do negócio em elementos arquitetônicos.' },
    { image: '/RENDER 09.webp', description: 'O desenho de interiores combina presença visual e uso cotidiano.' },
    { image: '/foto2.webp', description: 'A circulação conecta as áreas sem interromper a sensação de amplitude.' },
  ] },
  { name: 'Detalhes com propósito', type: 'Comercial · Interiores', description: 'Um projeto de interiores em que cada detalhe contribui para uma experiência coerente. Materiais, iluminação e mobiliário trabalham juntos para valorizar o negócio.', images: [
    { image: '/foto4.webp', description: 'Os acabamentos ajudam a criar uma identidade marcante e atemporal.' },
    { image: '/foto1.webp', description: 'A iluminação em camadas dá destaque aos pontos de interesse.' },
    { image: '/foto3.webp', description: 'Soluções sob medida aproveitam o espaço e facilitam a operação.' },
  ] },
];

function ProjectCarousel({ id, title, eyebrow, projects }: { id: string; title: string; eyebrow: string; projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [detailImage, setDetailImage] = useState(0);
  const move = (direction: number) => setActive((current) => (current + direction + projects.length) % projects.length);
  const project = projects[active];

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section id={id} className="projects-section section-pad">
      <div className="section-heading">
        <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
        <div className="carousel-controls">
          <span className="slide-count">{String(active + 1).padStart(2, '0')} <i>/</i> {String(projects.length).padStart(2, '0')}</span>
          <button aria-label="Projeto anterior" onClick={() => move(-1)}><ArrowLeft size={18} /></button>
          <button aria-label="Próximo projeto" onClick={() => move(1)}><ArrowRight size={18} /></button>
        </div>
      </div>
      <button type="button" className="project-feature" key={project.images[0].image + project.name} onClick={() => { setSelectedProject(project); setDetailImage(0); }} aria-label={`Ver detalhes do projeto ${project.name}`}>
        <img src={project.images[0].image} alt={project.name} loading="lazy" decoding="async" />
        <div className="project-overlay" />
        <div className="project-caption"><span>{project.type}</span><h3>{project.name}</h3><small>Ver projeto <ArrowUpRight size={14} /></small></div>
        <span className="project-index">{String(active + 1).padStart(2, '0')} — {String(projects.length).padStart(2, '0')}</span>
      </button>
      <div className="carousel-dots" aria-label="Escolher projeto">
        {projects.map((item, index) => <button key={item.name} className={index === active ? 'selected' : ''} aria-label={`Ver ${item.name}`} onClick={() => setActive(index)} />)}
      </div>
      {selectedProject && <div className="project-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`project-title-${id}`}>
          <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Fechar detalhes"><X size={21} /></button>
          <div className="modal-gallery">
            <img className="modal-main-image" src={selectedProject.images[detailImage].image} alt={`${selectedProject.name}: imagem ${detailImage + 1}`} />
            <div className="modal-thumbnails">{selectedProject.images.map((item, index) => <button type="button" key={`${item.image}-${index}`} onClick={() => setDetailImage(index)} className={index === detailImage ? 'active' : ''} aria-label={`Ver imagem ${index + 1}`}><img src={item.image} alt="" /></button>)}</div>
          </div>
          <div className="modal-copy"><span className="eyebrow">{selectedProject.type}</span><h2 id={`project-title-${id}`}>{selectedProject.name}</h2><p>{selectedProject.description}</p><div className="image-description"><span>Imagem {String(detailImage + 1).padStart(2, '0')} / {String(selectedProject.images.length).padStart(2, '0')}</span><p>{selectedProject.images[detailImage].description}</p></div><div className="modal-arrows"><button type="button" aria-label="Imagem anterior" onClick={() => setDetailImage((detailImage - 1 + selectedProject.images.length) % selectedProject.images.length)}><ArrowLeft size={17} /></button><button type="button" aria-label="Próxima imagem" onClick={() => setDetailImage((detailImage + 1) % selectedProject.images.length)}><ArrowRight size={17} /></button></div></div>
        </section>
      </div>}
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      for (const layer of layers) {
        const bounds = layer.getBoundingClientRect();
        if (bounds.bottom < -80 || bounds.top > window.innerHeight + 80) continue;
        const strength = Number(layer.dataset.parallax) || 0.03;
        const offset = Math.max(-22, Math.min(22, (viewportCenter - (bounds.top + bounds.height / 2)) * strength));
        layer.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
      }
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const links = [
    ['Sobre mim', '#sobre-mim'], ['O escritório', '#escritorio'], ['Equipe', '#equipe'],
    ['Projetos Comerciais', '#comerciais'], ['Projetos Residenciais', '#residenciais'],
  ];

  return (
    <div className="site-shell">
      <header className="hero" id="inicio">
        <div className="hero-backdrop" data-parallax="0.12" />
        <nav className="topbar" aria-label="Navegação principal">
          <a href="#inicio" className="brand" aria-label="Laís Garrido, início"><img src="/logo.png" alt="Laís Garrido Arquitetura" /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
          <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-contact" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
          </div>
        </nav>
        <div className="hero-content">
          <span className="hero-kicker">Arquitetura feita para sentir</span>
          <h1>Laís Garrido<br /><em>Arquitetura &amp; Interiores</em></h1>
          <p>Arquitetura e interiores pensados para acompanhar a vida, acolher momentos e inspirar novas formas de habitar.</p>
          <a className="hero-link" href="#sobre-mim">Conheça o nosso trabalho <ArrowDown size={16} /></a>
        </div>
        <div className="hero-bottom"><span>Salvador · Bahia</span><a href="#sobre-mim">Role para descobrir <span>↓</span></a></div>
      </header>

      <main>
        <section id="sobre-mim" className="about-section section-pad">
          <div className="about-photo"><img src="/banner.webp" alt="Laís Garrido, arquiteta" loading="lazy" decoding="async" data-parallax="0.035" /><span className="photo-note">Laís Garrido · Arquiteta</span></div>
          <div className="about-copy"><span className="eyebrow">Um pouco sobre mim</span><h2>Sobre mim</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consectetur earum, odio quae voluptates quis accusantium, nemo saepe necessitatibus asperiores fugit voluptas tempore excepturi nihil. Consequatur dolorem accusantium quibusdam nam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ab minus, necessitatibus cumque voluptatem perspiciatis sint error consequatur facere aperiam modi aspernatur nostrum a libero blanditiis molestias iste? Aspernatur, ipsa.</p>
            <a className="text-link" href="#escritorio">Conheça o escritório <ArrowRight size={16} /></a>
          </div>
        </section>

        <section id="escritorio" className="studio-section section-pad">
          <div className="studio-copy"><span className="eyebrow">Onde as ideias ganham forma</span><h2>O escritório</h2>
            <p>O escritório Laís Garrido Arquitetura acredita que os espaços têm o poder de transformar o cotidiano. Cada projeto nasce da escuta e do encontro entre a personalidade de quem vai viver ali e a beleza das soluções bem pensadas.</p>
            <p>Da primeira conversa à escolha dos últimos detalhes, criamos projetos autorais que equilibram funcionalidade, afeto e identidade — sempre atentos à história de cada cliente.</p>
            <div className="studio-signature"><span>Arquitetura com intenção, espaços com alma.</span><span className="signature-mark">LG</span></div>
          </div>
          <div className="studio-image"><img src="/RENDER 09.webp" alt="Projeto de interiores do escritório Laís Garrido" loading="lazy" decoding="async" data-parallax="0.035" /><span>Matéria, luz e vida.</span></div>
        </section>

        <section id="equipe" className="team-section section-pad"><div className="section-heading team-heading"><div><span className="eyebrow">Quem faz acontecer</span><h2>Uma equipe, muitos olhares.</h2></div><p>Talento, cuidado e colaboração em cada etapa do projeto.</p></div>
          <div className="team-grid">{[
            { number: '01', role: 'Arquitetura & Direção Criativa', image: '/banner.webp' },
            { number: '02', role: 'Projetos & Desenvolvimento', image: '/foto3.webp' },
            { number: '03', role: 'Interiores & Detalhamento', image: '/foto4.webp' },
          ].map((member) => <article className="team-card" key={member.number}><div className="team-photo"><img src={member.image} alt="" loading="lazy" decoding="async" /><span>{member.number}</span></div><div className="team-meta"><div><h3>Nome do profissional</h3><p>{member.role}</p></div><ArrowUpRight size={18} /></div></article>)}</div>
        </section>

        <ProjectCarousel id="residenciais" title="Projetos Residenciais" eyebrow="Feitos para chamar de lar" projects={residentialProjects} />
        <ProjectCarousel id="comerciais" title="Projetos Comerciais" eyebrow="Ideias que recebem bem" projects={commercialProjects} />

        <section id="contato" className="contact-section section-pad"><span className="eyebrow">Vamos criar algo especial?</span><h2>Seu próximo capítulo<br />começa em casa.</h2><p>Conte um pouco sobre o espaço que você sonha. Vai ser um prazer conversar.</p><a className="contact-button" href="https://wa.me/5571993185537" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} /> Fale com o escritório <ArrowUpRight size={16} /></a></section>
      </main>

      <footer className="footer"><a href="#inicio" className="footer-brand"><img src="/logo.png" alt="Laís Garrido Arquitetura" /></a><span>Arquitetura e interiores com intenção.</span><div className="footer-social"><a aria-label="Instagram" href="https://www.instagram.com/laisgarrido.arq/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a><a aria-label="E-mail" href="mailto:contacto@laisgarrido.com"><Mail size={18} /></a><a aria-label="Telefone" href="tel:+5571993185537"><Phone size={18} /></a></div><small>© {new Date().getFullYear()} Laís Garrido Arquitetura</small></footer>
    </div>
  );
}

export default App;
