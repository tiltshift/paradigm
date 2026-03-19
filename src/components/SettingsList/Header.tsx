import { Text } from "../Text"
import { Column } from "../View"

import type { ListHeaderProps } from "../List/Header"

export const Header = ({ children }: ListHeaderProps) => {
	return (
		<Column noShrink center="v" px={"$edgeInset"}>
			<Text
				style={Text.style.footnote}
				color={"$settingsListHeader"}
				letterCase={Text.letterCase.upper}
				py={"$captionVerticalMargin"}
				noLineHeight
				noUserSelect
			>
				{children}
			</Text>
		</Column>
	)
}
