import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data.js'
import { copyObject, indexOfObject } from './Helpers/copyObject'
export const ProductContext = React.createContext();



class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: storeProducts,
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => this.setState(() => ({ products: JSON.parse(JSON.stringify(storeProducts)) }));
    handleDetail = id => {
        const product = this.getItemById(id)
        this.setState(() => {
            return { detailProduct: product }
        })
    }
    addToCart = (id) => {
        let tepmProducts = copyObject(this.state.products)
        const index = indexOfObject(tepmProducts, id)
        const product = copyObject(this.getItemById(id));
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price
        tepmProducts[index] = product
        this.setState(() => {
            return {
                products: tepmProducts,
                cart: [...this.state.cart, product]
            }
        })
    }
    getItemById = id => {
        const product = copyObject(this.state.products).find(item => item.id === id)
        return product
    }
    openModal = id => {
        const product = this.getItemById(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }
    increment = id => {
        console.log("This increment")
    }
    decrement = id => {
        console.log('this is decrement')
    }
    removeItem = id => {
        console.log("this is remove item")
    }
    clearCart = id => {
        console.log("cart was cleared")
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



export const ProductConsumer = ProductContext.Consumer
export default ProductProvider