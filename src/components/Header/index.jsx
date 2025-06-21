import { useState } from "react";
import ButtonMenu from "../ButtonMenu";
import "./style.css";

function Header() {
    const [linkDropdown, setLinkDropdown] = useState(false);

    function cliqueDropdown(event) {
        event.preventDefault();

        setLinkDropdown(!linkDropdown);
    }

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
                                onClick={cliqueDropdown}
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
            </nav>
        </header>
    );
}

export default Header;