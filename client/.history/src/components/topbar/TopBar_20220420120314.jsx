import { link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
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
                    <li className='topListItem'><link  to={'/about'} className='link'>ABOUT</link></li>
                    <li className='topListItem'><link  to={'/contact'} className='link'>CONTACT</link></li>
                    <li className='topListItem'><link  to={'/write'} className='link'>WRITE</link></li>
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
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='Link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='Link' to={'/register'}>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}
