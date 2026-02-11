module.exports = function template(
	{ imports, interfaces, componentName, props, jsx },
	{ tpl },
) {
	const iconNameStr = `${componentName}Icon`
	const iconName = { type: "Identifier", name: iconNameStr }

	return tpl`
import React from "react"
import { styled } from "@tamagui/core"

import { TextContext } from "../../Text"

import type { SVGProps } from "react"
import type { ViewProps } from "react-native"
import type { RawWebIconComponentProps } from "../types"

${imports}
${interfaces}

const ${iconName} = (${props}) => ${jsx}

const ${componentName}	 = ({ size, color, style = {}, ...otherProps }: RawWebIconComponentProps) => {
  const { isInText } = React.useContext(TextContext)

  const fill =
    color ||
    (isInText ? "$iconInTextColor" : "black")

  const combinedStyle = {
    flexShrink: 0,
    ...style
  }

  return React.createElement(${iconName}, { ...otherProps, style: combinedStyle, width: size, height: size, fill })
}

const StyledIcon = styled(
	${componentName},
	{},
	{
		accept: {
			color: "color",
      size: "icon",
		} as const,
	},
)

export default StyledIcon
  `
}
