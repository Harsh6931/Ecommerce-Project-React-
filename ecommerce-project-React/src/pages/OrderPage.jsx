import axios from 'axios'
import dayjs from 'dayjs'
import { useState, useEffect, Fragment } from 'react'
import './orders.css'
import { Header } from "../components/Header"
export function Order({ cart }) {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/orders?expand=products').then((response) => {
            setOrder(response.data);
        })
    }, [])
    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {order.map((order) => {
                        return (
                            <div key={order.id} className="order-container">

                                <div className="order-header">
                                    <div className="order-header-left-section">
                                        <div className="order-date">
                                            <div className="order-header-label">Order Placed:</div>
                                            <div>{dayjs(order.orderTimeMs).format('dddd, MMMM D')}</div>
                                        </div>
                                        <div className="order-total">
                                            <div className="order-header-label">Total:</div>
                                            <div>${(order.totalCostCents/100).toFixed(2)}</div>
                                        </div>
                                    </div>

                                    <div className="order-header-right-section">
                                        <div className="order-header-label">Order ID:</div>
                                        <div>{order.id}</div>
                                    </div>
                                </div>

                                <div className="order-details-grid">
                                    {order.products.map((Orderproduct) => {
                                        return (
                                            <Fragment key={Orderproduct.product.id}>
                                                <div className="product-image-container">
                                                    <img src={Orderproduct.product.image} />
                                                </div>

                                                <div className="product-details">
                                                    <div className="product-name">
                                                        {Orderproduct.product.name}
                                                    </div>
                                                    <div className="product-delivery-date">
                                                        Arriving on: {dayjs(Orderproduct.product.estimatedDeliveryTimeMs).format('MMMM D')}
                                                    </div>
                                                    <div className="product-quantity">
                                                        {Orderproduct.product.quantity}
                                                    </div>
                                                    <button className="buy-again-button button-primary">
                                                        <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                        <span className="buy-again-message">Add to Cart</span>
                                                    </button>
                                                </div>

                                                <div className="product-actions">
                                                    <a href="/trackings">
                                                        <button className="track-package-button button-secondary">
                                                            Track package
                                                        </button>
                                                    </a>
                                                </div>
                                            </Fragment>
                                        )
                                    })}

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}