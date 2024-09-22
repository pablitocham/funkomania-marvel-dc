import CartWidget from "./CartWidget/CartWidget"

const NavBar = ({ logo }) => {
    return (
        <>
            <nav className="nav">
                <img src={logo} alt="logoMD" className='logo' />
                <ul>
                    <li>Inicio</li>
                    <li>Tu Compra</li>
                    <li>Super-Hero</li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
export default NavBar

