import { writable } from "svelte/store"

/** @type {import("svelte/store").Writable<string[]>} */
export const teamsStore = writable([])


/** @type {import("svelte/store").Writable<string[]>} */
export const subjectStore = writable([])

// store for team points
/** @type {import("svelte/store").Writable<{[index: number]: number}>} */
export const teamPointsStore = writable({})