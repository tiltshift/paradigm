import { AfterText } from "../AfterText"
import { Column } from "../View"
import { Header } from "./Header"
import { Info } from "./Info"

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
	children: React.ReactNode
}

const SettingsList = ({ header, footer, children }: SettingsListProps) => {
	return (
		<Column>
			{header && <Header>{header}</Header>}
			{children}
			{footer && <AfterText>{footer}</AfterText>}
		</Column>
	)
}

SettingsList.Info = Info

export { SettingsList }
