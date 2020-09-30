import React from 'react';

function NavigationMenu (props) {
    const {closeMenu} = props
    return (
        <div>
            <span className="font-bold">The Menu</span>
            <ul>
                <li><Link to="/" className="text-blue-500 py-3 border-t border-b block" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" className="text-blue-500 py-3 border-t border-b block" onClick={closeMenu}>About</Link></li>
            </ul>
        </div>
    )
}

export default NavigationMenu