import { Switch, type SwitchProps } from "../Switch"
import {
	BaseSettingsListItem,
	type BaseSettingsListItemProps,
} from "./BaseSettingsListItem"

export type SettingsSwitchProps = BaseSettingsListItemProps & SwitchProps

export const SettingsSwitch = ({
	value,
	onValueChange,
	isDisabled,
	...baseProps
}: SettingsSwitchProps) => {
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
