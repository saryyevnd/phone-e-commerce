import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withProductConsumer from './../HOC/withProductConsumer';
import Button from './Button';



class Details extends Component {
    render() {
        const { id, company, img, info, price, title, inCart } = this.props.value.detailProduct
        return (
            <div className="container py-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>
                            {title}
                        </h1>
                    </div>
                </div>
                {/* end title */}
                {/* product info */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className='img-fluid' alt='product' />
                    </div>
                    {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model: {title}</h2>
                        <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                            made by: <span className='text-uppercase'>
                                {company}
                            </span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price: <span>
                                    $
                                </span>
                                {price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about product
                        </p>
                        <p className="text-muted lead">
                            {info}
                        </p>
                        {/* button */}
                        <Link to='/'>
                            <Button className='btn-warning'>
                                Back To Products
                            </Button>
                        </Link>
                        <Button
                            cart="yellow"
                            onClick={() => {
                                this.props.value.addToCart(id);
                                this.props.value.openModal(id);
                            }}
                            disabled={inCart ? true : false}
                        >
                            {inCart ? "inCart" : "add to cart"}
                        </Button>
                    </div>
                </div>
                {/* end of product info */}
            </div>
        )
    }
}







export default withProductConsumer(Details)