import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'


function CartScreen({match, location, history}) {
    const productId = match.params.id
    const qty = location.seach? Number(location.search.split('=')[1]):16

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length===0 ?(
                    <Message variant='info'>
                        Your Cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ):(
                    <ListGroup variant='flush'>
                        {cartItems.map(item=>(
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={3}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                         &#8377;{item.price}
                                    </Col>

                                    <Col md={3}>
                                    <Form.Control as="select" value={item.qty}
                                        onChange={(e)=> dispatch(addToCart(item.product, e.target.value))}>
                                            {
                                                [...Array(item.countInStock).keys()].map((x)=>(
                                                    <option key={x=1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }

                                    </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>

            </Col>
        </Row>
    )
}

export default CartScreen
