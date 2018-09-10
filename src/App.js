import React, { Component } from 'react';
import Header from './components/Header.js'
import Filter from './components/Filter.js'
import ProductList from './components/ProductList.js'
import ProductJson from './JSON/products.json'

class App extends Component {
  constructor(){
    super();
    this.state={
      productsList : ProductJson.products,
      filterSwitch : false,
      sizes: this.setSizeFilter()
    }
    this.productFilter = this.productFilter.bind(this);
  }
  setSizeFilter = function(){
      const sizesJson={
            "XS" : {
                "count":0,
                "id":[]
            },
            "S" : {
                "count":0,
                "id":[]
            },
            "M" : {
                "count":0,
                "id":[]
            },
            "L" : {
                "count":0,
                "id":[]
            },
            "XL" : {
                "count":0,
                "id":[]
            }
        }
        ProductJson.products.map((product)=>{
          if(product.size.length){
              product.size.map((size)=>{
                  sizesJson[size].count++;
                  sizesJson[size].id.push(product.productID);
              })
          }
      })
      return sizesJson;
  }
  productFilter(idList,checked){
    var p=[];
    ProductJson.products.map((product)=>{
      idList.map((id)=>{
        var flag=true
        if(this.state.filterSwitch){
          this.state.productsList.find((prod)=>{
            if(prod.productID === id){
              flag = false 
            }
          })
        }
        if(id === product.productID && flag){
          p.push(product);
        }
      })
    })
    this.setState((prevState, props)=>{
      return (prevState.filterSwitch) ? {productsList : prevState.productsList.concat(p)} : { productsList : p, filterSwitch : true };
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <Filter productFilter={this.productFilter} sizes={this.state.sizes}/>
            <ProductList products={this.state.productsList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
