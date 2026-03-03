import preview from "@/storybook/preview"
import { SettingsList } from "./index"

const meta = preview.meta({
	component: SettingsList,
})

export const Story = meta.story({
	render: () => (
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
		</SettingsList>
	),
})
