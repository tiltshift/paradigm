// Config

export * from "./config/paradigm.config"
export { baseTokens as tokens } from "./config/tamagui.config"

// Components

// Components

export * from "./components/Button"
export * from "./components/Icon"
export * from "./components/Layout"
export * from "./components/List"
export * from "./components/ListItem"
export * from "./components/ParadigmProvider"
export * from "./components/ScrollView"
export * from "./components/Text"
export * from "./components/TextInput"
export * from "./components/View"

// Hooks

// utils

export * from "./utils/platform"
export * from "./utils/pluralize"
export * from "./utils/preventBounceScroll"

// etc

export { useTheme } from "tamagui"

// Test errors for reviewdog
const unusedVariable = "this will trigger a lint error"
const typescriptError: number = "this is a string not a number"
