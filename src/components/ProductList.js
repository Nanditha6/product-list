import React from 'react';
import Product from './Product.js'

class ProductList extends React.Component {
    render(){
        const getProducts = function(a){
            var p = [];
            a.map((product,key)=>{
                p.push(<Product key={key} title={product.title} detail={product.detail} price={product.price} offer={product.offer} image={product.image} size={product.size} productId={product.productID}/>)
            })
            return p;
        }
        return(
            <div className="col-lg-10 col-md-10 col-sm-10">
                {getProducts(this.props.products)}
            </div>
        )
    }
}

export default ProductList;