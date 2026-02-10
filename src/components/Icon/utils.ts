/**
 * If the color is a tamagui color return the "get" value, otherwise if its a string just return the string.
 */
export const resolveColor = (value: unknown): string => {
	if (typeof value === "string") return value
	const maybe = value as { get?: () => unknown }
	if (maybe?.get) return String(maybe.get())
	return String(value)
}
