import React, { Component } from 'react'
import { storeProducts } from '../data'
import withProductConsumer from '../HOC/withProductConsumer'
import Product from './Product'
import Title from './Title'


export class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: storeProducts
        }
    }
    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name='our' title='products' />
                        <div className="row" />
                    </div>
                </div>
            </>
        )
    }
}

export default withProductConsumer(ProductList)
