# Component spec: <Name>

Copy this file to the issue (or a PR-adjacent doc) and fill it in. Keep it
short — a page is the target. Chris approves the spec before implementation
starts.

## Goal

One or two sentences: what this component is for and where it will be used
first. Link the Figma frame if one exists.

## API

| Prop | Type | Default | Notes |
| ---- | ---- | ------- | ----- |
|      |      |         |       |

## Variants

The named looks this component ships with (e.g. `primary` / `secondary` /
`destructive`). Each variant is a story.

## States

The states every variant must handle: default, hover, focus, pressed/active,
disabled, loading, error, empty — delete the ones that don't apply, and say
so if one deliberately doesn't. Each kept state is a story.

## Tokens consumed

Which theme tokens this component reads. New tokens it needs (with light and
dark values) are listed here and added before implementation.

## Interaction & accessibility

Keyboard behavior, focus order, role/label expectations, announced states.

## Out of scope

What this component deliberately does not do, so it doesn't grow it by
accident during implementation.
