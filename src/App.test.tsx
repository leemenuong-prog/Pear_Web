import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { siteContent } from "./content/site";

describe("Pear_Web public site", () => {
  it("renders the homepage with the Agent CTA and core route links", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /看你做一遍，剩下的交给 Pears/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /打开 Pears Agent/i })[0]).toHaveAttribute(
      "href",
      siteContent.agentUrl,
    );
    expect(screen.getAllByRole("link", { name: /完整路演/i })[0]).toHaveAttribute(
      "href",
      "/deck",
    );
    expect(screen.getAllByRole("link", { name: /资料/i })[0]).toHaveAttribute(
      "href",
      "/materials",
    );
  });

  it("puts the demo video before text-heavy value content on the homepage", () => {
    window.history.pushState({}, "", "/");
    const { container } = render(<App />);

    const videoSection = container.querySelector('[data-section="demo-video"]');
    const valueSection = container.querySelector('[data-section="value"]');

    expect(videoSection).toBeInTheDocument();
    expect(valueSection).toBeInTheDocument();
    expect(
      videoSection?.compareDocumentPosition(valueSection as Element),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("renders the visual application background before the demo video", () => {
    window.history.pushState({}, "", "/");
    const { container } = render(<App />);

    const backgroundSection = container.querySelector('[data-section="background"]');
    const videoSection = container.querySelector('[data-section="demo-video"]');

    expect(backgroundSection).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Vibe coding 降低了门槛/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /技术黑箱/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /AI 认知局限/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /需求表达门槛/i })).toBeInTheDocument();
    expect(
      backgroundSection?.compareDocumentPosition(videoSection as Element),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("renders the visual tutorial flow with four replaceable onboarding steps", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(screen.getByRole("heading", { name: /新手教程/i })).toBeInTheDocument();
    expect(screen.getByText("描述任务")).toBeInTheDocument();
    expect(screen.getByText("录制示范")).toBeInTheDocument();
    expect(screen.getByText("确认规格")).toBeInTheDocument();
    expect(screen.getByText("生成 Agent")).toBeInTheDocument();
  });

  it("renders the materials page with the formal PDF documents", () => {
    window.history.pushState({}, "", "/materials");

    render(<App />);

    expect(screen.getByRole("heading", { name: /资料中心/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Pears 说明文档 v7/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Pears 商业计划书 v6/i }),
    ).toBeInTheDocument();
    const pdfLinks = screen.getAllByRole("link", { name: /打开 PDF/i });
    expect(pdfLinks[0]).toHaveAttribute(
      "href",
      "/materials/pears-product-doc-v7.pdf",
    );
    expect(pdfLinks[1]).toHaveAttribute(
      "href",
      "/materials/pears-business-plan-v6.pdf",
    );
  });

  it("renders the deck page with an iframe pointing at the standalone deck", () => {
    window.history.pushState({}, "", "/deck");

    render(<App />);

    const frame = screen.getByTitle("Pears 完整路演");
    expect(frame).toHaveAttribute("src", siteContent.deckPath);
    expect(screen.getByRole("link", { name: /新窗口打开/i })).toHaveAttribute(
      "href",
      siteContent.deckPath,
    );
  });
});
