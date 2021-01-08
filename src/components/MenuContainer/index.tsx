import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'

import styles from './styles.module.css'

import ProductsCard from '../Cards/Products'
import DevelopersCard from '../Cards/Developers'
import CompanyCard from '../Cards/Company'


interface MenuContainerProps {
	selectedNavOption: 'products' | 'developers' | 'company' | null
	selectedNavOptionPosition: { x: number }
}

const MenuContainer = ({ selectedNavOption, selectedNavOptionPosition }: MenuContainerProps) => {

	const products = useRef<HTMLElement | null>(null)
	const developers = useRef<HTMLElement>(null)
	const company = useRef<HTMLElement>(null)

	const containerWidth = useMotionValue<number | null>(null)
	const containerHeight = useMotionValue<number | null>(null)

	const [isFirstInteraction, setIsFirstInteraction] = useState(true)


	useEffect(() => {
		if (selectedNavOption !== null)
			setIsFirstInteraction(false)
		else
			setIsFirstInteraction(true)
	}, [selectedNavOption])


	useLayoutEffect(() => {
		if (!selectedNavOption)
			return

		let width: number, height: number

		switch (selectedNavOption) {
			case 'products':
				if (products === null || products.current === null)
					return
				width = products.current.clientWidth
				height = products.current.clientHeight
				break
			case 'developers':
				if (developers === null || developers.current === null)
					return
				width = developers.current.clientWidth
				height = developers.current.clientHeight
				break
			case 'company':
				if (company === null || company.current === null)
					return
				width = company.current.clientWidth
				height = company.current.clientHeight
				break
			default:
				return
		}
		containerWidth.set(width)
		containerHeight.set(height)
	}, [selectedNavOption, containerWidth, containerHeight])



	const cardProps = {
		className: styles.card,
		initial: { opacity: 0, x: isFirstInteraction ? 0 : -70 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: isFirstInteraction ? 0 : -70 },
		transition: { type: 'spring', stiffness: 80, damping: 14 }
	}

	return (
		<AnimatePresence exitBeforeEnter>
			{selectedNavOption !== null && (
				<motion.div
					className={styles.menuWrapper}
					style={{ originX: 0.5, originY: 0, transformPerspective: 1000, height: window.innerHeight }}
					initial={{ opacity: 0, rotateX: -13 }}
					animate={{ opacity: 1, rotateX: 0 }}
					exit={{ opacity: 0, rotateX: -13 }}
					transition={{ duration: 0.15, ease: 'linear' }}
				>
					<motion.div
						className={styles.menuBody}
						style={{
							width: containerWidth,
							height: containerHeight,
							transition: isFirstInteraction ? '0' : '0.3s'
						}}
					>
						<div
							className={styles.arrow}
							style={{ left: selectedNavOptionPosition.x - 6 }}  /* [6 -> half of arrow width] */
						/>

						<div className={styles.menuContent}>
							<AnimatePresence>
								{selectedNavOption === 'products' && (
									<motion.div {...cardProps}>
										<ProductsCard ref={products} />
									</motion.div>
								)}
							</AnimatePresence>

							<AnimatePresence>
								{selectedNavOption === 'developers' && (
									<motion.div {...cardProps}>
										<DevelopersCard ref={developers} />
									</motion.div>
								)}
							</AnimatePresence>

							<AnimatePresence>
								{selectedNavOption === 'company' && (
									<motion.div {...cardProps}>
										<CompanyCard ref={company} />
									</motion.div>
								)}
							</AnimatePresence>
						</div>

					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default MenuContainer