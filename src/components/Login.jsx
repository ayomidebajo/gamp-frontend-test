import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../assets/logo 2.png";
import Gamp from "../assets/gamp-artboard 1.png";
import { loginUser } from "../actions/authActions";

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
    console.log(this.state, "state");
    this.props.loginUser(this.state);
  };
  render() {
    console.log(this.props);
    return (
      <div class="main-auth__container">
        <div class="flex--container">
          <div class="grid--container">
            <div class="auth-mobile">
              <div class="card-auth">
                <div class="card-body">
                  <div class="flex--container">
                    <img src={Logo} alt="" srcset="" />
                  </div>
                  <form class="form-gap" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="text"
                        name="email"
                        class="input"
                        onChange={this.handleChange}
                        id="exampleInputEmail1"
                        placeholder="Email address or phone number"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        class="input"
                        id="exampleInputPassword1"
                        placeholder="password"
                      />
                    </div>

                    <button type="submit" class="login">
                      Log in
                    </button>

                    <div class="copyright-mobile  ">© GAMP</div>
                  </form>
                </div>
              </div>
              <div class="copyright">© GAMP</div>
            </div>
            <div class="design-illus">
              <img src={Gamp} width="90%" alt="" srcset="" />
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
