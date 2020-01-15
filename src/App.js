import React from 'react';
import data from './data.js';
import './App.css';

const { users, products, companies } = data;

console.log('users:', users);
console.log('products:', products);
console.log('companies:', companies);

function App() {
  return (
    <div>
		<div>
			<h2>Product List</h2>
			<ul>
				{ products.map( (product,idx) => {
					return ( <li key = { idx }>{ product.name }</li> )
				}) }
			</ul>
		</div>
		<div>
			<h2>User List</h2>
			<ul>
				{ users.map( (user,idx) => {
					return ( <li key = { idx }>{ user.name }</li> )
				}) }
			</ul>
		</div>
		<div>
			<h2>Company List</h2>
			<ul>
				{ companies.map( (company,idx) => {
					return ( <li key = { idx }>{ company.name }</li> )
				}) }
			</ul>
		</div>
    </div>
  );
}

export default App;
