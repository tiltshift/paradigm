import { Switch, type SwitchProps } from "../Switch"
import {
	BaseSettingsListItem,
	type BaseSettingsListItemProps,
} from "./BaseSettingsListItem"

export type SettingsSliderProps = BaseSettingsListItemProps & SwitchProps

export const SettingsSlider = ({
	value,
	onValueChange,
	isDisabled,
	...baseProps
}: SettingsSliderProps) => {
	return (
		<BaseSettingsListItem {...baseProps}>
			<Switch
				value={value}
				onValueChange={onValueChange}
				isDisabled={isDisabled}
			/>
		</BaseSettingsListItem>
	)
}
