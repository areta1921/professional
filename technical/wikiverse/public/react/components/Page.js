import React from 'react';
import apiURL from '../api';

export const Page = (props) => {
  // console.log(props);
  const getDetail = async (detail) => {
    // const res = await fetch(`${apiURL}/wiki/${detail.slug}`);
		// const data = await res.json();
    // console.log(detail);
    props.setClicked(true);
    props.setDetail(detail);
    const res  = await fetch(`${apiURL}/wiki/${detail.slug}`);
		const data = await res.json();
    let arr    = data.tags.map(tag =>   <p>{tag.name}</p>);
    props.setTag(arr);
    props.setDetail(data);
    console.log('here',data);
  }
  
  
  
  //return <>
    
    {
        if (!props.clicked) {
            
         return <h3 onClick={
                    () => {
                      getDetail(props.page);
                    }
                  }>
                    {props.page.title}
                  </h3>
            
                  
          }  else {

            

        return  <div>
                <p>title: {props.detail.title} </p>
                <p>Author: {props.detail.author.name} </p>
                <p>Published: {props.detail.createdAt}</p>
                <p>Content: {props.detail.content}</p>
                <div>tags:{props.tag} </div>
                <button>Back to Wiki List</button>
        
        
          </div>
          }

  }
  //</>


} 
	