import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'
import MenuContainer from '../MenuContainer'


type NavOption = 'products' | 'developers' | 'company'

const Header = () => {

	const [selectedNavOption, setSelectedNavOption] = useState<NavOption | null>(null)
	const [selectedNavOptionPosition, setSelectedNavOptionPosition] = useState<{ x: number }>({ x: 0 })

	const products = useRef<HTMLParagraphElement>(null)
	const developers = useRef<HTMLParagraphElement>(null)
	const company = useRef<HTMLParagraphElement>(null)


	useEffect(() => {
		const resizeHandler = () => {
			if (selectedNavOption !== null || selectedNavOptionPosition.x !== 0) {
				setSelectedNavOptionPosition({ x: 0 })
				setSelectedNavOption(null)
			}
		}
		document.addEventListener('resize', resizeHandler)

		return () => document.removeEventListener('resize', resizeHandler)
	}, [selectedNavOption, selectedNavOptionPosition.x])



	const onNavOptionHover = (navItemId: NavOption) => {
		if (selectedNavOption === navItemId)
			return

		let navOptionScreenPosition: ClientRect

		switch (navItemId) {
			case 'products':
				if (products === null || products.current === null)
					return
				navOptionScreenPosition = products.current.getBoundingClientRect()
				break
			case 'developers':
				if (developers === null || developers.current === null)
					return
				navOptionScreenPosition = developers.current.getBoundingClientRect()
				break
			case 'company':
				if (company === null || company.current === null)
					return
				navOptionScreenPosition = company.current.getBoundingClientRect()
				break
			default:
				return
		}

		setSelectedNavOptionPosition({ x: navOptionScreenPosition.left + navOptionScreenPosition.width / 2 })
		setSelectedNavOption(navItemId)
	}


	const onMouseLeave = () => {
		setSelectedNavOption(null)
		setSelectedNavOptionPosition({ x: 0 })
	}


	const onNavOptionClicked = (navItemId: NavOption) => {
		selectedNavOption !== null ? onMouseLeave() : onNavOptionHover(navItemId)
	}


	return (
		<header className={styles.header}>
			<div onMouseLeave={onMouseLeave} className={styles.navigationWrapper}>
				<nav className={styles.navigationItems}>
					<button
						onMouseEnter={() => onNavOptionHover('products')}
						onClick={() => onNavOptionClicked('products')}
						onFocus={() => onNavOptionHover('products')}
						onTouchStart={() => onNavOptionClicked('products')}
					>
						<p ref={products}>Produtos</p>
					</button>

					<button
						onMouseEnter={() => onNavOptionHover('developers')}
						onClick={() => onNavOptionClicked('developers')}
						onFocus={() => onNavOptionHover('developers')}
						onTouchStart={() => onNavOptionClicked('developers')}
					>
						<p ref={developers}>Desenvolvedores</p>
					</button>

					<button
						onMouseEnter={() => onNavOptionHover('company')}
						onClick={() => onNavOptionClicked('company')}
						onFocus={() => onNavOptionHover('company')}
						onTouchStart={() => onNavOptionClicked('company')}
					>
						<p ref={company}>Empresa</p>
					</button>
				</nav>

				<MenuContainer
					selectedNavOption={selectedNavOption}
					selectedNavOptionPosition={selectedNavOptionPosition}
				/>
			</div>
		</header>
	)
}

export default Header
