import { FC, Fragment, useState } from "react"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import './header.scss'

const Header: FC = () => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <Fragment>
            <header className="header">
                <div className="container">
                    <div className="header__top">
                        <div className="container1 header__nav">
                            <div className="header__nav__left"><FaPhoneAlt /> <span>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </span></div>
                            <div className="header__nav__left"><MdOutlineExitToApp /> <span>Войти / Регистрация</span></div>
                        </div>
                    </div>
                    <div className="header__bottom">
                        <div className="container1 header__bottom__list">
                            <h3 className="header__logo">PORTEN</h3>
                            <ul className={`header__list ${show ? 'show' : ''}`}>
                                <li className="header__close" onClick={(): void => setShow((prev: boolean) => false)}><IoCloseSharp /></li>
                                <li className="header__item"><span>Понравилось</span></li>
                                <li className="header__item"><span>личный кабинет</span></li>
                                <li className="header__item"><span>настройки</span></li>
                                <li className="header__item"><IoCartOutline /></li>
                                <li className="header__item"><CiSearch /></li>
                            </ul>
                            <div className="header__bar" onClick={(): void => setShow((prev: boolean) => !prev)}><FaBars /></div>
                        </div>
                    </div>
                </div>
            </header>
            <div onClick={(): void => setShow((prev: boolean) => false)} className={`overlay ${show ? 'show__overlay' : ''}`}></div>
        </Fragment>
    )
}

export default Header