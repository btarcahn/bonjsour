/**
 * File: Sidebar.jsx
 * Author: Bach Tran
 * Year: 2019
 * License: GPL-3.0
 * This code was inspired from the tutorial, with the use of
 * react-bootstrap components instead of Material-UI:
 * https://dev.to/jsmanifest/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-36eo
 */
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './styles.css'

// all elements in the sidebar
const items = [
    {name: 'Home', label: 'home'},
    {name: 'Contribute', label: 'contribute'},
    {name: 'Query', label: 'query'},
    {name: 'Settings', label: 'settings'},
    {name: 'Language', label: 'language'},
    {name: 'About', label: 'about'}
];

function Sidebar() {
    return(
        <div className='Sidebar-left'>
            <ListGroup>
                {items.map(({ label, name, ...rest }) => (
                    <ListGroupItem button {...rest}>
                        {name}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}

export default Sidebar