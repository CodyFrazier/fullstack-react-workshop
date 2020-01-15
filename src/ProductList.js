//This is currently not being used.

import React from 'react';
import data from './App.js';

const { products } = data;

function ProductList(){
	console.log('hi');
	return (
		<div>
			<h2>Product List</h2>
			<ul>
				{ products.map( (product,idx) => {
					return ( <li key = { idx }>{ product.name }</li> )
				}) }
			</ul>
		</div>
	)
}

export default ProductList;