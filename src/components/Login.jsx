import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../assets/logo 2.png";
import Gamp from "../assets/gamp-artboard 1.png";
import { loginUser } from "../actions/actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };
  render() {
    return (
      <div className="main-auth__container">
        <div className="flex--container">
          <div className="grid--container">
            <div className="auth-mobile">
              <div className="card-auth">
                <div className="card-body">
                  <div className="flex--container">
                    <img src={Logo} alt="logo" />
                  </div>
                  <form className="form-gap" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="text"
                        name="email"
                        className="input"
                        onChange={this.handleChange}
                        id="exampleInputEmail1"
                        placeholder="Email address or phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        className="input"
                        id="exampleInputPassword1"
                        placeholder="password"
                      />
                    </div>

                    <button type="submit" className="login">
                      Log in
                    </button>

                    <div className="copyright-mobile  ">© GAMP</div>
                  </form>
                </div>
              </div>
              <div className="copyright">© GAMP</div>
            </div>
            <div className="design-illus">
              <img src={Gamp} width="90%" alt="gamp" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.userObject,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
