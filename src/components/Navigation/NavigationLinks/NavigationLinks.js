import React from 'react';

import './NavigationLinks.css';
import NavigationLink from './NavigationLink/NavigationLink';

const navigationLinks = props => {
    let links = (
        <>
            <NavigationLink link="/">Home</NavigationLink>
            <NavigationLink link="/signup">Sign up</NavigationLink>
            <NavigationLink link="/signin">Sign in</NavigationLink>
            <NavigationLink mobileOnly link="/info">Info</NavigationLink>
        </>
    );

    if (props.isAuth) {
        links = (
            <>
                <NavigationLink link="/">New note</NavigationLink>
                <NavigationLink link="/note">Note</NavigationLink>
                <NavigationLink link="/diary">Diary</NavigationLink>
                <NavigationLink mobileOnly link="/info">Info</NavigationLink>
                <NavigationLink link="/logout">Logout</NavigationLink>
            </>
        );
    };
    
    return (
        <ul className='NavigationLinks'>
            {links}
        </ul>
    );
};

export default navigationLinks;