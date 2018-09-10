import React from 'react';

class Product extends React.Component {
    render(){
        return(
            <div className="col-lg-3 col-md-3 col-sm-3 float-left">
                <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-11 col-md-11 col-sm-11">
                    <div className="row product-image">
                        <img src={this.props.image} alt="product" height="280px" width="100%"/>
                        <div className="col-md-12 all-detail">
                            <div className="product-title">{this.props.title}</div>
                            <div className="product-detail">{this.props.detail}</div>
                            <div className="product-price">{this.props.price} {this.props.offer?<span>({this.props.offer})</span>:''}</div>
                            <button type="button" className="col-md-12 btn my-btn fixed-bottom">Add To Bag</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;