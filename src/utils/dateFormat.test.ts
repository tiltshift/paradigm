import { DateTime } from "luxon"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { dateFormat } from "./dateFormat"

describe("dateFormat", () => {
	const birthday = DateTime.fromISO("1981-06-18", {
		zone: "UTC",
		locale: "en-US",
	})
	const now = DateTime.fromISO("2026-01-15T12:00:00", {
		zone: "UTC",
		locale: "en-US",
	})

	beforeEach(() => {
		vi.useFakeTimers()
		vi.setSystemTime(now.toMillis())
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it("formats a long date without shifting the calendar day", () => {
		expect(dateFormat.dateLong.formatDateTime(birthday)).toBe("June 18, 1981")
	})

	it("formats a short date without shifting the calendar day", () => {
		expect(dateFormat.dateShort.formatDateTime(birthday)).toBe("6/18/1981")
	})

	it.each([
		-19, 0, 19,
	])("formats a date %i seconds away as Just Now", (seconds) => {
		expect(dateFormat.fuzzy.formatDateTime(now.plus({ seconds }))).toBe(
			"Just Now",
		)
	})

	it.each([
		[-20, "20 seconds ago"],
		[20, "in 20 seconds"],
		[-60, "1 minute ago"],
		[60, "in 1 minute"],
	] as const)("formats a date %i seconds away relatively", (seconds, expected) => {
		expect(dateFormat.fuzzy.formatDateTime(now.plus({ seconds }))).toBe(
			expected,
		)
	})
})
