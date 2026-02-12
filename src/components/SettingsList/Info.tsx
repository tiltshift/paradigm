import { Icon } from "../Icon"
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
	label,
	value,
	noSelectValue = false,
	valueIsText = false,
	...props
}: InfoProps) => {
	const { value, ...baseProps } = props

	return (
		<BaseSettingsListItem {...baseProps}>
			{(typeof value === "string" && value !== "") || valueIsText ? (
				<Text
					style={Text.style.header6}
					color={"$secondaryColor"}
					noLineHeight
					tabularNumbers
					noUserSelect={noSelectValue}
				>
					{value}
				</Text>
			) : (
				value
			)}
			{props.onPress && (
				<Icon.ChevronRight
					size={"$listItemAfterIconSize"}
					color={"$secondaryColor"}
				/>
			)}
		</BaseSettingsListItem>
	)
}
