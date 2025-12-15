import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TeamProfiles from "@site/src/components/TeamProfiles";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<div className={styles.heroContent}>
					<img
						src="/images/logo.jpg"
						alt="Pieskovisko Logo"
						className={styles.heroLogo}
					/>
					<div className={styles.heroText}>
						<Heading as="h1" className="hero__title">
							{siteConfig.title}
						</Heading>
						<p className="hero__subtitle">
							Project TARS - Technological Assistance for Reliable Safety
						</p>
					</div>
				</div>
				{/* <div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/"
					>
						Zápisnice
					</Link>
				</div> */}
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Oficiálna stránka tímu Pieskovisko pre projekt TARS"
		>
			<HomepageHeader />
			<main>
				<TeamProfiles />
			</main>
		</Layout>
	);
}
