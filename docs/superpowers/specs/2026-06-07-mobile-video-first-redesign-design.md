# Pear_Web Mobile Video-First Redesign

## Goal

Upgrade the Pear_Web homepage for mobile-first preview. A QR-scan visitor should understand Pears by seeing the demo video and a visual tutorial flow before reading long explanatory copy.

## Approved Direction

Use option A: video first, tutorial next.

The page should keep the strong Pears brand line, but move the demo video into the first meaningful mobile screen. The next section should be a visual tutorial strip that explains the product through motion-style cards:

1. Describe a repeated task.
2. Record or demonstrate the real workflow.
3. Confirm the distilled spec.
4. Generate a dedicated Agent.

Current repo assets only include `public/media/pears-demo.mp4`, `public/favicon.svg`, and the standalone deck HTML. Until formal onboarding tutorial assets are provided, the tutorial strip will be implemented as code-rendered visual cards and lightweight CSS animation. These cards must be easy to replace later with screenshots, GIFs, or short clips.

## Page Structure

The homepage order becomes:

1. Compact hero: headline, one-line value statement, primary CTA, and a small product cue.
2. Demo video: visible immediately on mobile, close to the first viewport on desktop.
3. Tutorial flow: graphic and animated cards instead of paragraph-heavy explanation.
4. Value cards: condensed to support the tutorial instead of leading the page.
5. Process / cases / progress / final CTA: kept, but tightened so they do not feel like a text document.

The rejected three-column proof stats row remains out of scope and must not return.

## Visual System

Keep the current light natural Pears direction:

- `🍐` remains the brand mark.
- The dotted background remains.
- Use restrained greens, white surfaces, and one teal accent for action or progress.
- Avoid large blocks of body copy on mobile.
- Use visual sequencing, numbered steps, progress lines, and small animated interface fragments to communicate workflow.

Motion should feel useful, not decorative. Prefer subtle staged reveals, pulse states, progress bars, and card transitions that explain “Pears is learning / distilling / generating”.

## Component Plan

Add or adjust these surfaces:

- `HeroMedia`: a video-forward hero block that places the video directly after the headline on mobile.
- `TutorialFlow`: reusable visual cards driven by content config, with asset slots for future onboarding resources.
- `VisualStepCard`: shows a mini product scene, short title, short copy, and optional asset path.
- Existing `FeatureCard`, `ProcessStep`, `CaseCard`, and progress panel are tightened with shorter copy and more visual hierarchy.

Content stays centralized in `src/content/site.ts`. Future tutorial screenshots or videos should be added there, not hard-coded inside components.

## Responsive Behavior

Mobile is the primary target:

- The video should appear before the long value section.
- Buttons remain easy to tap.
- Text should wrap cleanly without horizontal overflow.
- Tutorial cards can stack vertically on mobile and become a horizontal timeline on desktop.

Desktop should still feel like a polished product site, with hero copy and video/product visuals balanced rather than stretched.

## Testing

Run:

- `npm test`
- `npm run lint`
- `npm run build`

Rendered QA:

- Open the local site in desktop and mobile widths.
- Confirm the video appears before the main text-heavy sections on mobile.
- Confirm the tutorial flow renders without missing assets.
- Confirm no horizontal overflow on a 390px mobile viewport.
- Confirm `/deck` and `/materials` still work.

## Out Of Scope

- No Neon integration.
- No new backend or form collection.
- No final tutorial media production in this pass.
- No changes to the original standalone deck HTML.
