import { DateTime as luxon } from "luxon"

export type DateTimeFormat = {
	/**
	 * A function that takes a dateTime and returns a string to display to the user.
	 */
	formatDateTime: (dateTime: luxon) => string
	/**
	 * Should this value update live? If so, how often (in seconds)?
	 */
	updateFrequency: number
	/**
	 * Should this DateTime re-render if given a value?
	 */
	updateWithValue: boolean
	/**
	 * Should tabular numbers be used?
	 */
	isTabular?: boolean
}

export const dateFormat = {
	/**
	 * 8:01 AM
	 */
	time: {
		formatDateTime: (dt) => dt.toLocaleString(luxon.TIME_SIMPLE),
		updateFrequency: 30,
		updateWithValue: false,
		isTabular: true,
	},
	/**
	 * 8:01:12 AM
	 */
	timeWithSeconds: {
		formatDateTime: (dt) => dt.toLocaleString(luxon.TIME_WITH_SECONDS),
		updateFrequency: 1,
		updateWithValue: false,
		isTabular: true,
	},
	/**
	 * 1 month ago
	 */
	fuzzy: {
		formatDateTime: (dt) => {
			const relDate = dt.toRelative()

			if (Math.abs(luxon.local().diff(dt, "seconds").seconds) < 20) {
				return "Just Now"
			}

			if (relDate) {
				return relDate
			}
			throw new Error("Invalid Date used in DateTime.")
		},
		updateFrequency: 1,
		updateWithValue: true,
	},
	/**
	 * 6/18/1981
	 */
	dateShort: {
		formatDateTime: (dt) => dt.toLocaleString(luxon.DATE_SHORT),
		updateFrequency: 90,
		updateWithValue: false,
		isTabular: true,
	},
	/**
	 * June 18, 1981
	 */
	dateLong: {
		formatDateTime: (dt) => dt.toLocaleString(luxon.DATE_FULL),
		updateFrequency: 90,
		updateWithValue: false,
		isTabular: true,
	},
	/**
	 * June
	 */
	monthOnly: {
		formatDateTime: (dt) => dt.toLocaleString({ month: "long" }),
		updateFrequency: 300,
		updateWithValue: false,
		isTabular: false,
	},
	/**
	 * June 1981
	 */
	monthYear: {
		formatDateTime: (dt) =>
			dt.toLocaleString({ month: "long", year: "numeric" }),
		updateFrequency: 300,
		updateWithValue: false,
		isTabular: false,
	},
	/**
	 * 1981
	 */
	yearOnly: {
		formatDateTime: (dt) => dt.toLocaleString({ year: "numeric" }),
		updateFrequency: 300,
		updateWithValue: false,
		isTabular: true,
	},
	/**
	 * Thursday
	 */
	dayOfWeek: {
		formatDateTime: (dt) => dt.toLocaleString({ weekday: "long" }),
		updateFrequency: 300,
		updateWithValue: false,
		isTabular: false,
	},
} satisfies Record<string, DateTimeFormat>
