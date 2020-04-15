import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h1>{this.props.footerHedaer}</h1>
                <ul>
                    {this.props.phones.map(elem => <li>{elem}</li>)}
                </ul>
                <p>{this.props.addres.map(elem => <span> {elem}</span>)}</p>
            </footer>
        );
    }
}

export default Footer;
