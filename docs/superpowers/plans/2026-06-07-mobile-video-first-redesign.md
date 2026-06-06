# Mobile Video-First Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the homepage to a mobile-first video-led narrative with a visual tutorial flow and less paragraph-heavy scanning.

**Architecture:** Keep the existing React/Vite static-site architecture. Extend centralized content in `src/content/site.ts`, add homepage rendering helpers in `src/App.tsx`, and update the visual system in `src/App.css`.

**Tech Stack:** React 19, Vite, TypeScript, Vitest, Testing Library, CSS animations.

---

### Task 1: Lock Homepage Ordering And Tutorial Requirements

**Files:**
- Modify: `src/App.test.tsx`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Add failing homepage structure tests**

Add tests that assert the homepage video section appears before the core value section and that four tutorial steps render:

```tsx
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

it("renders the visual tutorial flow with four replaceable onboarding steps", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(screen.getByRole("heading", { name: /新手教程/i })).toBeInTheDocument();
  expect(screen.getByText("描述任务")).toBeInTheDocument();
  expect(screen.getByText("录制示范")).toBeInTheDocument();
  expect(screen.getByText("确认规格")).toBeInTheDocument();
  expect(screen.getByText("生成 Agent")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify RED**

Run: `npm test`

Expected: FAIL because the new `data-section` attributes and tutorial flow do not exist yet.

### Task 2: Implement Video-First Homepage Content

**Files:**
- Modify: `src/content/site.ts`
- Modify: `src/App.tsx`
- Modify: `src/App.css`

- [ ] **Step 1: Add tutorial content config**

Add a `tutorial` object to `siteContent` with eyebrow, title, body, and four steps named `描述任务`, `录制示范`, `确认规格`, and `生成 Agent`. Each step includes a short title, body, visual type, and optional future asset path.

- [ ] **Step 2: Reorder homepage sections**

Move the demo video section directly after the hero. Mark it with `data-section="demo-video"`. Mark the core value section with `data-section="value"`.

- [ ] **Step 3: Add `TutorialFlow` and `VisualStepCard`**

Render the tutorial section after the video section. Each card should contain a code-rendered visual scene so the section is useful before final tutorial assets arrive.

- [ ] **Step 4: Run test to verify GREEN**

Run: `npm test`

Expected: PASS with all existing and new homepage tests green.

### Task 3: Visual Polish And Responsive QA

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Tune mobile-first layout**

Make the hero more compact on mobile, keep the video in the first meaningful scroll, stack tutorial cards cleanly at 390px, and avoid horizontal overflow.

- [ ] **Step 2: Run static verification**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit 0.

- [ ] **Step 3: Run rendered QA**

Start local preview and inspect:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

Verify `/`, `/deck`, and `/materials` load. Verify mobile width has no horizontal overflow and video precedes the value section.

### Task 4: Ship

**Files:**
- Commit all source and plan changes.

- [ ] **Step 1: Commit implementation**

Run:

```bash
git add .
git commit -m "feat: make homepage video-first on mobile"
```

- [ ] **Step 2: Push**

Run:

```bash
git push origin main
```

Expected: GitHub updates and Netlify auto-deploys from the configured repository.
