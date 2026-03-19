import React from "react"
import { useTheme } from "tamagui"

import { usePointerEvents } from "../../hooks/usePointerEvents"
import { useShadow as getShadow } from "../../hooks/useShadow"
import { MotionView, ViewContext, type ViewProps } from "../View"

import type { ColorValue } from "../../utils/color"
import type { OnPressWithRef } from "../../utils/types"

export type PressableState = {
	isHovered: boolean
	isActive: boolean
}

export type ParadigmPressableProps = ViewProps & {
	/**
	 * what happens when the element is pressed?
	 *
	 * This is `OnPressWithRef` so its possible to find the element when needed (popups, etc.)
	 */
	onPress?: OnPressWithRef
	/**
	 * Called whenever hover or active state changes.
	 */
	onStateChange?: (state: PressableState) => void
	/**
	 * is this element important? Should only be 1 per page.
	 */
	isPrimary?: boolean
	/**
	 * Does this element have a negative effect (delete, etc.)
	 */
	isNegative?: boolean
	/**
	 * Is this element floating?
	 */
	isRaised?: boolean
	/**
	 * is this element disabled?
	 * This will make `onPress` not work even if defined
	 */
	isDisabled?: boolean
	/**
	 * Is this element currently in a loading state.
	 * This will disable `onPress` even if defined
	 */
	isLoading?: boolean
}

const { all: e1 } = getShadow({
	shadowName: "elevation1",
	forceBoxShadow: true,
})
const { all: e2 } = getShadow({
	shadowName: "elevation2",
	forceBoxShadow: true,
})

export const Pressable = ({
	children,
	onPress,
	onStateChange,
	isPrimary,
	isNegative,
	isRaised,
	isDisabled: isMarkedDisabled = false,
	isLoading,
	...otherProps
}: ParadigmPressableProps) => {
	const theme = useTheme()
	const { color: parentColor } = React.useContext(ViewContext)
	const { isHovered, isActive, pointerProps } = usePointerEvents()

	React.useEffect(() => {
		onStateChange?.({ isHovered, isActive })
	}, [isHovered, isActive, onStateChange])
	const pressableRef = React.useRef(null)

	let backgroundColor: ColorValue

	// the button is disabled both when loading and when actively marked disabled
	const isDisabled = isMarkedDisabled || isLoading

	const buttonState = isDisabled
		? isLoading
			? "loading"
			: "disabled"
		: isHovered
			? isActive
				? "hoverActive"
				: "hover"
			: isActive
				? "active"
				: "normal"

	// Background Color
	const raisedColor = parentColor
		? parentColor.toString() !== "$background"
			? theme.background
			: theme.cardStock
		: theme.cardStock

	switch (buttonState) {
		case "loading":
		case "disabled": {
			backgroundColor = theme.cardStock
			break
		}
		case "hover": {
			backgroundColor = isPrimary
				? isNegative
					? theme.negativeHover
					: theme.primaryHover
				: isRaised
					? raisedColor
					: theme.normalHover
			break
		}
		case "active":
		case "hoverActive": {
			backgroundColor = isPrimary
				? isNegative
					? theme.negativeActive
					: theme.primaryActive
				: isRaised
					? raisedColor
					: theme.normalActive
			break
		}
		default: {
			// normal
			if (isPrimary) {
				if (isNegative) {
					backgroundColor = theme.destructive
				} else {
					backgroundColor = theme.primary
				}
			} else {
				if (isRaised) {
					backgroundColor = raisedColor
				} else {
					backgroundColor = theme.cardStock
				}
			}
		}
	}

	return (
		<MotionView
			ref={pressableRef}
			center
			noShrink
			color={backgroundColor}
			_tamaguiProps={{ flexDirection: "row" }}
			{...otherProps}
			{...pointerProps}
			disabled={isDisabled ?? false}
			cursor={isDisabled ? "not-allowed" : "pointer"}
			variants={{
				normal: { filter: "none" },
				raised: { y: -1, filter: e1.filter ?? "none", boxShadow: e1.boxShadow },
				hover: { y: -3, filter: e2.filter ?? "none", boxShadow: e2.boxShadow },
				active: { y: 0, filter: e1.filter ?? "none", boxShadow: e1.boxShadow },
			}}
			animate={
				isRaised && !isDisabled
					? isHovered
						? isActive
							? "active"
							: "hover"
						: "raised"
					: "normal"
			}
			transition={{ type: "spring", visualDuration: 0.35, bounce: 0.35 }}
			onPress={(event) => {
				onPress?.({ ref: pressableRef, event })
			}}
		>
			{children}
		</MotionView>
	)
}
