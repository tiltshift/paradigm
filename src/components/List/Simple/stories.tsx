import { ScrollView as TGScrollView } from "tamagui"

import preview from "@/storybook/preview"
import { ListItem } from "../../ListItem"
import { ScrollView } from "../../ScrollView"
import { Text } from "../../Text"
import { Column, Row } from "../../View"
import { List } from "../"
import { SimpleList } from "."

const meta = preview.meta({
	component: SimpleList,
})

export const Empty = meta.story()

export const EmptyWithContent = meta.story({
	args: {
		emptyContent: "I'm so Empty!",
		color: "blue",
	},
})

export const EmptyInContext = meta.story({
	args: {
		emptyContent: "I'm so Empty!",
		color: "blue",
	},
	render: (args) => {
		return (
			<Column color="red" grow>
				<Row height={100} width={100} color="green" />
				<SimpleList {...args} />
				<Row height={100} width={100} color="green" />
			</Column>
		)
	},
})

export const EmptyWithBeforeAfter = meta.story({
	args: {
		emptyContent: "I'm So Empty!",
		beforeList: <Text>Before</Text>,
		afterList: <Text>After</Text>,
	},
})
export const EmptyWithCustomContent = meta.story({
	args: {
		emptyContent: (
			<Column grow color="red">
				<Text color="white">Custom Empty Content</Text>
			</Column>
		),
	},
})
export const Loading = meta.story({
	args: {
		isLoading: true,
	},
})

export const BeforeAfter = meta.story({
	args: {
		beforeList: <Text>Before Content</Text>,
		afterList: <Text>After Content</Text>,
		children: <Text>Content</Text>,
	},
})

export const Alone = meta.story({
	args: {
		color: "red",
		children: (
			<Column grow color="pink">
				<Text fit={Text.fitValues.wrap}>
					This list will grow to fill contents (dark red)
				</Text>
			</Column>
		),
	},
})

export const InScrollView = meta.story({
	args: {
		color: "red",
		children: (
			<Column grow color="pink">
				<Text fit={Text.fitValues.wrap}>
					This list does not grow to fill contents (dark red)
				</Text>
			</Column>
		),
	},
	render: (args) => {
		return (
			<ScrollView color="cyan">
				<SimpleList {...args} />
			</ScrollView>
		)
	},
})

export const WithItems = meta.story({
	render: (args) => {
		return (
			<Row grow between={5} m={5}>
				<Column width={280} borderWidth={1} borderColor={"$uiStroke"}>
					<SimpleList {...args}>
						<ListItem label="Item 1" />
						<ListItem label="Item 2" />
						<ListItem label="Item 3" />
						<ListItem label="Item 4" />
					</SimpleList>
				</Column>
				<Column width={280} borderWidth={1} borderColor={"$uiStroke"}>
					<List.Group>
						<List.Simple {...args}>
							<ListItem label="Item 1" />
							<ListItem label="Item 2" />
						</List.Simple>
						<List.Simple {...args}>
							<ListItem label="Item 1" />
							<ListItem label="Item 2" />
						</List.Simple>
					</List.Group>
				</Column>
				<Column width={280} borderWidth={1} borderColor={"$uiStroke"}>
					<List.Group>
						<List.Simple {...args} header="List 1">
							<ListItem label="Item 1" />
							<ListItem label="Item 2" />
						</List.Simple>
						<List.Simple {...args} header="List 2">
							<ListItem label="Item 1" />
							<ListItem label="Item 2" />
						</List.Simple>
					</List.Group>
				</Column>
			</Row>
		)
	},
})
