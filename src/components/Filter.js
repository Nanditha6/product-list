import React from 'react';

class FilterLabel extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        this.props.productFilter(this.props.productList, e.target.checked);
    }
    render(){
        return(
            <div><label className="filter-custom"><input type="checkbox" value="true" onClick={this.handleClick}/> {this.props.size} <span>({this.props.quantity})</span></label></div>
        )
    }
}

class Filter extends React.Component {
    constructor(){
        super();
        this.setFilter = this.setFilter.bind(this);
    }
    setFilter(){
        var key, fl=[];
        for(key in this.props.sizes){
            fl.push(<FilterLabel key={key} size={key} quantity={this.props.sizes[key].count} productList={this.props.sizes[key].id} productFilter={this.props.productFilter}/>);
        }
        return fl;
    }
    render(){
        return(
        <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="filter-title">SIZE</div>
                {this.setFilter()}
            </div>
        </div>
        )
    }
}

export default Filter;