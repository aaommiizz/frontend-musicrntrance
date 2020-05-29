import React from 'react'
import LogoTop from '../logo-Musicentrance.png';

class LoginForm extends React.Component {
  render() {
    return (
        <div className="parallelogram">
          <div className="logo">
            <img src={LogoTop}  alt="logoTop" width="100" height="100" />
          </div> 
          <div className="form">
            <form>
              <div className="field">
                <label className="label">รหัสประจำตัว</label>
                <div className="control">
                  <input className="input" type="email" name="email" />
                </div>
              </div>
              <br></br>
              <div className="field">
                <label className="label">รหัสผ่าน</label>
                <div className="control">
                  <input className="input" type="password" name="password" />
                </div>
              </div>
              <p class="forgot-passsword">ลืมรหัสผ่าน</p>
              <br></br>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button">เข้าสู่ระบบ</button>
                </div>
              </div>
            </form>

          </div>
          
          </div>
      
    )
  }
}

export default LoginForm