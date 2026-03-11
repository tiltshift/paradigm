import { Slider as TamaguiSlider } from "@tamagui/slider"
import { useState } from "react"

import { Pressable } from "../Button"

export type SliderProps = {
	/**
	 * current slider value (controlled)
	 */
	value: number
	/**
	 * Initial Slider Value
	 */
	defaultValue?: number
	/**
	 * callback for controlled version
	 */
	onValueChange?: (value: number) => void
	/**
	 * Whether the slider is disabled
	 */
	disabled?: boolean
	/**
	 * minimum value of slider (default: 0)
	 */
	min?: number
	/**
	 * maximum value of slider (default: 100)
	 */
	max?: number
	/**
	 * step value of slider
	 */
	step?: number
}

export const Slider = ({
	value,
	defaultValue,
	onValueChange,
	disabled = false,
	min = 0,
	max = 100,
	step,
}: SliderProps) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<TamaguiSlider
			value={[value]}
			{...(defaultValue !== undefined && { defaultValue: [defaultValue] })}
			onValueChange={(vals) => {
				const v = vals[0]
				if (v !== undefined) onValueChange?.(v)
			}}
			disabled={disabled}
			min={min}
			max={max}
			{...(step !== undefined && { step })}
			opacity={disabled ? 0.6 : 1}
			flexGrow={1}
		>
			<TamaguiSlider.Track
				height={"$sliderTrack"}
				borderRadius={"$sm"}
				backgroundColor={"$uiStroke"}
			>
				<TamaguiSlider.TrackActive backgroundColor={"$primary"} />
			</TamaguiSlider.Track>
			<TamaguiSlider.Thumb
				index={0}
				unstyled
				position="absolute"
				top={2}
				width={"$sliderHandleSize"}
				height={"$sliderHandleSize"}
				cursor={disabled ? "not-allowed" : "pointer"}
				outlineStyle="none"
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			>
				<Pressable
					grow
					radius={"$circle"}
					isRaised
					isDisabled={disabled}
					isPrimary={isFocused}
					// TODO: use isFocused for custom focus styles
				/>
			</TamaguiSlider.Thumb>
		</TamaguiSlider>
	)
}
