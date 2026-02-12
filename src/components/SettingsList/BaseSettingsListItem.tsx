import { getTokenValue } from "@tamagui/core"

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
}

export const BaseSettingsListItem = ({
	label,
	icon,
	iconColor,
	children,
}: BaseSettingsListItemProps & { children: React.ReactNode }) => {
	const Icon = icon

	return (
		<Row>
			{Icon && (
				<Icon
					color={iconColor || "$color"}
					size={getTokenValue("$size.listItemIconSize")}
				/>
			)}
			<Text noUserSelect noLineHeight>
				{label}
			</Text>
			{children}
		</Row>
	)
}
