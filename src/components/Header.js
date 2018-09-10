import React from 'react';

class Banner extends React.Component {
  render(){
    return(<div className="banner"></div>)
  }
}

class Header extends React.Component {
  render(){
    return(
      <div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Link</a>
    </li>
    <li className="nav-item">
       <form className="form-inline">
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
    </li>   
  </ul>
</nav>
<Banner/>
</div>
)
  }
}

export default Header;