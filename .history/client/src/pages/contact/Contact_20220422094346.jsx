import './contact.css'

export default function Contact() {
    return (
    <div className='contact'>
        <div class="registration_form">
		<div class="title">
			Donation Form
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
					<label for="fname">Food Name</label>
					<input type="text" id="email"/>
				</div>
                <div className="input_wrap">
					<label>Food Type</label>
					<ul>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="male" className="input_radio" checked/>
								<span>Solid</span>
							</label>
						</li>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="female" className="input_radio"/>
								<span>Liquid</span>
							</label>
						</li>
                        <li>
							<label className="radio_wrap">
								<input type="radio" name="gender" value="male" className="input_radio" checked/>
								<span>Semi-Solid</span>
							</label>
						</li>
					</ul>
				</div>  
                <div className="input_wrap">
                    <label className='edi' for="edible">Edible</label>
                    <div className='edible'>
                    <input className='edible' type="radio" id="y" name='edible'/>
                    <label className='edible' for="edible">Yes  </label>
                    <input className='edible' type="radio" id="n" name='edible'/>
                    <label className='edible' for="edible">No  </label>
                    </div>
                </div>
                <div className='input_wrap'>
                    <label for="dot">Date of Cooking</label>
					<input type="datetime-local" id="dot" class="ta"/>
                </div>
                <div className='input_wrap'>
                    <label for="dot">Time of Cooking</label>
					<input type="time" id="dot" class="ta"/>
                </div>
                <div className='input_wrap'>
                    <label for="quant">Quantity</label>
					<input type="number" id="quant" placeholder="in Kgs"/>
                </div>
                <div className='input_wrap'>
                    <label for="loc">Pickup Location:</label>
					<input type="text" id="loc" class="ta"/>
                </div>
                <div className='input_wrap'>
                    <label for="pick">Date of PickUp</label>
					<input type="datetime-local" id="pick"/>
                </div>
                <div className='input_wrap'>
                    <label for="pick">Date of PickUp</label>
					<input type="time" id="pick"/>
                </div>
				<div className="input_wrap">
					<label for="city">Phone No</label>
					<input type="tel" id="city" placeholder="+91"/>
				</div>
				<div className="input_wrap">
					<label for="country">Email</label>
					<input type="text" id="country"/>
				</div>
                <div className='input_wrap'>
                    <label>Additional Information(if Any)</label>
					<textarea for="ta"></textarea>
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
