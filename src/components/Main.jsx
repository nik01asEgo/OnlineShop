import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import Help from '../pages/Help.jsx';
import HowToBuy from '../pages/HowToBuy.jsx';
import OnBonusClub from '../pages/OnBonusClub.jsx';
import PointsOfIssue from '../pages/PointsOfIssue.jsx';
import Warranty from '../pages/Warranty.jsx';
import Business from '../pages/Business.jsx';
import Location from '../pages/Location.jsx';
import { useDispatch } from 'react-redux';

export default function Main() {
    const dispatch = useDispatch();

    const addBookMark = () => {
        dispatch({ type: "ADD_BOOK_MARK", payload: 1 })
    };
    const delBookMark = () => {
        dispatch({ type: "DEL_BOOK_MARK", payload: 1 })
    };



    return (

        <div>
            <h1>Main</h1>
            <div className="bookmark">
                <button onClick={() => addBookMark()}>Добавить закладку</button>
                <button onClick={() => { delBookMark() }}>Удалить закладку</button>
            </div>
            <Routes>
                <Route path="/" element={<HowToBuy />} />
                <Route path="/OnBonusClub" element={<OnBonusClub />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/Warranty" element={<Warranty />} />
                <Route path="/PointsOfIssue" element={<PointsOfIssue />} />
                <Route path='/Business' element={<Business />} />
                <Route path='/Location' element={<Location />} />
            </Routes>
        </div>
    );
};
