import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [detail, setDetail] = useState({});
	const [tag, setTag] = useState([]);
	// console.log(pages)
	// console.log(clicked);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		
		<main >	
      <h1 className={clicked?'clicked':''}>WikiVerse</h1>
			<h2 className={clicked?'clicked':''}>An interesting 📚</h2>
			<div><PagesList pages={pages} setClicked={setClicked} clicked={clicked} detail={detail} setDetail={setDetail}
							tag={tag} setTag={setTag}
			/>
			</div>
			{/* <div className={!clicked?'clicked':''}>elfklemflwemfkwemflkwemfkl</div> */}
		</main>
		
		
		  
	)
}