import type { SVGProps } from "react"
import type { ColorValue } from "../../utils/color"

/**
 * Types before we add tamagui to the icon
 */
export type RawWebIconComponentProps = {
	size: number
	color?: string
	style?: Omit<
		SVGProps<SVGSVGElement>["style"],
		"backgroundColor" | "width" | "height"
	>
}

export type WebIconComponentProps = {
	size: number
	color?: ColorValue
	style?: Omit<
		SVGProps<SVGSVGElement>["style"],
		"backgroundColor" | "width" | "height"
	>
}
