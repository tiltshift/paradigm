import { AnimatePresence } from "motion/react"
import React from "react"

import { animations } from "../../config/animation.config"
import { ListGroupContext } from "../List/Group"
import { MotionView } from "../View"

export type StatusHandlerProps = {
	isDragged: boolean // TODO drag and drop
	isHovered: boolean
	isActive: boolean
	isSelected: boolean
}

export const StatusHandler = ({
	isHovered,
	isActive,
	isSelected,
}: StatusHandlerProps) => {
	const { groupId } = React.useContext(ListGroupContext)
	return (
		<>
			<AnimatePresence>
				{isHovered && (
					<MotionView
						fillContainer
						layoutId={`hovered-${groupId}`}
						color={"$normalHover"}
						style={{ opacity: 0.5 }}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						transition={animations.quickSpring}
						radius={"$md"}
						layoutDependency={isHovered}
					/>
				)}
			</AnimatePresence>

			{!isSelected && isActive && (
				<MotionView
					fillContainer
					key="active"
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={animations.quickSpring}
					color={"$listItemActive"}
					radius={"$md"}
				/>
			)}

			{isSelected && (
				<MotionView
					fillContainer
					layoutId={`selected-${groupId}`}
					// style={{ opacity: 0.25 }}
					transition={animations.quickSpring}
					color={"$listItemSelected"}
					radius={"$md"}
					layoutDependency={isSelected}
				/>
			)}
		</>
	)
}
