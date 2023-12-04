import './Header.css';

function JournalForm() {
	const [inputData, setInputData] = useState('');
	

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};
	return (
		<>
			<input type="text" value={inputData} onChange={inputChange} />
		</>
	);
}

export default JournalForm;