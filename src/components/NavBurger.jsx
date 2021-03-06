import React from 'react'
import { slide as NavMenu } from 'react-burger-menu'
import { withSiteData, Link } from 'react-static'

var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '30px',
        '@media (minWidth: 576px)': {
            display: 'none'
        }
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: 'rgba(0, 0, 0, 0.8)',
        fontSize: '1.5em',
        height: '100%'
    },
    bmMenuWrap: {
        top: '0'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '2em',
        letterSpacing: '1px',
        textAlign: 'center',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const Burger = () => (
    <NavMenu right styles={styles}>
        <Link to="/" className="menu-item" >Home</Link>
        <Link to="/about" className="menu-item" >About Us</Link>
        <Link to="/contact" className="menu-item">Contact</Link>
        <Link to="/assessment" className="menu-item">Get a free assessment</Link>
    </NavMenu>

);

export default Burger;
