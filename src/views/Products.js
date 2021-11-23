import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

import '../App.css'


class Products extends Component {
	state = {
		products: []
	}

	componentDidMount() {
		this.list();
	}


	list = () => {
		axios.get('https://localhost:5001/products').then(response => {
			// debugger
			const products = response.data;
			this.setState({ products })
		})
	}

	delete = (product) => {
		if (window.confirm("Deseja realmente exclóir?")) {
			axios.delete(`https://localhost:5001/products/${product.id}`).then(response => {
				this.list();
			});
		}


	}
	render() {


		return (
			<>
				<Header />
				<ul>
					{
						this.state.products.map(p => (
							/* por questão de semântica usa as tags de li msm, se achar conveniente coloca mais uma informações do produto e tals, tenta transformar esse <li> em um card deve ficar legal */
							<li>
								<Link key={p.id} to={`/products/${p.id}`}>{p.name}</Link>
								<Link to={`/product/update/${p.id}`}>Edit</Link>
								<button onClick={() => { this.delete(p) }}>Delete</button>
							</li>
						))
					}
				</ul>

				<Link className="btn-product" to={'/product/new'}>New Product</Link>

				<Footer />
			</>
		)
	}
}

export default Products;