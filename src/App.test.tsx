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

  it("renders the materials page as summaries rather than full documents", () => {
    window.history.pushState({}, "", "/materials");

    render(<App />);

    expect(screen.getByRole("heading", { name: /资料中心/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /PRD 摘要/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /商业计划摘要/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/完整内容后续可替换为正式版本/i).length).toBeGreaterThan(0);
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
