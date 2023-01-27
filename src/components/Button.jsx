import React from 'react';
import { Link } from 'react-router-dom';
import '../less/button.less';

export default function Button({ color = "", link, icon = "" }) {

    const link = "/" + { link }
    return (
        <div className={`btn ${color}`}>
            {icon ? (<Link to={link}>

                <span className="material-symbols-outlined">
                    {icon}
                </span>
            </Link>) : (<Link to={link}>
            </Link>)
            }
        </div>
    )

}