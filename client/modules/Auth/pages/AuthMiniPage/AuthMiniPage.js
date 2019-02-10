import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import AuthWidget from '../../components/AuthWidget/AuthWidget';

// Import Actions
import { authLogin, authLoginRequest, authRegister } from '../../AuthActions'
import { toggleAuthForm } from '../../../App/AppActions';

// Import Selectors
import { getShowAuthForm } from '../../../App/AppReducer';

class AuthMiniPage extends Component {

  handleAuth = (username, passphrase) => {
    this.props.dispatch(toggleAuthForm());
    this.props.dispatch(authLoginRequest({ username, passphrase }));
  };

  render() {
    return (
      <div>
        <AuthWidget authLogin={this.handleAuth} showAuthForm={this.props.showAuthForm} />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAuthForm: getShowAuthForm(state),
  };
}

AuthMiniPage.propTypes = {
  auth: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    passphrase: PropTypes.string.isRequired,
  })).isRequired,
  toggleAuthForm: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(AuthMiniPage);
