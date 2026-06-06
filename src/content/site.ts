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

export type ProcessStep = {
  title: string;
  body: string;
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
  agentUrl: "https://pear-work-web.vercel.app",
  deckPath: "/deck/pears-roadshow.html",
  videoPath: "/media/pears-demo.mp4",
  nav: [
    { label: "首页", href: "/" },
    { label: "完整路演", href: "/deck" },
    { label: "资料", href: "/materials" },
  ] satisfies NavItem[],
  hero: {
    title: "看你做一遍，生成专属 Agent",
    body:
      "Pears 把真实工作流从示范中学出来，蒸馏成可编辑规格，再交给编码智能体生成常驻可用的专属 App。",
    primaryCta: "打开 Pears Agent",
    secondaryCta: "完整路演",
  },
  proof: [
    { value: "v0.4.2", label: "当前产品版本" },
    { value: "2 个", label: "已落地专属 App" },
    { value: "5 步", label: "示范到成长闭环" },
  ],
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
      title: "演示视频",
      label: "可播放占位版",
      body: "当前使用 6 月 4 日视频作为占位素材，后续只需替换同一路径的视频文件。",
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
      title: "PRD 摘要",
      label: "轻量摘要",
      body:
        "Pears 的 PRD 聚焦“示范、蒸馏、交付、成长”闭环。完整内容后续可替换为正式版本。",
    },
    {
      icon: ChartNoAxesCombined,
      title: "商业计划摘要",
      label: "轻量摘要",
      body:
        "商业叙事聚焦重复工作自动化、个人专属 Agent、运行反馈飞轮和首发场景验证。",
    },
  ] satisfies Material[],
  footerLinks: [
    { label: "Pears Agent", href: "https://pear-work-web.vercel.app" },
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
