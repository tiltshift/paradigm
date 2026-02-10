import type { SVGProps } from "react"
import type { ColorValue } from "../../utils/color"
export type WebIconComponentProps = {
	size: number
	color?: ColorValue
	style?: Omit<
		SVGProps<SVGSVGElement>["style"],
		"backgroundColor" | "width" | "height"
	>
}

export type WebIconComponentType = React.FC<WebIconComponentProps> // & SvgProps
