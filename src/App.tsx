import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Menu,
  Play,
} from "lucide-react";
import "./App.css";
import { siteContent, type Material, type TutorialStep } from "./content/site";

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

function DemoVideoSection() {
  return (
    <section className="section video-section" data-section="demo-video" id="demo">
      <div className="section-copy narrow">
        <span className="section-label">演示视频</span>
        <h2>先看 2 分钟，Pears 怎样把示范变成 Agent。</h2>
        <p>当前视频为占位版本。后续替换 `/media/pears-demo.mp4`，官网会自动使用新演示。</p>
      </div>
      <div className="video-shell">
        <video controls preload="metadata" src={siteContent.videoPath}>
          你的浏览器暂不支持视频播放。
        </video>
        <div className="video-caption">
          <Play aria-hidden="true" size={18} />
          <span>手机端优先看到演示，再继续看步骤和资料。</span>
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

function TutorialFlow() {
  return (
    <section className="section tutorial-section">
      <div className="section-copy tutorial-heading">
        <span className="section-label">{siteContent.tutorial.eyebrow}</span>
        <div>
          <h2>{siteContent.tutorial.title}</h2>
          <p>{siteContent.tutorial.body}</p>
        </div>
      </div>
      <div className="tutorial-flow" aria-label="Pears 新手教程步骤">
        {siteContent.tutorial.steps.map((step, index) => (
          <VisualStepCard index={index} key={step.title} step={step} />
        ))}
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
          <div className="hero-actions">
            <a className="button button-primary" href={siteContent.agentUrl}>
              {siteContent.hero.primaryCta}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-secondary" href="/deck">
              {siteContent.hero.secondaryCta}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="hero-mobile-cue" aria-label="Pears 生成流程">
            <span>示范</span>
            <ArrowRight aria-hidden="true" size={14} />
            <span>规格</span>
            <ArrowRight aria-hidden="true" size={14} />
            <span>Agent</span>
          </div>
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

      <DemoVideoSection />

      <TutorialFlow />

      <section className="section intro-section" data-section="value" id="value">
        <div className="section-copy">
          <span className="section-label">核心价值</span>
          <h2>不是让用户写清需求，而是从真实工作里学出来。</h2>
          <p>
            Pears 的产品重点不是生成一份漂亮文档，而是让工作流被看见、被确认、被交付，并在运行后继续变好。
          </p>
        </div>
        <div className="feature-grid">
          {siteContent.thesis.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <Icon aria-hidden="true" size={24} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-copy">
          <span className="section-label">产品流程</span>
          <h2>从示范到成长，5 步闭环。</h2>
          <p>
            从一次真实示范开始，到一个可运行的专属 App 结束；再通过运行反馈回到优化工具台。
          </p>
        </div>
        <div className="process-list">
          {siteContent.process.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <div className="section-copy">
          <span className="section-label">已落地案例</span>
          <h2>首发场景已经长出可用的专属 App。</h2>
          <p>
            现在不是单纯概念页，而是围绕跨境视频工作流跑出的真实应用方向。
          </p>
        </div>
        <div className="case-grid">
          {siteContent.cases.map((item) => (
            <article className="case-card" key={item.name}>
              <span>{item.type}</span>
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section progress-section">
        <div className="progress-panel">
          <div>
            <span className="section-label">产品进展</span>
            <h2>不是概念，已经跑起来了。</h2>
          </div>
          <ul>
            {siteContent.progress.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="final-cta">
        <h2>让工具长成你的工作方式。</h2>
        <p>打开 Pears Agent，或把完整路演发给需要了解项目的人。</p>
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
        <span className="section-label">完整路演</span>
        <h1>Pears 完整路演</h1>
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
        title="Pears 完整路演"
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
          首页只放最主要的路演信息，这里集中放视频、PPT、PRD 摘要和商业计划摘要。
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
