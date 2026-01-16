import {
	ScrollView as TGScrollView,
	type ScrollViewProps as TGScrollViewProps,
} from "tamagui"

import { useAlwaysBounceVertical } from "../../hooks/useAlwaysBounceVertical"

export type ScrollViewRef = TGScrollView

export const ScrollView = ({ color, ...props }: TGScrollViewProps) => {
	const { onLayout, contentContainerStyle } = useAlwaysBounceVertical()

	if (props.alwaysBounceVertical) {
		return (
			<TGScrollView
				{...props}
				backgroundColor={color}
				onLayout={(event) => {
					props.onLayout?.(event)
					onLayout(event)
				}}
				contentContainerStyle={{
					...(props.contentContainerStyle &&
					typeof props.contentContainerStyle === "object"
						? props.contentContainerStyle
						: {}),
					...(contentContainerStyle && typeof contentContainerStyle === "object"
						? contentContainerStyle
						: {}),
				}}
			/>
		)
	} else {
		return <TGScrollView {...props} />
	}
}
