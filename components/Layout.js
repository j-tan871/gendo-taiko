import React, { Component } from 'react';
import Navigation from './Navbar';
import Footer from './Footer';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Navigation />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;