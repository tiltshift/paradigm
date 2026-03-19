export enum Themes {
	light = "light",
	dark = "dark",
	system = "system",
}

export const themeQuery =
	typeof window !== "undefined"
		? window.matchMedia("(prefers-color-scheme: dark)") // browser
		: null // server

/**
 * if we can't figure out the system theme we currently default to light.
 */
export const systemTheme: Themes.light | Themes.dark = themeQuery?.matches
	? Themes.dark
	: Themes.light
