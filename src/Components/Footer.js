import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <div className="about-link">
            <Link to={"/about"}><li>About page</li></Link>
        </div>
    )
}
export default Footer;