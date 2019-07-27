import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Main extends Component {

  state = {
    product: [],
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async ()=>{
    const response = await api.get('/products');

    this.setState({product:response.data.docs});
  }

  render() {
    return (
      <div className='product-list'>
          {this.state.product.map(product => (
            <h2 key={product._id}>{product.title}</h2>
          ))}
      </div>
    );
  }
}
