import React from "react"

import { Header } from "../Header"
import { ListWrapper } from "../Wrapper"

import type { CommonListProps } from "../types"

type SimpleListProps = CommonListProps & { children?: React.ReactNode }

export const SimpleList = React.memo<SimpleListProps>(function SimpleList({
	children,
	header,
	beforeList,
	afterList,
	...props
}) {
	const [isEmpty, setIsEmpty] = React.useState(
		React.Children.count(children) === 0,
	)

	React.useEffect(() => {
		setIsEmpty(React.Children.count(children) === 0)
	}, [children])

	return (
		<ListWrapper
			beforeList={beforeList}
			afterList={afterList}
			header={header}
			{...props}
			isEmpty={isEmpty}
		>
			{/** biome-ignore lint/complexity/noUselessFragments: We want this content to appear as a single element for the wrapper/group. Without the fragment this will look like 4 children */}
			<>
				{beforeList}
				{header && <Header>{header}</Header>}
				{children}
				{afterList}
			</>
		</ListWrapper>
	)
})
