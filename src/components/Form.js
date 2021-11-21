export default function Form(props) {
	return (
		<div className="form">
			<form>
				<label htmlFor="sleep">Sleep
					<input type="number" name="sleep" id="sleep" step=".5" defaultValue="0" />
				</label>
				<br />
				<label htmlFor="depressed">Depressed
					<input type="range" name="depressed" id="depressed" max="3" defaultValue="0" />
				</label>
				<br />
				<label htmlFor="manic">Manic
					<input type="range" name="manic" id="manic" max="3" defaultValue="0"/>
				</label>
				<br />
				<label htmlFor="irritable">Irritable
					<input type="range" name="irritable" id="irritable" max="3" defaultValue="0"/>
				</label>
				<br />
				<label htmlFor="anxious">Anxious
					<input type="range" name="anxious" id="anxious" max="3" defaultValue="0"/>
				</label><br />
				<label htmlFor="psychotic">
					<input type="checkbox" name="psychotic" id="psychotic" max="3" defaultValue="0"/>
					Psychotic
				</label><br />
				<label htmlFor="therapy">
					<input type="checkbox" name="therapy" id="therapy" max="3" defaultValue="0"/>
					Therapy
				</label>

			</form>
		</div>
	)
}