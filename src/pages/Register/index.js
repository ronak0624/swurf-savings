import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to savings
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/savings");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.cursor = e.target.selectionStart;
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  onFocus = e => {
    e.target.selectionStart = this.cursor;
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="d-flex align-items-center min-vh-100 py-11 mx-auto">
        <div className="container">
          <div className="card mx-auto">
            <div className="card-body p-sm-9">
              <form noValidate onSubmit={this.onSubmit}>
                <h2 className="mb-5">Login</h2>
                <div className="input-group mb-3">
                  <label className="sr-only" htmlFor="email">Email</label>
                  <div className="input-group-prepend">
                    <svg className="gi gi-person-fill fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                      <path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" />
                    </svg>
                  </div>
                  <input
                    className={classnames("", "form-control", "form-control-lg", {
                      invalid: errors.name
                    })}
                    id="name"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    placeholder="Name"
                  ></input>
                  <span className="red-text ml-4">{errors.name}</span>
                </div>
                <div className="input-group mb-3">
                  <label className="sr-only" htmlFor="email">Email</label>
                  <div className="input-group-prepend">
                    <svg className="gi gi-person-fill fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                      <path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" />
                    </svg>
                  </div>
                  <input
                    className={classnames("", "form-control", "form-control-lg", {
                      invalid: errors.email
                    })}
                    id="email"
                    type="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    placeholder="Email"
                  ></input>
                  <span className="red-text ml-4">{errors.email}</span>
                </div>
                <div className="input-group mb-3">
                  <label className="sr-only" htmlFor="password">Password</label>
                  <div className="input-group-prepend">
                    <svg className="gi gi-lock-fill fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="15" r="1" />
                      <path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
                    </svg>
                  </div>
                  <input className={classnames("", "form-control", "form-control-lg", {
                    invalid: errors.password
                  })}
                    id="password"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    placeholder="Password"></input>
                  <span className="red-text ml-4">{errors.password}</span>
                </div>
                <div className="input-group mb-3">
                  <label className="sr-only" htmlFor="password">Confirm password</label>
                  <div className="input-group-prepend">
                    <svg className="gi gi-lock-fill fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="15" r="1" />
                      <path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
                    </svg>
                  </div>
                  <input className={classnames("", "form-control", "form-control-lg", {
                    invalid: errors.password2
                  })}
                    id="password2"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    placeholder="Confirm password"></input>
                  <span className="red-text ml-4">{errors.password2}</span>
                </div>
                <button className="btn btn-block btn-lg btn-primary mt-3" type="submit">Sign In</button>
                <p className="mt-5 text-center">Don't have account? <Link to="/register">Register</Link>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
