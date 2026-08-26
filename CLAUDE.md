# Paradigm — agent instructions

Read [CONTRIBUTING.md](CONTRIBUTING.md) before doing anything. It is the
working agreement for this repo and it applies to you: spec approved before
implementation, one component per branch, tokens only, both themes, stories +
tests, definition of done in full.

Repo facts:

- **Local-only repo.** Commit as `tiltshift-bot`; never push, never open a
  PR (`no-push://` pushurl enforces it). When your branch is ready, say so in
  your summary and stop.
- Dev environment is Storybook: `yarn start` (port 6006). Verify visual work
  there, in light and dark, before calling it done.
- `yarn typecheck` and `yarn lint` (Biome) must be green before you commit.
- Never hand-edit `src/generated` or the icon components — they come from
  Figma via `yarn sync`.
- The styling engine is under evaluation (Tamagui v2 vs an RN-compatible
  alternative). Until that decision lands, don't add new Tamagui-specific
  surface (`styled()`, new Tamagui-only APIs) beyond what existing components
  already use — go through tokens and the existing component patterns.
