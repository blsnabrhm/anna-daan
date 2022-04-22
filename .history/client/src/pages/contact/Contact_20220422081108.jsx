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
        <div class="input_wrap">
					<label for="fname">First Name</label>
					<input type="text" id="email"/>
				</div>
        <div class="input_wrap">
					<label for="mname">Middle Name</label>
					<input type="text" id="email"/>
				</div>
				<div class="input_wrap">
					<label for="lname">Last Name</label>
					<input type="text" id="email"/>
				</div>
				<div class="input_wrap">
					<label>Gender</label>
					<ul>
						<li>
							<label class="radio_wrap">
								<input type="radio" name="gender" value="male" class="input_radio" checked/>
								<span>Male</span>
							</label>
						</li>
						<li>
							<label class="radio_wrap">
								<input type="radio" name="gender" value="female" class="input_radio"/>
								<span>Female</span>
							</label>
						</li>
            <li>
							<label class="radio_wrap">
								<input type="radio" name="gender" value="male" class="input_radio" checked/>
								<span>Other</span>
							</label>
						</li>
					</ul>
				</div>
        <div class="input_wrap">
            <label for="marks">10th Marks</label>
            <input type="number" id="marks" placeholder="CGPA" min="0" max="100"/>
        </div>
				<div class="input_wrap">
					<label for="city">Phone No</label>
					<input type="tel" id="city" placeholder="+91"/>
				</div>
				<div class="input_wrap">
					<label for="country">Email</label>
					<input type="text" id="country"/>
				</div>
				<div class="input_wrap">
					<input type="submit" value="Submit" class="submit_btn"/>
				</div>
        <div class="input_wrap">
					<input type="submit" value="Reset" class="submit_btn"/>
				</div>
			</div>
		</form>
	</div>
    </div>
    )
}
