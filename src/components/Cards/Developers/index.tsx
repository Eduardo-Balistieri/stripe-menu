import React, { forwardRef } from 'react'
import {
	MdImportContacts,
	MdViewQuilt,
	MdExtension,
	MdChat,
	MdCloudCircle
} from 'react-icons/md'

import styles from './styles.module.css'


const DevelopersCard = forwardRef<HTMLElement>((props, developersRef) => (
	<section className={styles.card} ref={developersRef}>
		<div className={styles.mainActionsWrapper}>

			<header className={styles.header}>
				<h5><MdImportContacts /> Documentação</h5>
				<p>Comece a integrar os produtos e ferramentas da Stripe</p>
			</header>

			<div className={styles.mainActions}>
				<ul>
					<li><h5>Comece já</h5></li>
					<li><p>Checkout pré-integrado</p></li>
					<li><p>Bibliotecas e SDKs</p></li>
					<li><p>Plugins</p></li>
					<li><p>Amostras de código</p></li>
				</ul>

				<ul>
					<li><h5>Guias</h5></li>
					<li><p>Aceitar pagamentos online</p></li>
					<li><p>Gerenciar assinaturas</p></li>
					<li><p>Enviar pagamentos</p></li>
					<li><p>Configurar parametros presenciais</p></li>
				</ul>
			</div>
		</div>

		<footer className={styles.footer}>
			<div>
				<p><MdViewQuilt /> Referência completa sobre a API</p>
				<p><MdChat /> Suporte</p>
			</div>
			<div>
				<p><MdCloudCircle /> Status da API</p>
				<p><MdExtension /> Changelog da API</p>
			</div>
		</footer>
	</section>
))

export default DevelopersCard