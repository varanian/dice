import React from 'react';
import { BoxCard } from '../box-card/box-card.component';
import './box-container.style.css';

export const BoxContainer = (props) => (

	<div className= 'box-container'> 

	 { props.testArray.map( (testArray, index) => ( 

	 	<BoxCard key={ index } testArray= { testArray }/>  

	 ))}

	</div>
);

