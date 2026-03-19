import React from "react"

import { Text } from "../Text"

/**
 * Text to show after an element. Used mostly for lists.
 */
type AfterTextProps = {
	/**
	 * The text to show. Note that this is rendred within a `Text` node.
	 */
	children: string | React.ReactNode
}

export const AfterText = React.memo(function AfterText({
	children,
}: AfterTextProps) {
	return (
		<Text
			noUserSelect
			style={Text.style.footnote}
			fit={Text.fitValues.wrap}
			px={"$edgeInset"}
			py={"$captionVerticalMargin"}
			color={"$secondaryColor"}
			_style={{ flexShrink: 0 }}
		>
			{children}
		</Text>
	)
})
