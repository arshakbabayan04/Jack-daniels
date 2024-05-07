import './navigation.scss';

const Navigation = () => {
    return ( 
        <nav className="nav">
            <ul className="nav_menu">
                <li className="nav_menu_item">
                    <a href="#" className="nav_menu_link">Home</a>
                </li>
                <li className="nav_menu_item">
                    <a href="#" className="nav_menu_link">Brand History</a>
                </li>
                <li className="nav_menu_item">
                    <a href="#" className="nav_menu_link">Our Products</a>
                </li>
                <li className="nav_menu_item">
                    <a href="#" className="nav_menu_link">Production Process</a>
                </li>
                <li className="nav_menu_item">
                    <a href="#" className="nav_menu_link">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navigation;