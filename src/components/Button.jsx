import React from 'react';
import { Link } from 'react-router-dom';
import '../less/button.less';

export default function Button({ color, link, icon }) {

    let pathLink = "/" + link;
    return (
        <div className={`btn ${color}`}>
            {icon ? (<Link to={pathLink}>

                <span className="material-symbols-outlined">
                    {icon}
                </span>
            </Link>) : (<Link to={pathLink}>
            </Link>)
            }
        </div>
    )
}