import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img className="sidebarImg" src="https://media.istockphoto.com/photos/volunteer-hands-holding-food-donations-box-with-grocery-products-on-picture-id1299146413?b=1&k=20&m=1299146413&s=170667a&w=0&h=hE7LMkALsNW7tMzXlwmV2RFLEHmutiJYCEpApCzaWEM=" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            A recusandae minus architecto ut. Perferendis, ex odit officia assumenda nemo impedit.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i class="sidebarIcon fa-brands fa-twitter"></i>
                <i class="sidebarIcon fa-brands fa-facebook"></i>
                <i class="sidebarIcon fa-brands fa-pinterest"></i>
                <i class="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
