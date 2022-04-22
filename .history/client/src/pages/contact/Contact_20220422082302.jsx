import './contact.css'

export default function Contact() {
    return (
    <div className='contact'>
        <div class="registration_form">
		<div class="title">
			Registration Form
		</div>

		<form>
			<div class="form_wrap">
                <div className="input_wrap">
					<label for="fname">First Name</label>
					<input type="text" id="email"/>
				</div>
				<div className="input_wrap">
					<label for="lname">Last Name</label>
					<input type="text" id="email"/>
				</div>
                <div >

                </div>
				<div className="input_wrap">
					<label>Gender</label>
					<ul>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="male" className="input_radio" checked/>
								<span>Male</span>
							</label>
						</li>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="female" className="input_radio"/>
								<span>Female</span>
							</label>
						</li>
                        <li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="male" className="input_radio" checked/>
								<span>Other</span>
							</label>
						</li>
					</ul>
				</div>
                <div className="input_wrap">
					<label>Gender</label>
					<ul>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="male" className="input_radio" checked/>
								<span>Male</span>
							</label>
						</li>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="female" className="input_radio"/>
								<span>Female</span>
							</label>
						</li>
                        <li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="male" className="input_radio" checked/>
								<span>Other</span>
							</label>
						</li>
					</ul>
				</div>
        <div className="input_wrap">
            <label for="food">10th Marks</label>
            <input type="number" id="food"  min="0" max="100"/>
        </div>
				<div className="input_wrap">
					<label for="city">Phone No</label>
					<input type="tel" id="city" placeholder="+91"/>
				</div>
				<div className="input_wrap">
					<label for="country">Email</label>
					<input type="text" id="country"/>
				</div>
				<div className="input_wrap">
					<input type="submit" value="Submit" className="submit_btn"/>
				</div>
        <div className="input_wrap">
					<input type="submit" value="Reset" className="submit_btn"/>
				</div>
			</div>
		</form>
	</div>
    </div>
    )
}
