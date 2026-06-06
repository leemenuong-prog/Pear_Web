import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Menu,
  Play,
} from "lucide-react";
import "./App.css";
import { siteContent, type Material } from "./content/site";

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

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>{siteContent.hero.title}</h1>
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
        </div>
        <div className="hero-product" aria-label="Pears 产品流程预览">
          <div className="product-bar">
            <span />
            <span />
            <span />
            <strong>Pears Workbench</strong>
          </div>
          <div className="product-body">
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

      <section className="proof-row" aria-label="产品进展">
        {siteContent.proof.map((item) => (
          <div className="proof-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section intro-section" id="value">
        <div className="section-copy">
          <span className="section-label">核心价值</span>
          <h2>不是让用户写清需求，而是从真实工作里学出来。</h2>
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

      <section className="section video-section" id="demo">
        <div className="section-copy narrow">
          <span className="section-label">演示视频</span>
          <h2>先看产品怎样把一次示范变成可运行的 Agent。</h2>
          <p>当前视频为占位版本，后续替换 `/media/pears-demo.mp4` 即可更新官网展示。</p>
        </div>
        <div className="video-shell">
          <video
            controls
            preload="metadata"
            src={siteContent.videoPath}
          >
            你的浏览器暂不支持视频播放。
          </video>
          <div className="video-caption">
            <Play aria-hidden="true" size={18} />
            <span>2 分钟内理解 Pears 的示范、蒸馏和生成闭环。</span>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-copy">
          <span className="section-label">产品流程</span>
          <h2>示范、蒸馏、拍板、生成、成长。</h2>
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
