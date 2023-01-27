import React from 'react';
import { Link } from "react-router-dom";
import '../less/header.less';
import SearchForm from './SearchForm.jsx';
import logo from '../assets/image/logo_vector.svg'
import { shallowEqual, useSelector } from 'react-redux';

export default function Header() {
    const bookmark = useSelector(state => {
        return state.bookmark.count
    }, shallowEqual);
    return (
        <div className='header'>
            <div className='header__menu_top'>
                <div className='header__location-link'>
                    <Link to='/Location'>
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        Иваново
                    </Link>
                </div>
                <div className='header__links-block'>

                    <div>
                        <Link to="/">Как купить</Link>
                    </div>
                    <div><Link to="/OnBonusClub">Клуб ON-бонус</Link>
                    </div>
                    <div><Link to="/Help">Помощь</Link>
                    </div>
                    <div><Link to="/Warranty">Гарантия</Link>
                    </div>
                    <div><Link to="/PointsOfIssue">Пункты выдачи</Link>
                    </div>
                    <div className='header__business-link'>
                        <Link to="/Business">Для бизнеса</Link>
                    </div>

                </div>
            </div>
            <div className='header__menu_bottom'>
                <div className='logo'>
                    <img src={logo} className='logo__image' />
                </div>
                <div className='btns'>
                    <div className='btns__wrapper'>
                        <div className="btns__btn btns__btn_blue">
                            <Link to="/Catalog">
                                <span className="material-symbols-outlined">
                                    equalizer
                                </span>
                                Каталог
                            </Link>

                        </div>
                        <div className="btns__btn btns__btn_orange">
                            <Link to="/Discount" >
                                <span className="material-symbols-outlined">
                                    savings
                                </span>
                                Скидки
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='search'>
                    <SearchForm className='search__form' />
                </div>
                <div className='btns__reg'>
                    <div className='btns__reg_wrapper'>
                        <div className="btns__reg_btn btns__reg_btn-login">
                            <Link to="/Login">
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                            </Link>
                        </div>
                        <div className="btns__reg_btn btns__reg_btn-registration">
                            <Link to="/Registration">
                                <span className="material-symbols-outlined">
                                    shopping_basket
                                </span>
                                <pre>300 Р <span> при регистрации</span></pre>
                            </Link>
                        </div>
                        <div className="btns__reg_btn btns__reg_btn-book-mark">
                            <Link to="/BookMark">
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                                {bookmark}
                            </Link>
                        </div>
                        <div className="btns__reg_btn btns__reg_btn-basket">
                            <Link to="/Basket">
                                <span className="material-symbols-outlined">
                                    shopping_basket
                                </span>
                                0
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}