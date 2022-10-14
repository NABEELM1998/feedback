import { Link  } from "react-router-dom";
function Header () {
    return (
        <div className="container">
            <header className="header">Feedback UI</header>
            <ul>
                <Link to = '/'><li>Home</li></Link>
            </ul>
            
           
            
        </div>
        
    )
}
export default Header;