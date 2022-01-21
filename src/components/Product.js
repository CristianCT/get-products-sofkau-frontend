import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
        <div className="card">
            <img srcSet={ this.props.product.image } src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/300px-Imagen_no_disponible.svg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ this.props.product.name }</h5>
                <p className="card-text">{ this.props.product.description }</p>
                <div className="footer-card">
                    <a href={ this.props.product.link?this.props.product.link:"/" } target="_blank" rel='noreferrer' className="btn btn-outline-info">Ver detalles</a>
                    <h5>${ this.props.product.price }</h5>
                </div>
            </div>
        </div>
    );
  }
}
