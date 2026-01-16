import React from "react"

import { ScrollView } from "../../ScrollView"
import { Column, type ViewProps } from "../../View"

import type { ScrollViewProps } from "react-native"

/**
 * These are the props we expose to users
 */
export type ExternalListGroupProps = {
	/**
	 * TODO Reimplement this
	 * By default list contents are limited by the narrow/wide media breakpoint.
	 * Set this to `true` to override this behavior.
	 */
	// isFullWidth?: boolean
	/**
	 * the background color for the group
	 */
	color?: ViewProps["color"]
	/**
	 * the space between lists inside this group.
	 */
	between?: ViewProps["between"]
}

export type ListGroupProps = ExternalListGroupProps & {
	/**
	 * Bypass adding a `ScrollView` around this group.
	 * This is used by virtual lists as they manage their own scrolling.
	 */
	noScrollView?: boolean
	/**
	 * The actual list goes here!
	 */
	children: React.ReactNode
	/**
	 * The onLayout of the wrapping scrollview. Only available on the top level group.
	 */
	onLayout?: ScrollViewProps["onLayout"]
}

export const ListGroupContext = React.createContext({
	groupId: undefined as string | undefined,
	isInGroup: false,
})

export const ListGroup = React.memo<ListGroupProps>(function ListGroup({
	// isFullWidth = false,
	noScrollView = false,
	children,
	color,
	onLayout,
	between,
}) {
	const groupId = React.useId()
	const isInScrollView = React.useContext(ScrollView.IsInContext)
	const { isInGroup } = React.useContext(ListGroupContext)

	const listGroupContent = (
		<ListGroupContext value={{ groupId, isInGroup: true }}>
			<Column
				grow
				py={"$listVerticalSpace"}
				between={between || "$betweenLists"}
			>
				{children}
			</Column>
		</ListGroupContext>
	)

	if (!isInGroup && !isInScrollView && !noScrollView) {
		return (
			<ScrollView
				alwaysBounceVertical
				keyboardDismissMode="interactive"
				keyboardShouldPersistTaps="handled"
				onLayout={onLayout}
				// {...(isFullWidth && { flexGrow: 1 })}
				color={color}
				contentContainerStyle={{ flexGrow: 1 }}
			>
				{listGroupContent}
			</ScrollView>
		)
	}

	return listGroupContent
})
