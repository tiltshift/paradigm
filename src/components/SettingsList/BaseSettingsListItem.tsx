import { getTokenValue } from "@tamagui/core"

import { Icon } from "../Icon"
import { Text } from "../Text"
import { Row } from "../View"

import type { IconComponentProps, IconComponentType } from "../Icon"

export type BaseSettingsListItemProps = {
	/**
	 * Label of the settings list item (shown at left)
	 */
	label: string

	icon?: IconComponentType
	iconColor?: IconComponentProps["color"]

	/**
	 * is this the first item in the list? (used for styling)
	 */
	isFirst?: boolean

	/**
	 * is this the last item in the list? (used for styling)
	 */
	isLast?: boolean
	/**
	 * is this item pressable?
	 */
	onPress?: () => void
}

export const BaseSettingsListItem = ({
	label,
	icon,
	iconColor,
	isFirst,
	isLast,
	onPress,
	children,
}: BaseSettingsListItemProps & { children: React.ReactNode }) => {
	const SettingsIcon = icon

	return (
		<Row
			color="$background"
			borderTopLeftRadius={isFirst ? "$container" : 0}
			borderTopRightRadius={isFirst ? "$container" : 0}
			borderBottomLeftRadius={isLast ? "$container" : 0}
			borderBottomRightRadius={isLast ? "$container" : 0}
			borderTopWidth={isFirst ? 1 : 0}
			borderTopColor={"$uiStroke"}
			borderLeftWidth={1}
			borderLeftColor={"$uiStroke"}
			borderRightWidth={1}
			borderRightColor={"$uiStroke"}
			borderBottomWidth={isLast ? 1 : 0}
			borderBottomColor={"$uiStroke"}
			mx={"$edgeInset"}
			noShrink
			onPress={onPress}
		>
			{SettingsIcon && (
				<SettingsIcon
					color={iconColor || "$color"}
					size={getTokenValue("$size.listItemIconSize")}
				/>
			)}
			<Row
				height="$settingsListItemHeight"
				grow
				mx="$settingsListItemInnerPadding"
				borderBottomWidth={isLast ? 0 : 1}
				borderBottomColor={"$uiStroke"}
				alignItems="center"
			>
				<Row grow justifyContent="space-between" align="center">
					<Text
						noUserSelect
						noLineHeight
						fit={Text.fitValues.ellipsis}
						style={Text.style.body}
						letterCase={Text.letterCase.sentence}
						mr={"$listItemBetweenItems"}
					>
						{label}
					</Text>
					<Row grow noShrink justifyContent="flex-end">
						{children}
					</Row>
				</Row>
				{onPress && (
					<Icon.ChevronRight
						size={getTokenValue("$listItemAfterIconSize")}
						color={"$placeholderColor"}
						ml={"$listItemBetweenItems"}
					/>
				)}
			</Row>
		</Row>
	)
}
