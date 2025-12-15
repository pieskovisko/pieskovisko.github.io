import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type TeamMember = {
	name: string;
	description: string;
	photo: string;
};

const TeamMembers: TeamMember[] = [
	{
		name: "Adam Kačmár",
		description: "Focuses on machine learning, artificial intelligence, and computer vision. Has experience with frontend, software testing, and leading small teams of up to 10 people.",
		photo: require("@site/static/images/adam-kacmar.jpg").default
	},
	{
		name: "Milan Marcinčo",
		description: "Full-stack developer with primary focus on frontend. Has hobby experience with Linux, DevOps, application architecture design, iOS development, hardware and embedded programming.",
		photo: require("@site/static/images/milan-marcinco.jpg").default
	},
	{
		name: "Martin Hnatko",
		description: "Enjoys containerization, CI/CD, UML, UX, has problem-solving skills and frontend basics.",
		photo: require("@site/static/images/martin-hnatko.jpg").default
	},
	{
		name: "Dávid Bunca",
		description: "His profession is developing applications for Apple operating systems. He also has knowledge in server software solutions development as well as IoT infrastructure (bachelor's thesis).",
		photo: require("@site/static/images/david-bunca.png").default
	},
	{
		name: "Matúš Vranka",
		description: "Since high school, he has been working with web technologies, with which he also has professional experience. His knowledge ranges from frontend through backend to database systems, DevOps together with containerization technologies and IaaS.",
		photo: require("@site/static/images/matus-vranka.png").default
	},
	{
		name: "Dušan Havlík",
		description: "Since childhood, he has been involved in low-level programming of resource-limited embedded devices, processor design and development of bare-metal applications and operating systems. He also has knowledge from web development - mainly databases and frontend with focus on graphics programming through WebGL. In his free time, he designs compilers and develops games.",
		photo: require("@site/static/images/dusan-havlik.png").default
	},
	// {
	// 	name: "Lenka Chorvatovičová",
	// 	description: "At work, she focuses on frontend, but would like to expand her horizons and work on backend aspects as well. She also has experience with agile development, design and machine learning focused on medical purposes (bachelor's project - QSAR models)."
	// }
];

function TeamMemberCard({ name, description, photo }: TeamMember) {
	return (
		<div className={clsx("col col--4", styles.teamMemberCard)}>
			<div className={styles.card}>
				<div className={styles.avatar}>
					<img src={photo} alt={name} className={styles.avatarImage} />
				</div>
				<div className={styles.content}>
					<Heading as="h3" className={styles.memberName}>{name}</Heading>
					<p className={styles.memberDescription}>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default function TeamProfiles(): ReactNode {
	return (
		<section className={styles.teamSection}>
			<div className="container">
				<div className="text--center margin-bottom--lg">
					<Heading as="h2">Our Team</Heading>
				</div>
				<div className="row">
					{TeamMembers.map((member, idx) => (
						<TeamMemberCard key={idx} {...member} />
					))}
				</div>
			</div>
		</section>
	);
}