//React router'dan link ve navlink import ediyoruz
import {Link, NavLink} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            {/* link = <a> anlamına gelir, sayfanın yenilenmesine izin vermez. to ise nereye gideceğini söyler.*/ }
            <Link to="/" className="brand">React Blog</Link>

            <ul>
                <li>
                    {/*navLink, link'in daha akıllı hali. tarayıcının adresi navlink'in to propu ile eşleşiyorsa bu linkte otomatik olarak active adında bir css sınıfı ekler, aktif olan sayfanın linkini belirlemek için*/}

                    <NavLink to ="/">Anasayfa</NavLink>

                </li>
                <li>
                    <NavLink to="/yeni-yazi">Yeni Yazı</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;