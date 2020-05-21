import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const LinkChild = (props) => {
    if(props.id !== null){
        return (
            <>
            <Link 
            href="/country/[countryId]"
            as={`${props.href}`}
            >
            <a className="nav-item-drop">
                {props.label}
            </a>
            </Link>
            </>
        )
    }else{
        return (
            <>
            <Link href={props.href} >
            <a className="nav-item-drop">
                {props.label}
            </a>
            </Link>
            </>
        )
    }
};


export default LinkChild;
