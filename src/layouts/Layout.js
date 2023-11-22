import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../layouts/Container';

const Layout = (props) => {
    const children = props.children
    return (
        <div>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    );
}

export default Layout;