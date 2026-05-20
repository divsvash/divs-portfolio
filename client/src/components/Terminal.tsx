import React, { useState } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { PORTFOLIO_DATA } from '@/lib/terminalData';
import './Terminal.css';

/* ── Small helpers ─────────────────────────────────────── */
const Dot = ({ c }: { c: 'r' | 'y' | 'g' }) => (
  <div className={`win-dot win-dot--${c}`} />
);
const WinDots = () => (
  <div className="win-dots"><Dot c="r" /><Dot c="y" /><Dot c="g" /></div>
);

/* ── Blink cursor ───────────────────────────────────────── */
const Cursor = ({ tall = false }: { tall?: boolean }) => (
  <span className={`cursor-block${tall ? ' cursor-block--tall' : ''}`} />
);

/* ── Skill bar row ──────────────────────────────────────── */
const SkillRow = ({ label, pct }: { label: string; pct: number }) => (
  <div className="sk-row">
    <span className="sk-lbl">{label}</span>
    <div className="sk-track"><div className="sk-fill" style={{ width: `${pct}%` }} /></div>
    <span className="sk-pct">{pct}%</span>
  </div>
);

const ExpCard = ({ role, org, period, desc }: { role: string; org: string; period: string; desc: string }) => (
  <div className="exp-card">
    <div className="exp-card__header">
      <div className="exp-card__role">{role}</div>
      <div className="exp-card__period">{period}</div>
    </div>
    <div className="exp-card__org">{org}</div>
    <div className="exp-card__desc">{desc}</div>
  </div>
);

/* ── Project card ───────────────────────────────────────── */
const colorMap: Record<string, string> = {
  'Computer Vision': 'g', 'React Native': 'c', 'PyTorch': 'p',
  'Next.js': 'c', 'PostgreSQL': 'a', 'Redis': 'g',
  'Distributed': 'p', 'Node.js': 'g', 'WebRTC': 'c',
  'Rust': 'a', 'P2P': 'g', 'Cryptography': 'p',
  'ZK Proofs': 'g', 'AI Safety': 'c', 'Solidity': 'p',
};
const ProjCard = ({ id, name, tags, desc }: { id: number; name: string; tags: string[]; desc: string }) => (
  <div className="proj-card">
    <div className="proj-num">0{id} / {name.toLowerCase().replace(/ /g, '_')}</div>
    <div className="proj-name sg">{name}</div>
    <div className="proj-desc">{desc}</div>
    <div className="proj-tags">
      {tags.map(t => <span key={t} className={`tag tag-${colorMap[t] || 'g'}`}>{t}</span>)}
    </div>
    <span className="proj-arrow">↗</span>
  </div>
);

/* ── Media item ─────────────────────────────────────────── */
const covers = ['mc-s1','mc-s2','mc-s3','mc-s4','mc-l1','mc-l2','mc-l3','mc-l4','mc-b1','mc-b2','mc-b3'];
const coverEmoji = ['🎤','🎵','🎶','🎸','🏜️','🌑','⚛️','🏠','🤖','🧠','🌌'];

const MediaItem = ({ ci, title, meta, extra, progress, pct }: {
  ci: number; title: string; meta: string; extra?: React.ReactNode; progress?: number; pct?: number;
}) => (
  <div className="mi">
    <div className={`mi-cover ${covers[ci]}`}>{coverEmoji[ci]}</div>
    <div className="mi-info">
      <div className="mi-title sg">{title}</div>
      <div className="mi-meta">{meta}</div>
      {progress !== undefined && (
        <div className="bk-bar"><div className="bk-fill" style={{ width: `${progress}%` }} /></div>
      )}
    </div>
    {extra && <span className="mi-extra">{extra}</span>}
    {pct !== undefined && <span className="mi-pct">{pct}%</span>}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PORTFOLIO COMPONENT
═══════════════════════════════════════════════════════════ */
export const Terminal: React.FC = () => {
  const { lines, input, setInput, handleInput, terminalEndRef, executeCommand } = useTerminal();
  const [activeTab, setActiveTab] = useState<'terminal' | 'skills'  | 'education'>('terminal');
  const [navOpen, setNavOpen] = useState(false);

  const tabs = (['terminal','skills','education'] as const);

  return (
    <div className="portfolio-root">

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-brand"><em>[~]&nbsp;</em>divyanshi@portfolio:~</div>
        <div className="nav-sep" />
        <ul className={`nav-links${navOpen ? ' nav-links--open' : ''}`} id="navMenu">
          {(['about','skills','projects','contact'] as const).map((s, i) => (
            <li key={s}>
              <a href={`#${s}`} onClick={() => setNavOpen(false)}>
                <span className="nn">[0{i+1}]</span>{s}
              </a>
            </li>
          ))}
        </ul>
        <div className="status-dot" title="Open to opportunities" />
        <button className="hamburger" onClick={() => setNavOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── PAGE ── */}
      <div className="page">

        {/* ═══ HERO — 2-col split (photo | bio) ════════════════ */}
        <section className="hero-section" id="about">
          <div className="wrap">
            <div className="win win--glow win-enter">
              <div className="chrome">
                <WinDots />
                <div className="chrome-title">divyanshi@portfolio:~$ cat about_me.txt</div>
                <div className="chrome-badge">bash — 80×24</div>
              </div>

              {/* ENFORCED 2-col — never stacks above 640px */}
              <div className="hero-split">

                {/* LEFT: Photo */}
                <div className="hero-photo">
                  <div className="photo-wrap">
                    <div className="photo-label">// profile.jpg</div>
                    <div className="photo-box">
                      <div className="photo-interior">
                        {PORTFOLIO_DATA.photoUrl !== '/profile.jpg' ? (
                          <img src={PORTFOLIO_DATA.photoUrl} alt="Divyanshi Vashistha" className="photo-img" />
                        ) : (
                          <>
                            <div className="photo-avatar">👩‍💻</div>
                            <div className="photo-hint">
                              Divyanshi Vashistha<br />
                              <span>[ add profile.jpg to /public ]</span>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="photo-status">
                        <span className="blink-dot" />&gt;&nbsp;status: ready to build
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Bio */}
                <div className="hero-bio">
                  <div className="bio-crumb">
                    <span className="bio-crumb__prompt">divyanshi@portfolio:~$</span>
                    <span className="bio-crumb__cmd">cat about_me.txt</span>
                  </div>

                  <h1 className="bio-name sg">
                    Hi, I'm Divyanshi<Cursor tall />
                  </h1>

                  <p className="bio-tagline sg">
                    AI<span className="bio-tagline__x">×</span>
                    Systems<span className="bio-tagline__x">×</span>
                    Product
                  </p>

                  <p className="bio-desc">
                    I build intelligent systems that solve real problems.<br />
                    Currently exploring the intersection of AI, systems and<br />
                    user-centric product design — shipping things that matter.
                  </p>

                  <div className="otw sg">
                    <span className="blink-dot" />Open to new opportunities
                  </div>

                  <div className="cta-row">
                    <a href="#projects" className="btn btn--primary sg">&gt;_ View Projects</a>
                    <a href="/Divyanshi_Vashistha_Resume.pdf" download className="btn btn--sec sg">↓ Resume</a>
                    <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener" className="btn btn--sec sg">⌥ GitHub</a>
                    <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noopener" className="btn btn--ghost sg">◈ LinkedIn</a>
                    <a href={`mailto:${PORTFOLIO_DATA.social.email}`} className="btn btn--ghost sg">✉ Contact</a>
                  </div>
                </div>

              </div>{/* /hero-split */}
            </div>{/* /win */}
          </div>
        </section>

        {/* ═══ TERMINAL / TABS ══════════════════════════════════ */}
        <section className="terminal-section" id="skills">
          <div className="wrap">
            <div className="win win--dim" id="termWin" onClick={() => document.getElementById('termInput')?.focus()}>

              {/* Tab bar */}
              <div className="tab-bar">
                <WinDots />
                {tabs.map(t => (
                  <button
                    key={t}
                    className={`tab sg${activeTab === t ? ' tab--on' : ''}`}
                    onClick={e => { e.stopPropagation(); setActiveTab(t); }}
                  >
                    {t === 'terminal' ? <><span>▶ terminal</span><span className="tab-pip" /></> : t}
                  </button>
                ))}
              </div>

              {/* ── TAB: Terminal ── */}
              {activeTab === 'terminal' && (
                <div className="term-grid">
                  {/* Pane 1 */}
                  <div className="term-pane">
                    <div className="pane-head">// whoami</div>
                    <div className="pane-body">
                      <span className="t-ln"><span className="t-p">divyanshi@portfolio:~$</span> <span className="t-c">whoami</span></span>
                      <span className="t-o">&gt; Full-stack builder.</span>
                      <span className="t-o">&gt; Problem solver.</span>
                      <span className="t-o">&gt; Coffee enthusiast.</span>
                      <span className="t-sp" />
                      <span className="t-ln"><span className="t-p">divyanshi@portfolio:~$</span> <span className="t-c">status</span></span>
                      <span className="t-o"><span style={{color:'#00ff88'}}>●</span> available</span>
                      <span className="t-o"><span className="t-d">location: </span>India 🇮🇳</span>
                      <span className="t-o"><span className="t-d">mode: </span><span className="t-c">building</span></span>
                    </div>
                  </div>

                  {/* Pane 2 */}
                  <div className="term-pane">
                    <div className="pane-head">// quick_nav</div>
                    <div className="pane-body">
                      <span className="t-d t-ln" style={{marginBottom:8,display:'block'}}>// click to execute</span>
                      {(['projects','skills','contact','ventures','vibes','resume'] as const).map(cmd => (
                        <button key={cmd} className="cmd-btn" onClick={e => { e.stopPropagation(); executeCommand(cmd); }}>
                          <span className="cmd-btn__sign">$</span>
                          <span className="cmd-btn__lbl sg">{cmd}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pane 3: output */}
                  <div className="term-pane">
                    <div className="pane-head">// output</div>
                    <div id="termOutput" className="term-output">
                      {lines.map((line, i) => (
                        <div key={i} className="t-ln">
                          {line.type === 'input'   && <span className="t-p">{line.content}</span>}
                          {line.type === 'welcome' && <span className="t-d">{line.content}</span>}
                          {line.type === 'output'  && <pre className="t-o" style={{margin:'3px 0 8px',whiteSpace:'pre-wrap',fontFamily:'inherit'}}>{line.content}</pre>}
                        </div>
                      ))}
                      <div ref={terminalEndRef} />
                    </div>
                    <div className="term-input-row">
                      <span className="term-input-row__prompt">divyanshi@portfolio:~$</span>
                      <input
                        id="termInput"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleInput}
                        placeholder="type a command..."
                        autoComplete="off"
                        spellCheck={false}
                        className="term-input"
                      />
                      <div className="term-cursor" />
                    </div>
                  </div>
                </div>
              )}

              {/* ── TAB: Skills ── */}
              {activeTab === 'skills' && (
                <div className="skills-pane">
                  <div>
                    <div className="sk-head sg">AI &amp; ML</div>
                    <SkillRow label="LLMs / RAG"   pct={92} />
                    <SkillRow label="Fine-tuning"  pct={82} />
                    <SkillRow label="AI Safety"    pct={78} />
                    <SkillRow label="CV / Vision"  pct={72} />
                  </div>
                  <div>
                    <div className="sk-head sg">Systems &amp; Backend</div>
                    <SkillRow label="Distributed"  pct={86} />
                    <SkillRow label="Cryptography" pct={76} />
                    <SkillRow label="Node.js"      pct={89} />
                    <SkillRow label="Python"       pct={91} />
                  </div>
                  <div>
                    <div className="sk-head sg">Frontend &amp; DevOps</div>
                    <SkillRow label="React / TS"   pct={91} />
                    <SkillRow label="Next.js"      pct={84} />
                    <SkillRow label="Docker/K8s"   pct={75} />
                    <SkillRow label="PostgreSQL"   pct={88} />
                  </div>
                </div>
              )}

              

              {/* ── TAB: Education ── */}
              {activeTab === 'education' && (
                <div className="edu-pane">
                  <ExpCard role="B.Tech — Computer Science & Engineering with specialization in Cloud Computing" org="SRM Institute of Science and Technology" period="2024- present" desc="Focus: AI/ML, Distributed Systems, Cloud systems, Product Development. Active researcher and open-source builder." />
                  <ExpCard role="High School" org="Sophia Girls' School, Meerut Cantt" period="2011- 2024" desc="PCM with Computer Science." />
                </div>
              )}

            </div>{/* /win */}
          </div>
        </section>

        {/* ═══ PROJECTS ═════════════════════════════════════════ */}
        <section className="proj-section" id="projects">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-label">// featured_projects</span>
              <div className="sec-line" />
              <span className="sec-hint">ls -la ~/projects/</span>
            </div>
            <div className="proj-grid">
              {PORTFOLIO_DATA.projects.map(p => <ProjCard key={p.id} {...p} />)}
              <div className="proj-card proj-card--empty">
                <div className="proj-empty-plus">+</div>
                <div className="proj-empty-label">more on github</div>
                <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener" className="sg">→ github.com/divsvash</a>
              </div>
            </div>
          </div>
        </section>

        

        {/* ═══ FOOTER — 3-col horizontal ════════════════════════ */}
        <footer className="footer" id="contact">

          <div className="footer-top">
            <span className="footer-brand">divyanshi@portfolio</span>
            <div className="footer-rule" />
            <span className="footer-tip">^ tip: try <em>'about'</em>, <em>'skills'</em>, <em>'projects'</em></span>
            <div className="footer-rule2" />
            <span className="footer-code sg">&lt;/&gt; code by divyanshi</span>
          </div>

          {/* ENFORCED 3-col — never stacks above 640px */}
          <div className="footer-media">

            {/* COL 1: Spotify */}
            <div className="media-col">
              <div className="media-col-head">
                <span className="media-icon">🎵</span>
                <span className="media-col-head-text sg">Spotify Favourites</span>
              </div>
              {PORTFOLIO_DATA.spotify.map((t, i) => (
                <React.Fragment key={i}>
                  <MediaItem ci={i} title={t.title} meta={`${t.artist} · ${t.duration}`} extra="▶" />
                  {i < PORTFOLIO_DATA.spotify.length - 1 && <div className="neon-hr" />}
                </React.Fragment>
              ))}
            </div>

            {/* COL 2: Letterboxd */}
            <div className="media-col">
              <div className="media-col-head">
                <span className="media-icon">🎬</span>
                <span className="media-col-head-text sg">Recent Letterboxd</span>
              </div>
              {PORTFOLIO_DATA.letterboxd.map((f, i) => (
                <React.Fragment key={i}>
                  <MediaItem
                    ci={i + 4}
                    title={f.title}
                    meta={`${f.year} · ${f.director}`}
                    extra={<span className="mi-stars">{'★'.repeat(f.rating)}</span>}
                  />
                  {i < PORTFOLIO_DATA.letterboxd.length - 1 && <div className="neon-hr" />}
                </React.Fragment>
              ))}
            </div>

            {/* COL 3: StoryGraph */}
            <div className="media-col">
              <div className="media-col-head">
                <span className="media-icon">📚</span>
                <span className="media-col-head-text sg">Currently Reading</span>
              </div>
              {PORTFOLIO_DATA.storygraph.map((b, i) => (
                <React.Fragment key={i}>
                  <MediaItem ci={i + 8} title={b.title} meta={b.author} progress={b.progress} pct={b.progress} />
                  {i < PORTFOLIO_DATA.storygraph.length - 1 && <div className="neon-hr" />}
                </React.Fragment>
              ))}
            </div>

          </div>{/* /footer-media */}

          <div className="footer-bottom">
            <span className="footer-copy">© 2025 Divyanshi Vashistha · Built with ❤️ and ☕</span>
            <div className="footer-links">
              {[
                { label: '⌥ GitHub',   href: PORTFOLIO_DATA.social.github   },
                { label: '◈ LinkedIn', href: PORTFOLIO_DATA.social.linkedin  },
                { label: '✉ Email',    href: `mailto:${PORTFOLIO_DATA.social.email}` },
                { label: '</> Resume', href: '/Divyanshi_Vashistha_Resume.pdf', dl: true },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.dl ? undefined : '_blank'}
                   rel={l.dl ? undefined : 'noopener'}
                   download={l.dl ? 'Divyanshi_Vashistha_Resume.pdf' : undefined}
                   className="footer-link sg">{l.label}</a>
              ))}
            </div>
          </div>

        </footer>

      </div>{/* /page */}
    </div>
  );
};
