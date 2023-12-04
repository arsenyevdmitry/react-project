import './JournalList.css';
import { useState } from 'react';

function JournalList({ children }) {

	return (
		<div className='journal-list'>
			{children}
		</div>
   
	);
}

export default JournalList;