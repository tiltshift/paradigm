import React from "react"

import { AfterText } from "../AfterText"
import { Column } from "../View"
import { Header } from "./Header"
import { Info } from "./Info"
import { SettingsSwitch as Switch } from "./Switch"

type SettingsListChild = React.ReactElement<{
	isFirst: boolean
	isLast: boolean
}>

type SettingsListProps = {
	/**
	 * Text to show above the settings list
	 */
	header?: string
	/**
	 * Text to show below the settings list
	 */
	footer?: string
	/**
	 * The content of the settings list. Should be `SettingsList.Item` components.
	 */
	children: SettingsListChild | SettingsListChild[]
}

const SettingsList = ({ header, footer, children }: SettingsListProps) => {
	const childrenArray = React.Children.toArray(children) as SettingsListChild[]

	return (
		<Column>
			{header && <Header>{header}</Header>}
			{childrenArray.map((child, index) => {
				const isFirst = index === 0
				const isLast = index === childrenArray.length - 1

				return React.isValidElement(child)
					? React.cloneElement(child, {
							isFirst,
							isLast,
						})
					: child
			})}
			{footer && <AfterText>{footer}</AfterText>}
		</Column>
	)
}

SettingsList.Info = Info
SettingsList.Switch = Switch

export { SettingsList }
