import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className="section footer-classic content-dark bg-image"
                style={{ background: "#2d3246", color: "#fff" }}>
                <p>CopyRight</p>
            </footer>
        );
    }
}

export default Footer;