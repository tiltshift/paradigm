import React from "react"

import preview from "@/storybook/preview"
import { Text } from "../Text"
import { Column, Row } from "../View"
import { Slider } from "./index"

const meta = preview.meta({
	component: Slider,
})

const ControlledSlider: React.FC<{
	label: string
	initialValue: number
	min?: number
	max?: number
	step?: number
	disabled?: boolean
}> = ({ label, initialValue, min, max, step, disabled }) => {
	const [value, setValue] = React.useState(initialValue)

	return (
		<Column between={4}>
			<Row between={8}>
				<Text style={Text.style.caption}>{label}</Text>
				<Text style={Text.style.caption}>{value}</Text>
			</Row>
			<Slider
				value={value}
				onValueChange={setValue}
				{...(min !== undefined && { min })}
				{...(max !== undefined && { max })}
				{...(step !== undefined && { step })}
				{...(disabled !== undefined && { isDisabled: disabled })}
			/>
		</Column>
	)
}

export const Story = meta.story({
	args: {
		value: 50,
		min: 0,
		max: 100,
	},
	render: (args) => (
		<Row center m={20} width={300}>
			<Slider {...args} onValueChange={() => {}} />
		</Row>
	),
})

export const AllStates = meta.story({
	render: () => (
		<Column between={24} m={20} width={300}>
			<ControlledSlider label="Default" initialValue={50} />
			<ControlledSlider label="Step (10)" initialValue={50} step={10} />
			<ControlledSlider
				label="Custom range (0 - 200)"
				initialValue={100}
				min={0}
				max={200}
			/>
			<ControlledSlider label="Disabled" initialValue={40} disabled />
		</Column>
	),
})
