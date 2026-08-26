# Paradigm working agreement

Rules for how components get built in this library — by people and by agents.
Chris owns this document; changes to it need his approval. If work and this
document disagree, this document wins.

## How work flows

1. **One component (or one bounded fix) per issue and branch.** No drive-by
   changes to other components on the same branch.
2. **Spec first.** Fill out [the spec template](docs/component-spec-template.md)
   and get Chris's approval on it before writing implementation code. The spec
   is small on purpose — approving it should take minutes, and it prevents
   building the wrong thing well.
3. **Implement to the spec.** Stories cover every variant and state. Tests
   cover behavior. Anything the spec calls out of scope stays out.
4. **Review happens in Storybook and Chromatic.** The Chromatic diff is the
   review surface for visuals; the spec is the review surface for the API.
   Chris is the only merger.
5. Agents commit as `tiltshift-bot` and never push — the `no-push://` pushurl
   enforces this. When a branch is ready, name it in the summary and stop;
   Chris fetches, reviews, and pushes from his own machine.

## Component anatomy

- One folder per component: `src/components/<Name>/` containing `index.tsx`
  (implementation), `stories.tsx`, `test.tsx`, and additional part files when
  one file gets too big to hold in your head (`Button/Pressable.tsx` is the
  pattern).
- The props type is exported and named `<Name>Props`.
- **Export from `src/index.ts` in the same change that adds the component.**
  A component that isn't exported doesn't exist. Internal helpers and hooks
  stay unexported until a consumer needs them.
- Generated code (`src/generated`, the icon set) is never edited by hand —
  change the source of truth and run `yarn sync`.

## Styling rules

- **Tokens only.** No raw color, size, spacing, radius, or font literals in
  component code — every value comes from the theme/token system in
  `src/config/paradigm.config.ts`. If the value you need has no token, add the
  token first, in its own commit, with light and dark values.
- **Every component works in light and dark.** Both themes are part of the
  component, not a follow-up. Stories must render both (Chromatic captures
  both).
- Responsive behavior uses the named breakpoints from the config, never
  ad-hoc media queries.
- Escape hatches (`as any`, style-prop casts, `biome-ignore`) are a smell
  that the library is missing something. Fix the library or raise it in the
  issue; don't cast past it.

## One-off components live here, not in apps

An app screen that needs a component paradigm doesn't have gets it by filing
a paradigm issue and building it here first — through this workflow. Apps
compose paradigm components; they do not define their own primitives. This is
the rule that keeps consuming apps from growing a shadow component library.

## Definition of done

A component (or change to one) merges only when all of these hold:

- [ ] Spec approved by Chris before implementation started
- [ ] Implementation matches the spec; out-of-scope items untouched
- [ ] Stories cover every variant and state, in light and dark
- [ ] Tests cover the component's behavior (`yarn storybook:test`)
- [ ] Accessibility: correct roles/labels, keyboard focus works, contrast
      passes in both themes (Storybook a11y addon is wired)
- [ ] `yarn typecheck` and `yarn lint` green
- [ ] Chromatic diff reviewed
- [ ] Exported from `src/index.ts`
- [ ] Chris approved

## Design workflow

- **Figma is the source of truth** for tokens and component visuals. Icons
  already sync from Figma via `yarn sync`; token sync extends the same
  pattern. Tokens flow Figma → `paradigm.config.ts`, never the reverse.
- Screen designs are handed off as Figma frames. A screen is built only from
  paradigm components; a gap in the library goes through the one-off rule
  above before the screen proceeds.
- Before merge, the implemented component is compared against its Figma
  source in Storybook. Deliberate divergence from the design is fine — but it
  is a conversation with Chris, not a silent decision.

## Commands

```bash
yarn start            # Storybook on :6006 — the dev environment
yarn storybook:test   # component tests
yarn typecheck
yarn lint
yarn sync             # regenerate icons (and later, tokens) from Figma
```
