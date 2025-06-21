import './style.css';

function ButtonMenu({ children, typeButton }) {
    return (
        <button 
            type="button"
            className={typeButton === 'login' ? 'button-login' : 'button-resgister'}
        >
            {children}
        </button>
    );
}

export default ButtonMenu;