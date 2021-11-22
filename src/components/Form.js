import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form(props) {
	const [sleep, setSleep] = useState(0);
	const [depressed, setDepressed] = useState(0);
	const [manic, setManic] = useState(0);
	const [anxious, setAnxious] = useState(0);
	const [irritable, setIrritable] = useState(0);
	const [psychotic, setPsychotic] = useState(false);
	const [therapy, setTherapy] = useState(false);
	const [notes, setNotes] = useState('');

	let navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		let date = new Date();
		date = date.toISOString();
		try {
			let response = await axios.post('http://localhost:8000/mood', {
				date, sleep, depressed, manic, anxious, irritable, psychotic, therapy
			})
			console.log(response);
			navigate('/dashboard');
		} catch(err) {
			console.log(err);
		}
	}
	return (
		<div className="form" onSubmit={ handleSubmit }>
			<form>
				<label htmlFor="sleep">Sleep
					<input 
						type="number" 
						name="sleep" 
						id="sleep" 
						step=".5" 
						defaultValue="0" 
						onChange = { e => setSleep(parseInt(e.target.value)) }
					/>
				</label>
				<br />
				<label htmlFor="depressed">Depressed
					<input 
						type="range" 
						name="depressed" 
						id="depressed" 
						max="3" 
						defaultValue="0" 
						onChange = { e => setDepressed(parseInt(e.target.value)) }
					/>
				</label>
				<br />
				<label htmlFor="manic">Manic
					<input 
						type="range" 
						name="manic" 
						id="manic" 
						max="3" 
						defaultValue="0"
						onChange = { e => setManic(parseInt(e.target.value)) }
					/>
				</label>
				<br />
				<label htmlFor="irritable">Irritable
					<input 
						type="range" 
						name="irritable" 
						id="irritable" 
						max="3" 
						defaultValue="0"
						onChange = { e => setIrritable(parseInt(e.target.value)) }
					/>
				</label>
				<br />
				<label htmlFor="anxious">Anxious
					<input 
						type="range" 
						name="anxious" 
						id="anxious" 
						max="3" 
						defaultValue="0"
						onChange = { e => setAnxious(parseInt(e.target.value)) }
					/>
				</label><br />
				<label htmlFor="psychotic">
					<input 
						type="checkbox" 
						name="psychotic" 
						id="psychotic" 
						max="3" 
						defaultValue="0"
						onChange = { e => setPsychotic(!psychotic) }
					/>
					Psychotic
				</label><br />
				<label htmlFor="therapy">
					<input 
						type="checkbox" 
						name="therapy" 
						id="therapy" 
						max="3" 
						defaultValue="0"
						onChange = { e => setTherapy(!therapy) }
					/>
					Therapy
				</label><br />
				<label htmlFor="notes">
					Notes
					<input 
						type="text" 
						name="notes" 
						id="notes" 
						max="3" 
						onChange = { e => setNotes(!notes) }
					/>
				</label>
				<input type="submit" value="Chart"/>
			</form>
		</div>
	)
}