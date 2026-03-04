import React from "react"
import {
	createTamagui,
	createTokens,
	PortalProvider,
	TamaguiProvider,
	Theme,
} from "tamagui"

import { baseConfig } from "../../config/tamagui.config"
import { systemTheme, Themes, themeQuery } from "../../utils/theme"
import { View } from "../View"

import type { ParadigmConfig } from "../../config/paradigm.config"

import "./global.css"

export const ParadigmProvider: React.FC<{
	children: React.ReactNode
	/**
	 * Optional Paradigm config to override the default.
	 */
	config?: ParadigmConfig
	/**
	 * what theme to use (light/dark) defaults to system value
	 */
	theme?: Themes
}> = ({ children, theme, config: overrides }) => {
	/**
	 * 🎨 Theme
	 */
	const [currentTheme, setCurrentTheme] = React.useState<Themes>(
		theme ?? systemTheme,
	)

	React.useEffect(() => {
		if (theme) {
			setCurrentTheme(theme)
			return
		}

		setCurrentTheme(systemTheme)

		if (!themeQuery) return
		const mq = themeQuery
		const handler = (e: MediaQueryListEvent) =>
			setCurrentTheme(e.matches ? Themes.dark : Themes.light)
		mq.addEventListener("change", handler)
		return () => mq.removeEventListener("change", handler)
	}, [theme])

	/**
	 * 🔧 Config
	 */

	const config = React.useMemo(() => {
		return createTamagui({
			...baseConfig,
			tokens: createTokens({
				...baseConfig.tokens,
				size: {
					...baseConfig.tokens.size,
					...overrides?.size,
				},
				space: {
					...baseConfig.tokens.space,
					...overrides?.space,
				},
			}),
			themes: {
				light: {
					...baseConfig.themes.light,
					...overrides?.themes?.light,
				},
				dark: {
					...baseConfig.themes.dark,
					...overrides?.themes?.dark,
				},
			},
		})
	}, [
		overrides?.size,
		overrides?.space,
		overrides?.themes?.dark,
		overrides?.themes?.light,
	])

	return (
		<TamaguiProvider config={config} defaultTheme={Themes.light}>
			<Theme name={currentTheme}>
				<PortalProvider shouldAddRootHost>
					<View fillContainer>{children}</View>
				</PortalProvider>
			</Theme>
		</TamaguiProvider>
	)
}
