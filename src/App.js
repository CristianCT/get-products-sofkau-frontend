import React, { Component } from 'react';
import { connect } from 'react-redux';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { addProductSuccess } from "./actions/CategoriesActions"
import Product from './components/Product';

const client = new W3CWebSocket("ws://localhost:8080/retrieve/myid");

class App extends Component {

  componentDidMount(){
    client.onopen = () => {
      console.log("WebSocket Connected");
    }

    // TODO: Comprobar el tipo de evento
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      this.props.dispatch(addProductSuccess(dataFromServer));
      console.log(dataFromServer);
    }
  }

  render() {
    return (
      <div className="App">
        <center><h1 className="display-1">PRODUCTS LIST</h1></center>
        <div className='products-list'>
        {this.props.categories.map(product => {
          return <Product key={product.productId} product={product} />
        })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
})

export default connect(mapStateToProps)(App);