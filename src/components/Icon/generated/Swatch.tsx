import { styled } from "@tamagui/core"
import * as React from "react"

import { TextContext } from "../../Text"

import type { SVGProps } from "react"
import type { RawWebIconComponentProps } from "../types"

const SwatchIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>{"Swatch"}</title>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M32 45C24.8203 45 19 39.1797 19 32C19 24.8203 24.8203 19 32 19C39.1797 19 45 24.8203 45 32C45 39.1797 39.1797 45 32 45Z"
			fill={props.fill}
		/>
	</svg>
)
const Swatch = ({
	size,
	color,
	style = {},
	...otherProps
}: RawWebIconComponentProps) => {
	const { isInText } = React.useContext(TextContext)
	const fill = color || (isInText ? "$iconInTextColor" : "black")
	const combinedStyle = {
		flexShrink: 0,
		...style,
	}
	return React.createElement(SwatchIcon, {
		...otherProps,
		style: combinedStyle,
		width: size,
		height: size,
		fill,
	})
}
const StyledIcon = styled(
	Swatch,
	{},
	{
		accept: {
			color: "color",
			size: "icon",
		} as const,
	},
)
export default StyledIcon
