import React from "react"

import preview from "@/storybook/preview"
import { SettingsList } from "./index"

const meta = preview.meta({
	component: SettingsList,
})

export const Story = meta.story({
	render: () => (
		<SettingsList header="Settings" footer="End of settings">
			{/* SettingsList.Item components would go here */}
		</SettingsList>
	),
})
