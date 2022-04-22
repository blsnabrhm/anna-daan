import './contact.css'

export default function Contact() {
    return (
    <div className='contact'>
        <div class="registration_form">
		<div class="title">
			Donation Form
		</div>

		<form action="mailto:chirag.ganguli2019@vitbhopal.ac.in" method="POST" enctype="text/plain">
			On submitting, you will be redirected to the mail client, where you can just send the mail for approval.
			<div class="form_wrap">
                <div className="input_wrap">
					<label for="fname">First Name</label>
					<input type="text" id="fname" name="fname"/>
				</div>
				<div className="input_wrap">
					<label for="lname">Last Name</label>
					<input type="text" id="lname" name="lname"/>
				</div>
                <div >

                </div>
			
                <div className="input_wrap">
					<label for="foodname">Food Name</label>
					<input type="text" id="foodname" name="foodname"/>
				</div>
                <div className="input_wrap">
					<label>Food Type</label>
					<ul>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="state" value="solid" className="input_radio" checked/>
								<span>Solid</span>
							</label>
						</li>
						<li>
							<label className="radio_wrap">
								<input type="radio" name="state" value="liquid" className="input_radio"/>
								<span>Liquid</span>
							</label>
						</li>
                        <li>
							<label className="radio_wrap">
								<input type="radio" name="state" value="semi-solid" className="input_radio" checked/>
								<span>Semi-Solid</span>
							</label>
						</li>
					</ul>
				</div>  
                <div className="input_wrap">
                    <label className='edi' for="edible">Edible</label>
                    <div className='edible'>
                    <input className='edible' type="radio" id="y" name='edible' value="isEdible"/>
                    <label className='edible' for="edible">Yes  </label>
                    <input className='edible' type="radio" id="n" name='edible' value="isNotEdible"/>
                    <label className='edible' for="edible">No  </label>
                    </div>
                </div>
                <div className='input_wrap'>
                    <label for="dot">Date and Time of Cooking</label>
					<input type="datetime-local" id="dot" class="ta" name="cooking"/>
                </div>
                <div className='input_wrap'>
                    <label for="quant">Quantity</label>
					<input type="number" id="quant" placeholder="in Kgs" name="quantity"/>
                </div>
                <div className='input_wrap'>
                    <label for="loc">Pickup Location:</label>
					<input type="text" id="loc" class="ta" name="pickup from"/>
                </div>
                <div className='input_wrap'>
                    <label for="pick">Date and Time of PickUp</label>
					<input type="datetime-local" id="pick" name="data time pickup"/>
                </div>
				<div className="input_wrap">
					<label for="city">Phone No</label>
					<input type="tel" id="city" placeholder="+91" name="phone"/>
				</div>
				<div className="input_wrap">
					<label for="country">Email</label>
					<input type="text" id="country" name="mail"/>
				</div>
                <div className='input_wrap'>
                    <label>Additional Information(if Any)</label>
					<textarea for="ta" name="addl info"></textarea>
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
