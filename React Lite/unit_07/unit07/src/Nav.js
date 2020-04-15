import React from 'react';

class Nav extends React.Component {
    render() {
        let nav = this.props.nav;
        return (
            <nav>
                <ul>
                    {Object.keys(nav).map(elem => <li><a href="{nav[elem]}"> {elem}</a></li>)}
                </ul>
            </nav >
        );
    }
}

export default Nav;
