import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.cardWrapper}>
			<Card title='Welcome to Awazdo' icon='logo'>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex
					reprehenderit laudantium illo delectus, dicta possimus earum? Deserunt
					hic minus, corrupti, sit vitae odit illo inventore rem, quis mollitia
					eum!
				</p>

				<div>
					<Button text='Get your username' />
				</div>

				<div className={styles.signinWrapper}>
					<span className={styles.hasInvite}>Have an invite test ?</span>
					<Link to='/login'>Sign in</Link>
				</div>
			</Card>
		</div>
	);
}

export default Home;
