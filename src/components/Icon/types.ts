import type { SVGProps } from "react"
import type { IconSizes } from "../../config/tamagui.config"

/**
 * Types before we add tamagui to the icon
 */
export type RawWebIconComponentProps = {
	size: IconSizes
	color?: string
	style?: Omit<
		SVGProps<SVGSVGElement>["style"],
		"backgroundColor" | "width" | "height"
	>
}
