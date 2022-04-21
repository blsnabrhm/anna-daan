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
                        
                    </li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                    
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src='http://images.vogue.it/users/media/a/amirhossein.png?v=1467238729' alt="img" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}
