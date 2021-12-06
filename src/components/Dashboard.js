import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard(props) {
	const [allMoods, setAllMoods] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000/allmoods')
		.then(response => {
			console.log(response);
			setAllMoods(response);
		})
	}, []);

	return (
		<>
			<h1>Dashboard</h1>
		</>
	)
}