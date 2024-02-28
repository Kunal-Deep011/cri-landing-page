import "./styles.css";
import logo from '../../assets/logo.png';

function Header(){
    return(
        <div className="header-container">
            <div><img src={logo} alt="logo"/></div>
        </div>
    )
}

export default Header;