import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ChartNoAxesCombined,
  CheckCircle2,
  FileText,
  Film,
  Layers3,
  Play,
  Route,
  Sparkles,
  Sprout,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type BackgroundBarrier = {
  icon: LucideIcon;
  title: string;
  short: string;
  body: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type TutorialStep = {
  icon: LucideIcon;
  title: string;
  body: string;
  visual: "task" | "record" | "spec" | "agent";
  assetPath?: string;
};

export type Material = {
  icon: LucideIcon;
  title: string;
  label: string;
  body: string;
  href?: string;
  action?: string;
};

export const siteContent = {
  agentUrl: "https://pear-work-web.netlify.app/",
  deckPath: "/deck/pears-roadshow.html",
  videoPath: "/media/pears-roadshow-final.mp4",
  nav: [
    { label: "首页", href: "/" },
    { label: "完整路演", href: "/deck" },
    { label: "资料", href: "/materials" },
  ] satisfies NavItem[],
  hero: {
    title: "看你做一遍，剩下的交给 Pears",
    statement: "一个会学习你工作方式的智能体工作台",
    body:
      "Pears 帮你把隐性的工作经验蒸馏成可执行规格，再生成常驻可用的专属 Agent。",
    primaryCta: "打开 Pears Agent",
    secondaryCta: "完整路演",
  },
  background: {
    eyebrow: "应用背景",
    title: "Agent 会写了，落地还卡在三道坎。",
    body:
      "Vibe coding 让生成程序变容易，但很多 OPC 和团队仍然没把这份生产力变成自己的工具。真正卡住的是理解、发现和表达。",
    outcome: "Pears 用一次真实示范，把经验蒸馏成可执行规格。",
    barriers: [
      {
        icon: Boxes,
        title: "技术黑箱",
        short: "看不懂实现",
        body: "生成出来了，但不懂代码逻辑，像在面对黑箱。",
      },
      {
        icon: Sparkles,
        title: "AI 认知局限",
        short: "想不到场景",
        body: "只停留在图文生成，没意识到还能扒数据、写脚本、处理文件。",
      },
      {
        icon: FileText,
        title: "需求表达门槛",
        short: "说不清规格",
        body: "有隐性经验，却缺少产品抽象，难以描述边界和执行规则。",
      },
    ] satisfies BackgroundBarrier[],
  },
  tutorial: {
    eyebrow: "产品机制",
    title: "示范到 Agent：4 步把经验变成工具。",
    body:
      "用户不用先写完整 PRD，只要从一件重复工作开始，让 Pears 看见做法、整理边界，再交付成可运行的专属 Agent。",
    steps: [
      {
        icon: FileText,
        title: "描述任务",
        body: "说清楚你想省下来的重复工作，给 Pears 一个明确目标。",
        visual: "task",
      },
      {
        icon: Play,
        title: "录制示范",
        body: "像平时一样操作一次，Pears 在可见范围内记录关键步骤。",
        visual: "record",
      },
      {
        icon: CheckCircle2,
        title: "确认规格",
        body: "把真实操作蒸馏成目标、触发、输入、步骤和产出。",
        visual: "spec",
      },
      {
        icon: Boxes,
        title: "生成 Agent",
        body: "规格交给编码智能体，生成常驻可用的专属 Pear App。",
        visual: "agent",
      },
    ] satisfies TutorialStep[],
  },
  thesis: [
    {
      icon: Route,
      title: "从真实操作开始",
      body:
        "用户不先写需求，只在开启任务后照常做事。Pears 在可见范围内记录步骤，停止即停。",
    },
    {
      icon: Sparkles,
      title: "把做法翻译成规格",
      body:
        "系统把操作轨迹整理为目标、触发、输入、步骤、产出和边界，让用户能拍板和修改。",
    },
    {
      icon: Sprout,
      title: "生成后继续成长",
      body:
        "交付不是一次性代码。运行数据和人工干预会回流，帮助 Agent 持续优化。",
    },
  ] satisfies Feature[],
  process: [
    {
      title: "示范",
      body: "说清成果，然后像平时一样完成一次重复工作。",
    },
    {
      title: "蒸馏",
      body: "Pears 把站点、动作、输入和判断点整理为结构化工作流。",
    },
    {
      title: "拍板",
      body: "用户确认哪些步骤全自动、半自动或保留人工判断。",
    },
    {
      title: "生成",
      body: "规格交给编码智能体，搭出专属 Pear App。",
    },
    {
      title: "成长",
      body: "运行反馈进入优化工具台，越用越贴近真实工作方式。",
    },
  ] satisfies ProcessStep[],
  cases: [
    {
      name: "P 视频管家",
      type: "定时化 + 脚本化",
      body:
        "每 2 天抓取本人和对标 KOL 的 YouTube、TikTok 指标，归档成表并生成日报。",
    },
    {
      name: "P 脚本复刻",
      type: "模板化 + 合并",
      body:
        "把视频拆解、脚本结构和素材分析沉淀为可复用流程，降低内容团队重复整理成本。",
    },
  ],
  progress: [
    "应用市场已上线",
    "运行洞察已上线",
    "P 视频管家已落地",
    "P 脚本复刻已落地",
    "运行数据反馈与持续优化已接入产品叙事",
  ],
  materials: [
    {
      icon: Film,
      title: "最终路演视频",
      label: "已替换正式版",
      body: "使用 PeersWork 路演视频压缩后的网页版本，适合手机扫码预览。",
      href: "/#demo",
      action: "回到视频",
    },
    {
      icon: BookOpen,
      title: "完整路演 PPT",
      label: "HTML 原件",
      body: "保留 standalone HTML 原样展示，不做转换，便于现场和扫码完整查看。",
      href: "/deck",
      action: "查看 PPT",
    },
    {
      icon: FileText,
      title: "Pears 说明文档 v7",
      label: "PDF 原件",
      body:
        "包含产品说明、使用流程和核心机制，作为官网资料页的正式补充文档。",
      href: "/materials/pears-product-doc-v7.pdf",
      action: "打开 PDF",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Pears 商业计划书 v6",
      label: "PDF 原件",
      body:
        "包含商业叙事、市场判断和落地路径，现场路演后可直接分享。",
      href: "/materials/pears-business-plan-v6.pdf",
      action: "打开 PDF",
    },
  ] satisfies Material[],
  footerLinks: [
    { label: "Pears Agent", href: "https://pear-work-web.netlify.app/" },
    { label: "完整路演", href: "/deck" },
    { label: "资料中心", href: "/materials" },
  ],
  decorativeIcons: {
    play: Play,
    layers: Layers3,
    boxes: Boxes,
    check: CheckCircle2,
    arrow: ArrowUpRight,
  },
};
