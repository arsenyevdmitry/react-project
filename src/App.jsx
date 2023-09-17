import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/Button/JournalItem/Journalitem';
import CardButton from './components/CardButton/CardButton';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
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

	const inputChange  = (event) => {
		console.log(event.target.value);
	};

	return (
		<div className='app'>

		  <LeftPanel>
				<Header/>
				<JournalAddButton/>
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
				<input type='text' onChange={inputChange}/>
		  </body>
		  
		</div>
	);
}


export default App;