import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Menu,
  Play,
} from "lucide-react";
import "./App.css";
import {
  siteContent,
  type BackgroundBarrier,
  type Material,
  type TutorialStep,
} from "./content/site";

const routeForPath = (pathname: string) => {
  if (pathname.startsWith("/deck")) return "deck";
  if (pathname.startsWith("/materials")) return "materials";
  return "home";
};

function BrandLink() {
  return (
    <a className="brand" href="/" aria-label="Pears 首页">
      <span className="brand-mark" aria-hidden="true">
        🍐
      </span>
      <span className="brand-word">Pears</span>
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <BrandLink />
      <nav className="desktop-nav" aria-label="主导航">
        {siteContent.nav.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={siteContent.agentUrl}>
        打开 Agent
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
      <button className="menu-button" type="button" aria-label="打开导航">
        <Menu aria-hidden="true" size={20} />
      </button>
    </header>
  );
}

function BarrierCard({ barrier, index }: { barrier: BackgroundBarrier; index: number }) {
  const Icon = barrier.icon;

  return (
    <article className="barrier-card">
      <div className="barrier-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <Icon aria-hidden="true" size={20} />
      </div>
      <h3>{barrier.title}</h3>
      <strong>{barrier.short}</strong>
      <p>{barrier.body}</p>
    </article>
  );
}

function BackgroundSection() {
  return (
    <section className="section background-section" data-section="background">
      <div className="background-copy">
        <span className="section-label">{siteContent.background.eyebrow}</span>
        <h2 className="background-title" aria-label={siteContent.background.title}>
          <span className="background-title-tag">Vibecoding</span>
          <span>让开发门槛极大降低，</span>
          <span>但生产力还没真正到达</span>
          <strong>普通人手里。</strong>
        </h2>
        <p>{siteContent.background.body}</p>
      </div>
      <div className="background-map" aria-label="Agent 落地三道坎">
        <div className="map-source">
          <span>Vibecoding</span>
          <strong>Agent 生成门槛降低</strong>
        </div>
        <div className="barrier-grid">
          {siteContent.background.barriers.map((barrier, index) => (
            <BarrierCard barrier={barrier} index={index} key={barrier.title} />
          ))}
        </div>
        <div className="map-outcome">
          <span>🍐 Pears</span>
          <strong>{siteContent.background.outcome}</strong>
        </div>
      </div>
    </section>
  );
}

function DemoVideoSection() {
  return (
    <section className="section video-section" data-section="demo-video" id="demo">
      <div className="section-copy narrow">
        <span className="section-label">演示视频</span>
        <h2>产品介绍视频：Pears 怎样把示范变成 Agent。</h2>
        <p>当前使用正式产品介绍视频的网页压缩版本，适合手机端快速预览。</p>
      </div>
      <div className="video-shell">
        <video controls preload="metadata" src={siteContent.videoPath}>
          你的浏览器暂不支持视频播放。
        </video>
        <div className="video-caption">
          <Play aria-hidden="true" size={18} />
          <span>正式产品介绍视频已替换，可在资料页打开完整补充文件。</span>
        </div>
      </div>
    </section>
  );
}

function TutorialScene({ visual }: { visual: TutorialStep["visual"] }) {
  return (
    <div className={`tutorial-scene tutorial-scene-${visual}`} aria-hidden="true">
      {visual === "task" && (
        <>
          <div className="scene-prompt">
            <span>我要省下来的工作</span>
            <strong>每 2 天追踪视频数据</strong>
          </div>
          <div className="scene-chip-row">
            <span>YouTube</span>
            <span>TikTok</span>
            <span>日报</span>
          </div>
        </>
      )}
      {visual === "record" && (
        <>
          <div className="scene-browser">
            <div className="scene-browser-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="scene-browser-body">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="scene-cursor" />
          <div className="scene-recording">正在记录</div>
        </>
      )}
      {visual === "spec" && (
        <div className="scene-spec">
          <span>目标</span>
          <span>触发</span>
          <span>输入</span>
          <span>步骤</span>
          <span>产出</span>
          <span>边界</span>
        </div>
      )}
      {visual === "agent" && (
        <>
          <div className="scene-agent-card">
            <span>🍐</span>
            <strong>P 视频管家</strong>
            <small>定时运行 · 可优化</small>
          </div>
          <div className="scene-progress">
            <span />
          </div>
        </>
      )}
    </div>
  );
}

function VisualStepCard({ step, index }: { step: TutorialStep; index: number }) {
  const Icon = step.icon;

  return (
    <article className="tutorial-card">
      <div className="tutorial-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <Icon aria-hidden="true" size={20} />
      </div>
      <TutorialScene visual={step.visual} />
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </article>
  );
}

function MechanismSection() {
  return (
    <section className="section mechanism-section" data-section="mechanism">
      <div className="section-copy mechanism-heading">
        <span className="section-label">{siteContent.tutorial.eyebrow}</span>
        <div>
          <h2>{siteContent.tutorial.title}</h2>
          <p>{siteContent.tutorial.body}</p>
        </div>
      </div>
      <div className="mechanism-summary" aria-label="Pears 核心价值">
        {siteContent.thesis.map((item) => {
          const Icon = item.icon;
          return (
            <article className="mechanism-insight" key={item.title}>
              <Icon aria-hidden="true" size={18} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="tutorial-flow" aria-label="Pears 新手教程步骤">
        {siteContent.tutorial.steps.map((step, index) => (
          <VisualStepCard index={index} key={step.title} step={step} />
        ))}
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section proof-section" data-section="proof">
      <div className="section-copy proof-heading">
        <span className="section-label">落地证明</span>
        <div>
          <h2>已经跑起来的场景。</h2>
          <p>
            首页不堆资料，把最能证明产品方向的内容放在一起：真实应用、当前进展和可继续查看的正式材料。
          </p>
        </div>
      </div>
      <div className="proof-layout">
        {siteContent.cases.map((item) => (
          <article className="proof-card case-proof" key={item.name}>
            <span>{item.type}</span>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
          </article>
        ))}
        <article className="proof-card progress-proof">
          <span>产品进展</span>
          <h3>不是概念页，已经进入可用闭环。</h3>
          <div className="progress-pills" aria-label="产品进展">
            {siteContent.progress.map((item) => (
              <span key={item}>
                <CheckCircle2 aria-hidden="true" size={15} />
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="proof-card resource-proof">
          <span>补充资料</span>
          <h3>视频、介绍资料、PDF 放在资料中心。</h3>
          <p>需要完整信息时再进入资料页，避免首页变成文件堆。</p>
          <div className="resource-links">
            <a href="/#demo">看视频</a>
            <a href="/deck">看完整信息</a>
            <a href="/materials">看资料中心</a>
          </div>
        </article>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>
            <span>看你做一遍，</span>
            <span>
              剩下的交给 <em>Pears</em>
            </span>
          </h1>
          <p className="hero-statement">{siteContent.hero.statement}</p>
          <p>{siteContent.hero.body}</p>
        </div>
        <div className="hero-product" aria-label="Pears 产品流程预览">
          <div className="product-bar">
            <span />
            <span />
            <span />
            <strong>Pears Workbench</strong>
          </div>
          <div className="product-body">
            <div className="product-intent">
              <span>描述一件重复工作</span>
              <strong>每 2 天追踪跨平台视频数据，并生成日报</strong>
            </div>
            <div className="task-input">
              <span>我每天需要追踪跨平台视频数据</span>
              <button type="button">开始任务</button>
            </div>
            <div className="flow-card">
              <div className="flow-label">工作流方案</div>
              <ol>
                <li>抓取本人频道数据</li>
                <li>对比 KOL 视频表现</li>
                <li>归档成表并生成日报</li>
              </ol>
            </div>
            <div className="agent-strip">
              <div>
                <strong>P 视频管家</strong>
                <span>定时运行 · 持续优化</span>
              </div>
              <CheckCircle2 aria-hidden="true" size={20} />
            </div>
          </div>
        </div>
      </section>

      <BackgroundSection />

      <DemoVideoSection />

      <MechanismSection />

      <ProofSection />

      <section className="final-cta">
        <h2>让工具长成你的工作方式。</h2>
        <p>打开 Pears Agent，或把完整信息发给需要了解项目的人。</p>
        <div className="hero-actions">
          <a className="button button-primary" href={siteContent.agentUrl}>
            打开 Pears Agent
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href="/materials">
            查看资料
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function DeckPage() {
  return (
    <section className="page-shell deck-page">
      <div className="page-heading">
        <span className="section-label">完整信息</span>
        <h1>Pears 完整信息</h1>
        <p>这里保留原始 standalone HTML，不转换。手机扫码也能直接打开完整版本。</p>
        <div className="hero-actions">
          <a className="button button-primary" href={siteContent.deckPath} target="_blank">
            新窗口打开
            <ExternalLink aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href="/">
            返回首页
          </a>
        </div>
      </div>
      <iframe
        className="deck-frame"
        title="Pears 完整信息"
        src={siteContent.deckPath}
      />
    </section>
  );
}

function MaterialCard({ item }: { item: Material }) {
  const Icon = item.icon;
  return (
    <article className="material-card">
      <div className="material-top">
        <Icon aria-hidden="true" size={24} />
        <span>{item.label}</span>
      </div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      {item.href ? (
        <a href={item.href}>
          {item.action}
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      ) : (
        <span className="pending-note">完整内容后续可替换为正式版本</span>
      )}
    </article>
  );
}

function MaterialsPage() {
  return (
    <section className="page-shell">
      <div className="page-heading">
        <span className="section-label">资料中心</span>
        <h1>资料中心</h1>
        <p>
          首页只放最主要的项目信息，这里集中放视频、介绍资料、产品说明文档和商业计划书原件。
        </p>
      </div>
      <div className="materials-grid">
        {siteContent.materials.map((item) => (
          <MaterialCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandLink />
      <nav aria-label="页脚导航">
        {siteContent.footerLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

function App() {
  const route = routeForPath(window.location.pathname);

  return (
    <div className="app-shell">
      <SiteHeader />
      <main>
        {route === "home" ? <HomePage /> : null}
        {route === "deck" ? <DeckPage /> : null}
        {route === "materials" ? <MaterialsPage /> : null}
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
