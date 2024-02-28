import "./styles.css";

function Footer(){
    return(
        <div className="footer-section">
            <a id="a1" href="contact"><div className="phoneBox"><span><i class='bx bxs-phone'></i></span></div> <span id="number">1800 200 1234</span></a>
            <a id="a2" href="https://www.facebook.com/crigroups"><span><i class='bx bxl-facebook-circle'></i></span> <span>www.facebook.com/cripumps</span></a>
            <a id="a3" href="https://www.crigroups.com"><span><i class='bx bx-globe' ></i></span> <span>www.crigroups.com</span></a>
        </div>
    )
}

export default Footer;