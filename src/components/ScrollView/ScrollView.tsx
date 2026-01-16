import {
	ScrollView as TGScrollView,
	type ScrollViewProps as TGScrollViewProps,
} from "tamagui"

import { useAlwaysBounceVertical } from "../../hooks/useAlwaysBounceVertical"

export type ScrollViewRef = TGScrollView

export const ScrollView = ({ color, ...props }: TGScrollViewProps) => {
	const { onLayout, contentContainerStyle } = useAlwaysBounceVertical()

	const sharedProps = { ...props, backgroundColor: color }

	if (props.alwaysBounceVertical) {
		return (
			<TGScrollView
				{...sharedProps}
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
		return <TGScrollView {...sharedProps} />
	}
}
