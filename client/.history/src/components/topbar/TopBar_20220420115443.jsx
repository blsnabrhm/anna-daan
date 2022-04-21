import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = true;
        return (
        <div className='top'>
            <div className="topLeft">
                <i class="topIcon fa-brands fa-twitter"></i>
                <i class="topIcon fa-brands fa-facebook"></i>
                <i class="topIcon fa-brands fa-pinterest"></i>
                <i class="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to={'/'} className='Link'>HOME</Link>
                    </li>
                    <li className='topListItem'><Link  to={'/'} className='Link'>ABOUT</Link></li>
                    <li className='topListItem'><Link  to={'/'} className='Link'>CONTACT</Link></li>
                    <li className='topListItem'><Link  to={'/write'} className='Link'>WRITE</Link></li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                        
                    </li>
                    
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg' src='http://images.vogue.it/users/media/a/amirhossein.png?v=1467238729' alt="img" />
                    ) : (
                        <Link className='link' to={'/'}>Login</Link>
                        <Link className='link' to={'/'}>Login</Link>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}
