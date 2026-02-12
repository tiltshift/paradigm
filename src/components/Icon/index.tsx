/**
 * see `svgTemplate.cjs` for the icon component definition.
 * Icons are genrated from figma using `yarn sync` (`scripts/syncFigma.ts`)
 */
import DragHandle from "./crafted/DragHandle"
import { Icon as IconGenerated } from "./generated"

/**
 * Add crafted icons to generated icons before exporting
 */
const Icon = IconGenerated as typeof IconGenerated & {
	DragHandle: typeof DragHandle
}

Icon.DragHandle = DragHandle

export { Icon }

export type IconComponentProps = React.ComponentProps<typeof Icon.Apple>

export type IconComponentType = (props: IconComponentProps) => React.ReactNode
