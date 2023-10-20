import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	return (
		<motion.div
			ref={ref}
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.6, ease: 'easeInOut' }}
			style={{
				maxHeight: '100%',
				overflowY: 'auto',
			}}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)