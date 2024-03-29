import React, { Component } from 'react'
import withProductConsumer from '../HOC/withProductConsumer'
import Product from './Product'
import Title from './Title'


export class ProductList extends Component {
    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name='our' title='products' />
                        <div className="row">
                            {this.props.value.products.map(product => {
                                return (
                                    <Product
                                        key={product.id}
                                        product={product}
                                        handleDetail={this.props.value.handleDetail}
                                        addToCart={this.props.value.addToCart}
                                        openModal={this.props.value.openModal}
                                        closeModal={this.props.value.closeModal}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withProductConsumer(ProductList)
