import React from 'react'
import LogoTop from '../logo-Musicentrance.png';

class TestForm extends React.Component {

    constructor() {
  
      super();
  
      this.mediaQuery = {
        desktop: 1200,
        tablet: 768,
        phone: 576,
      };
  
      this.state = {
        windowWidth: null
      };
    }
  
    componentDidMount() {
      window.addEventListener('resize', () => {
        this.setState({windowWidth: document.body.clientWidth})
      });
    }
  
    render() {
    return (
        <div className="App" style={{
            width: this.state.windowWidth > this.mediaQuery.phone
              ? '50%'
              : '100%',
            //more styling :)
          }}>
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
      </div>
    )
  }
}
  

  export default TestForm