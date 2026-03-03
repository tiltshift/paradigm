import { defaultConfig as defaultTamaguiConfig } from "@tamagui/config/v5"
import { type CreateTamaguiProps, createTamagui, createTokens } from "tamagui"

import { Nuntito } from "./fonts"
import { defaultParadigmConfig } from "./paradigm.config"
import { shorthands } from "./shorthands"

const betweenLists = 16

const icon = {
	10: 10,
	14: 14,
	16: 16,
	18: 18,
	20: 20,
	22: 22,
	28: 28,
	32: 32,
	42: 42,
	64: 64,
} as const

export const baseTokens = {
	color: {},
	icon,
	size: {
		...defaultParadigmConfig.size,
		true: 16,
		input: 32,
		tabHeight: 40,
		tabContentMinHeight: 40,
		tabContentDefaultSize: 280,
		listHeaderHeight: 24,
		listHeaderHeightSticky: 32,
		listSpacerHeight: betweenLists,
		listItemStatusSize: 4,
		listItemAfterIconSize: 18,
		listItemFirstLineIconSize: 14, // matches the size of the first line of text in a 2-line list item
		listItemInteriorIconSize: 16, // matches the size of the text in a 1-line list item
		listItemIconSize: 28,
		listItemHeight: 32,
		mainNavMinWidth: 280,
		mainNavMaxWidth: 560,
		settingsListItemHeight: 40,
	},
	space: {
		...defaultParadigmConfig.space,
		thinStroke: 1,
		space: 16,
		true: 16,
		betweenLists: betweenLists,
		betweenButtons: 6,
		listVerticalSpace: 12,
		listItemEdgeInset: 6,
		listItemBetweenItems: 4,
		listItemStatusPosition: 6,
		listItemTextIconSpace: 6,
		captionVerticalMargin: 6,
		settingsListItemInnerPadding: 6,
	},
	radius: {
		sm: 2,
		true: 2,
		md: 6,
		container: 9, // meta box, settings list item
		circle: 400,
	},
	zIndex: {
		below: -1,
		0: 0,
		1: 100,
		true: 100,
		2: 200,
		3: 300,
		4: 400,
		5: 500,
	},
} as const

export type IconSizes = keyof typeof icon

/**
 * This is the config used in paradigm by default.
 * It is possible to override values via the ParadigmProvider.
 */
export const baseConfig = {
	...defaultTamaguiConfig,
	settings: {
		...defaultTamaguiConfig.settings,
		styleCompat: "react-native",
		defaultPosition: "relative",
	},
	tokens: createTokens(baseTokens),
	fonts: {
		heading: Nuntito,
		body: Nuntito,
	},
	shorthands,
	themes: defaultParadigmConfig.themes,
	media: {
		narrow: { maxWidth: 592 },
		wide: { minWith: 592 + 1 },
	} as const,
} satisfies CreateTamaguiProps

const baseTamagui = createTamagui(baseConfig)

export type AppConfig = typeof baseTamagui

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}
}
