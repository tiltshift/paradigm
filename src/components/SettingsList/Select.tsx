import { getTokenValue } from "@tamagui/core"

import { Icon } from "../Icon"
import { Text } from "../Text"
import { Row, View } from "../View"
import {
	BaseSettingsListItem,
	type BaseSettingsListItemProps,
} from "./BaseSettingsListItem"

export type SelectOption<T extends string = string> = {
	label: string
	value: T
}

export type SettingsSelectProps<T extends string = string> =
	BaseSettingsListItemProps & {
		options: SelectOption<T>[]
		value: T
		onValueChange?: (value: T) => void
		isDisabled?: boolean
	}

export const SettingsSelect = <T extends string = string>({
	options,
	value,
	onValueChange,
	isDisabled,
	...baseProps
}: SettingsSelectProps<T>) => {
	const selectedLabel = options.find((o) => o.value === value)?.label ?? value

	return (
		<BaseSettingsListItem {...baseProps}>
			<Row align="center" gap="$listItemBetweenItems" position="relative">
				<Text
					style={Text.style.header5}
					color="$placeholderColor"
					noLineHeight
					noUserSelect
				>
					{selectedLabel}
				</Text>
				<Icon.ChevronDown
					size={getTokenValue("$size.listItemAfterIconSize")}
					color="$placeholderColor"
				/>
				{!isDisabled && onValueChange && (
					<View
						position="absolute"
						top={0}
						left={0}
						right={0}
						bottom={0}
						overflow="hidden"
					>
						<select
							value={value}
							onChange={(e) => onValueChange(e.target.value as T)}
							style={{
								position: "absolute",
								inset: 0,
								opacity: 0,
								cursor: "pointer",
								width: "100%",
								height: "100%",
							}}
						>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</View>
				)}
			</Row>
		</BaseSettingsListItem>
	)
}
