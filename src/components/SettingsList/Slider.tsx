import { Slider, type SliderProps } from "../Slider"
import { Text, type TextProps } from "../Text"
import { Row, View } from "../View"
import {
	BaseSettingsListItem,
	type BaseSettingsListItemProps,
} from "./BaseSettingsListItem"

export type SettingsSliderProps = BaseSettingsListItemProps & SliderProps

export const SettingsSlider = ({
	value,
	onValueChange,
	isDisabled,
	defaultValue,
	min,
	max,
	step,
	...baseProps
}: SettingsSliderProps) => {
	const valueTextProps = {
		style: Text.style.header5,
		color: "$placeholderColor",
		noLineHeight: true,
		tabularNumbers: true,
		noUserSelect: true,
	} satisfies TextProps

	return (
		<BaseSettingsListItem {...baseProps}>
			<Row grow align="center" between="$settingsListItemInnerPadding">
				<Slider
					value={value}
					{...(onValueChange !== undefined ? { onValueChange } : {})}
					{...(isDisabled !== undefined ? { isDisabled } : {})}
					{...(defaultValue !== undefined ? { defaultValue } : {})}
					{...(min !== undefined ? { min } : {})}
					{...(max !== undefined ? { max } : {})}
					{...(step !== undefined ? { step } : {})}
					ml={"$settingsListItemInnerPadding"}
				/>
				<View position="relative">
					<Text {...valueTextProps} opacity={0} aria-hidden>
						000
					</Text>
					<Text {...valueTextProps} position="absolute" right={0}>
						{value}
					</Text>
				</View>
			</Row>
		</BaseSettingsListItem>
	)
}
