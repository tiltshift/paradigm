import React from "react"
import { useTheme, type ViewStyle } from "tamagui"

import { usePointerEvents } from "../../hooks/usePointerEvents"
import { useShadow as getShadow } from "../../hooks/useShadow"
import { ComponentError } from "../ComponentError"
import { Icon, type IconComponentType } from "../Icon"
import { Text } from "../Text"
import { MotionView, ViewContext } from "../View"
import {
	type ParadigmPressableProps,
	Pressable,
	type PressableState,
} from "./Pressable"

import type { FontKey } from "../../config/fonts"
import type { IconSizes } from "../../config/tamagui.config"
import type { ColorValue } from "../../utils/color"

type ParadigmButtonProps = ParadigmPressableProps & {
	/**
	 * The Icon for this button
	 */
	icon?: IconComponentType
	/**
	 * Props to pass to the icon component
	 */
	iconProps?: React.ComponentProps<IconComponentType>
	/**
	 * the text to show on the button, if any
	 */
	label?: string | React.ReactNode
	/**
	 * Should this button have a disclosure arrow on the right?
	 */
	hasDisclosure?: boolean
	/**
	 * What size is this button?
	 * Defaults to `medium`
	 */
	size?: "small" | "medium" | undefined
	/**
	 * can this button grow to fill available space?
	 */
	canGrow?: boolean
} & Pick<ViewStyle, "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my">

const { all: e1 } = getShadow({
	shadowName: "elevation1",
	forceBoxShadow: true,
})
const { all: e2 } = getShadow({
	shadowName: "elevation2",
	forceBoxShadow: true,
})

export const Button = ({
	label,
	icon: IconComponent,
	iconProps,
	isDisabled: isMarkedDisabled = false,
	isLoading,
	hasDisclosure,
	size = "medium",
	canGrow,
	...otherProps
}: ParadigmButtonProps) => {
	const theme = useTheme()

	const [{ isHovered, isActive }, setPressState] =
		React.useState<PressableState>({
			isHovered: false,
			isActive: false,
		})

	if (!label && !IconComponent) {
		return <ComponentError text="Button needs label, the icon prop, or both." />
	}

	/**
	 * All the vars!
	 */
	let outerPadding: number
	let innerPadding: number
	let iconSize: IconSizes
	let buttonHeight: number
	let textStyle: FontKey
	let disclosureSize: IconSizes
	let textColor: ColorValue
	let iconColor: ColorValue
	let disclosureColor: ColorValue

	/**
	 * Button Sizing!
	 */
	switch (size) {
		case "medium": {
			buttonHeight = 36
			outerPadding = 8
			innerPadding = 4
			iconSize = 20
			disclosureSize = 18
			textStyle = Text.style.header6

			break
		}
		case "small": {
			buttonHeight = 28
			outerPadding = 6
			innerPadding = 4
			iconSize = 18
			disclosureSize = 16
			textStyle = Text.style.footnote

			break
		}
	}

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

	// Disclosure + Icon Color
	switch (buttonState) {
		case "loading":
		case "disabled": {
			iconColor = disclosureColor = theme.colorDisabled
			break
		}
		default: {
			iconColor = disclosureColor = otherProps.isPrimary
				? theme.colorOnPrimary
				: otherProps.isNegative
					? theme.destructive
					: theme.primary
		}
	}

	// Text Color
	if (hasDisclosure) {
		textColor = otherProps.isPrimary
			? theme.colorOnPrimary
			: otherProps.isNegative
				? theme.destructive
				: theme.color
	} else {
		switch (buttonState) {
			case "loading":
			case "disabled": {
				textColor = theme.colorDisabled
				break
			}
			default: {
				textColor = otherProps.isPrimary
					? theme.colorOnPrimary
					: otherProps.isNegative
						? theme.destructive
						: theme.primary
			}
		}
	}

	return (
		<Pressable
			{...(canGrow && { grow: canGrow })}
			height={buttonHeight}
			radius={"$md"}
			px={outerPadding}
			_tamaguiProps={{ flexDirection: "row" }}
			isDisabled={isDisabled ?? false}
			onStateChange={setPressState}
			{...otherProps}
		>
			{IconComponent && (
				<IconComponent size={iconSize} color={iconColor} {...iconProps} />
			)}
			{label && (
				<Text
					noUserSelect
					noLineHeight
					style={textStyle}
					letterCase={Text.letterCase.title}
					color={textColor}
					mx={innerPadding}
				>
					{isLoading ? "Loading…" : label}
				</Text>
			)}
			{hasDisclosure && (
				<Icon.ChevronDown
					size={disclosureSize}
					color={disclosureColor}
					style={{ marginLeft: innerPadding }}
				/>
			)}
		</Pressable>
	)
}

export { Pressable }

export { ButtonRow } from "./ButtonRow"
