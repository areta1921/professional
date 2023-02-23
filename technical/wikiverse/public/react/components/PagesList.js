import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, setClicked, clicked, detail, setDetail, tag, setTag}) => {
	// return <>
		{
			
			let arr =	pages.map((page, idx) => {
				return <Page page={page}  setClicked={setClicked}   clicked={clicked}  detail={detail} setDetail={setDetail}  key={idx} 
								tag={tag} setTag={setTag}/>
			})

			if(clicked) {
				 return <>{arr[0]}</>
			} 
			else {
				return <>{arr}</>
			}
		
		
		}
	// </>
} 
