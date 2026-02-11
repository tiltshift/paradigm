import { getTokens } from "@tamagui/core"

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
	children: React.ReactNode
}

export const BaseSettingsListItem = ({
	label,
	icon,
	iconColor,
}: BaseSettingsListItemProps) => {
	const Icon = icon

	return (
		<Row>
			{Icon && (
				<Icon
					color={iconColor || "$color"}
					size={getTokens().size.listItemIconSize.val}
				/>
			)}
			<Text noUserSelect noLineHeight>
				{label}
			</Text>
		</Row>
	)
}
