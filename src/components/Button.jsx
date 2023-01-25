import React from 'react';
import { Link } from 'react-router-dom';
import '../less/button.less';

export default function Button({ size = "", color = "", link, icon = "" }) {   //size: smallest===50px, smaller===75px, small===100px, medium===150px, lage===250px

    const link = "/" + { link }
    return (
        <div className={`btn ${size} ${color}`}>
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