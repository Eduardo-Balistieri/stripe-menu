import React, { forwardRef } from 'react'

import {
	GiJesterHat,
	GiMechaHead,
	GiOlive,
	GiBrute,
	GiRefinery,
	GiWhaleTail,
	GiIsland,
	GiAtlas,
	GiDropletSplash
} from 'react-icons/gi'

import styles from './styles.module.css'


const ProductsCard = forwardRef<HTMLElement>((props, productsRef) => (
	<section className={styles.card} ref={productsRef}>
		<div>
			<ul className={styles.actions}>
				<li><h5>Pagamentos</h5></li>
				<li>
					<div className={styles.icons}><GiJesterHat /></div>
					<div className={styles.description}>
						<p>Payments</p>
						<p>Pagamentos online</p>
					</div>
				</li>
				<li>
					<div className={styles.icons}><GiMechaHead /></div>
					<div className={styles.description}>
						<p>Terminal</p>
						<p>Pagamentos presenciais</p>
					</div>
				</li>
				<li>
					<div className={styles.icons}><GiOlive /></div>
					<div className={styles.description}>
						<p>Connect</p>
						<p>Pagamentos para plataformas</p>
					</div>
				</li>
				<li>
					<div className={styles.icons}><GiBrute /></div>
					<div className={styles.description}>
						<p>Billing</p>
						<p>Assinaturas e faturamento</p>
					</div>
				</li>
			</ul>

			<ul className={styles.actions}>
				<li><h5>Repases</h5></li>
				<li>
					<div className={styles.icons}><GiRefinery /></div>
					<div className={styles.description}>
						<p>Payouts</p>
						<p>Repasses programáticos</p>
					</div>
				</li>
				<li>
					<div className={styles.icons}><GiWhaleTail /></div>
					<div className={styles.description}>
						<p>Issuing</p>
						<p>Criação de cartão</p>
					</div>
				</li>
			</ul>
		</div>

		<div>
			<ul className={styles.actions}>
				<li><h5>Operações de negócio</h5></li>
				<li>
					<div className={styles.icons}><GiIsland /></div>
					<div className={styles.description}>
						<p>Radar</p>
						<p>Gerenciamento de fraudes e riscos</p>
					</div>
				</li>
				<li>
					<div className={styles.icons}><GiDropletSplash /></div>
					<div className={styles.description}>
						<p>Sigma</p>
						<p>Relatórios personalizados</p>
					</div>
				</li>
				<li>
					<div className={styles.icons}><GiAtlas /></div>
					<div className={styles.description}>
						<p>Atlas</p>
						<p>Incorporação de startups</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
))

export default ProductsCard