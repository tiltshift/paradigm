import { useState } from "react"

import preview from "@/storybook/preview"
import { Column } from "../.."
import { SettingsList } from "./index"

const meta = preview.meta({
	component: SettingsList,
})

export const Story = meta.story({
	render: () => {
		const [sliderValue, setSliderValue] = useState(50)

		return (
			<Column width={380}>
				<SettingsList header="Settings" footer="End of settings">
					<SettingsList.Info label="info" value="342" />
					<SettingsList.Info
						label="info"
						value="342"
						onPress={() => {
							alert("press")
						}}
					/>
					<SettingsList.Info
						label="this item has a very very long label"
						value="342"
					/>
					<SettingsList.Info
						label="this item has a very very long label"
						value="342435953"
					/>
					<SettingsList.Switch
						label="Switch"
						value={true}
						onValueChange={(value) => console.log(value)}
					/>
					<SettingsList.Slider
						label="Slider"
						value={sliderValue}
						onValueChange={setSliderValue}
					/>
				</SettingsList>
			</Column>
		)
	},
})
