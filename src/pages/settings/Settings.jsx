import './settings.css'
import SideBar from '../../components/sidebar/SideBar'

export default function Settings() {
    return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Update your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={require('../../assets/download.jpg')} alt="img" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon  fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='yash' />
                <label>Email</label>
                <input type="email" placeholder='yashthakkar6254@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
    )
}

