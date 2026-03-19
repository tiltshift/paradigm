import React from "react"

import { Text } from "../Text"
import { Column } from "../View"

import type { ViewProps } from "tamagui"

export const EmptyContent = React.memo<{
	color?: ViewProps["color"]
	children?: React.ReactNode
}>(function ListEmptyContent({ color, children }) {
	return !children || typeof children === "string" ? (
		<Column grow center color={color}>
			<Text
				style={Text.style.header3}
				color={"$secondaryColor"}
				fit={Text.fitValues.wrap}
				_style={{ textAlign: "center" }}
				noUserSelect
			>
				{children || "This list is empty."}
			</Text>
		</Column>
	) : (
		children
	)
})
