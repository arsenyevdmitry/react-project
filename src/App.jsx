import './App.css';

import JournalItem from './components/Button/JournalItem/Journalitem';
import CardButton from './components/CardButton/CardButton';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты',
			date: new Date()
		},
		{
			title: 'Поход в горы',
			text: 'Думал, что очень много времени',
			date: new Date()
		}
	];

	const [inputData, setInputData] = useState('');
	

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<body>
				 
			</body>
		</div>
	);
}

export default App;
