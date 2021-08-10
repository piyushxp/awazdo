import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ title, icon, children }) {
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.headingWrapper}>
					<img src={`/images/${icon}.png`} alt='' />
					<p className={styles.heading}>{title}</p>
				</div>
				{children}
			</div>
		</div>
	);
}

export default Card;
