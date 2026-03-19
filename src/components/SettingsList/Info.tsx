import { Text } from "../Text"
import {
	BaseSettingsListItem,
	type BaseSettingsListItemProps,
} from "./BaseSettingsListItem"

export type InfoProps = BaseSettingsListItemProps & {
	value?: string | React.ReactNode
	noSelectValue?: boolean
	/**
	 * if the value is a Text component (or a text-like component like DateTime) set this to true to get the correct formatting
	 */
	valueIsText?: boolean
}

export const Info = ({
	value,
	valueIsText,
	noSelectValue = false,
	...baseProps
}: InfoProps) => {
	return (
		<BaseSettingsListItem {...baseProps}>
			{(typeof value === "string" && value !== "") || valueIsText ? (
				<Text
					style={Text.style.header5}
					color={"$placeholderColor"}
					noLineHeight
					tabularNumbers
					noUserSelect={noSelectValue}
				>
					{value}
				</Text>
			) : (
				value
			)}
		</BaseSettingsListItem>
	)
}
