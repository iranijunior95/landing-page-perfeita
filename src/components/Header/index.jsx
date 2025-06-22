import { useEffect, useState } from "react";
import ButtonMenu from "../ButtonMenu";
import "./style.css";

function Header() {
    const [linkDropdown, setLinkDropdown] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    function clickDropdown(event) {
        event.preventDefault();
        setLinkDropdown(!linkDropdown);
    }

    function clickMobileMenu() {
        setMobileMenu(!mobileMenu);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 850) {
                setMobileMenu(false);
            }

            if(window.innerWidth < 850) {
                setLinkDropdown(false);
            }
        });
    }, []);

    useEffect(() => {
        mobileMenu ? document.body.classList.add('menu-open') : document.body.classList.remove('menu-open');
    }, [mobileMenu]);

    return (
        <header>
            <nav>
                <a 
                    href="#"
                    className="link-logo"
                >
                    <img src="/public/img/logo.png" alt="logo" />
                </a>

                <div className="menu-left">
                    <ul>
                        <li>
                            <a href="#">Início</a>
                        </li>

                        <li>
                            <a href="#">Sobre</a>
                        </li>

                        <li className="li-dropdown">
                            <a 
                                href="#"
                                className="link-dropdown"
                                onClick={clickDropdown}
                            >
                                Serviços
                                <img src="/public/img/Chevron_Down.png" alt="arrow down" />
                            </a>

                            <div 
                                className={linkDropdown ? "div-dropdown active" : "div-dropdown"}
                            >
                                <ul>
                                    <li>
                                        <a href="#">Link 01</a>
                                    </li>

                                    <li>
                                        <a href="#">Link 02</a>
                                    </li>

                                    <li>
                                        <a href="#">Link 03</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#">Contatos</a>
                        </li>
                    </ul>

                    <div className="button-menu">
                        <ButtonMenu typeButton="login">Login</ButtonMenu>
                        <ButtonMenu typeButton="registrar">Registrar</ButtonMenu>
                    </div>
                </div>

                <button 
                    type="button"
                    className="btn-mobile"
                    onClick={clickMobileMenu}
                >
                   <img src="/public/img/icon_menu.png" alt="" /> 
                </button>
            </nav>

            <div 
                className={mobileMenu ? "menu-mobile active" : "menu-mobile"}
            >
                <div 
                    className={mobileMenu ? "menu-mobile-container active" : "menu-mobile-container"}
                >
                    <ul>
                        <li>
                            <a href="#">Início</a>
                        </li>

                        <li>
                            <a href="#">Sobre</a>
                        </li>

                        <li className="li-dropdown">
                            <a 
                                href="#"
                                className="link-dropdown"
                                onClick={clickDropdown}
                            >
                                Serviços
                                <img src="/public/img/Chevron_Down.png" alt="arrow down" />
                            </a>

                            <div 
                                className={linkDropdown ? "div-dropdown active" : "div-dropdown"}
                            >
                                <ul>
                                    <li>
                                        <a href="#">Link 01</a>
                                    </li>

                                    <li>
                                        <a href="#">Link 02</a>
                                    </li>

                                    <li>
                                        <a href="#">Link 03</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#">Contatos</a>
                        </li>
                    </ul>

                    <div className="button-menu-mobile">
                        <ButtonMenu typeButton="login">Login</ButtonMenu>
                        <ButtonMenu typeButton="registrar">Registrar</ButtonMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;