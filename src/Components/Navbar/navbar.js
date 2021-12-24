import React from 'react';
import { Link } from 'react-router-dom';
import { Component }  from 'react';
import MenuItems from './menuItems';
import './navbar.css';


 class Navbar extends Component {
     state = { clicked:false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

     render(){
            return(
            
                <nav className='NavbarItems'>
                    <h1 className='Navbar-logo'>Shopping<i className="fas fa-shopping-bag"></i></h1>
                    <div className='Menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : ' fas fa-bars'}></i>

                    </div>
                    <ul className={this.state.clicked ? 'nav-menu actived' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                     <Link className={item.cName} to={item.url}> 
                                        {item.title}
                                     </Link> 
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            
            )
        }
    }

export default Navbar