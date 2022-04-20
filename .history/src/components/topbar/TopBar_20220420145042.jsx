import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
        return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem' onClick={() => window.location.reload()}>
                    <Link to="/" className='link'>HOME</Link>    
                    {/* <Route render={(props) => <Link to='/' className='link'>HOME</Link>}/> */}
                    </li>
                    <li className='topListItem' onClick={() => window.location.reload()}> 
                    <Link  to='/' className='link'>CONTACT</Link>
                    
                    </li>
                    <li className='topListItem' onClick={() => window.location.reload()}> 
                    <Link  to='/write' className='link'>WRITE</Link> 
                    
                    </li>
                    <li className='topListItem' onClick={() => window.location.reload()}> 
                    <Link  to='/' className='link'>ABOUT</Link> 

                    </li>
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
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                                // <>
                                // <Link className='link' to='/register'>REGISTER</Link>
                                // <Link className='link' to='/login'>LOGIN</Link>
                                // </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}
