import React from 'react'
import { Card } from 'react-bootstrap'

function Product({product}) {
    return (
     <Card className="my-3 py-3 px-2 rounded">
         <a href={`/product/${product._id}`}>
             <Card.Img src={product.image}/>
         </a>
         <Card.Body>
          <a href={`/product/${product._id}`}>
             <Card.Title as="div">
                 <strong>{product.name}</strong>
             </Card.Title>
          </a>
            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>
    
            <Card.Text as="h3">
                <strong>&#8377;{product.price}</strong>
            </Card.Text> 
            <Card.Text as="h5">
                 <s>&#8377;{product.original_price}</s>
            </Card.Text>
   
         </Card.Body>
     </Card>
    )
}

export default Product
