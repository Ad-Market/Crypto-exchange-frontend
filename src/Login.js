import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

function Login(){
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const check = async() => {
    try{
      const response = await fetch('https://test.loobr.com/getUser', {mode : 'cors'});
      const data = await response.json();
      
      data.map((user, index) => {
        if(user.email == email && user.pass == pass)
          navigate("/main");
      })
      
      setEmail('');
      setPass('');

    }catch(e){
      console.log(e);
    }
  }
    return(
      <div>
        <div>
            <div className="container-6 w-container signup wf-section" id="signup">
            <div id="formular" className="div-block-12">
              <div className="div-block-13">
                <div data-w-id="03c0c0aa-2709-1a2f-5415-bd990aacd5ce" style={{opacity : 1}}  className="h1 center">Log In</div>
                <div data-w-id="03c0c0aa-2709-1a2f-5415-bd990aacd5d0" style={{opacity : 1}}  className="text-grey center">
                  <em className="italic-text-3">Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</em><br/></div>
              </div>
              <div className="div-block-14">
                <ul role="list" className="list-2">
                  <li className="list-item-2">Buy and sell 100+ cryptocurrencies</li>
                  <li className="list-item-2">Secure personal wallet</li>
                </ul>
              </div>
              <div className="form-2" id="wf-form-Email-Form" name="wf-form-Email-Form">
                <label  className="form-label">E-Mail</label>
                <input type="email" className="formfield w-input" maxLength="256" name="EMAIL" data-name="EMAIL" placeholder="E-Mail" onChange={e => setEmail(e.target.value)} id="EMAIL" required="" value={email} />
                <label className="form-label">Password</label>
                <input type="password" className="formfield w-input" maxLength="256" name="Password" data-name="PASSWORD" onChange={e => setPass(e.target.value)} placeholder="Password" id="PASSWORD" required="" value={pass}/>
                <button onClick={check} data-wait="Please wait..." className="formsubmitbutton w-button">Login</button>
              </div>
              <div>
                <div>
                  <div className="form-disclaimer-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra augue a enim hendrerit, ut rutrum diam molestie. Sed semper non ex a pretium. Suspendisse sed ex eu ante rutrum tincidunt. Sed tincidunt urna felis, in auctor elit pretium vel. In hac habitasse platea dictumst. Pellentesque vel sagittis est, sit amet gravida lacus. Ut rhoncus est ac lobortis aliquam. Vivamus pharetra ligula nec mi ultricies, vitae gravida velit rhoncus. Vestibulum consectetur, ante eu tempus fringilla, leo ligula pulvinar nibh, eget pretium justo sem eget ex.</div>
                </div>
              </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;