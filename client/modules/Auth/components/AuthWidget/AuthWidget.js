import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// Import Style
import styles from './AuthWidget.css';

export class AuthWidget extends Component {

  authLogin = () => {
    const usernameRef = this.refs.username;
    const passphraseRef = this.refs.passphrase;
    if (usernameRef.value && passphraseRef.value) {
      this.props.authLogin(usernameRef.value, passphraseRef.value);
    }
  };


  render() {
    const cls = `${styles.form} ${(this.props.showAuthForm ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedHTMLMessage id="welcomeLogin" /></h2>
          <input placeholder={this.props.intl.messages.logname} className={styles['auth_input_un']} ref="username" type="text" />
          <br />
          <input placeholder={this.props.intl.messages.password} className={styles['auth_input_pw']} ref="passphrase" type="password" />
          <a className={styles['post-submit-button']} href="#" onClick={this.authLogin}><FormattedMessage id="loginMessage" /></a>
        </div>
      </div>
    );
  }
}
//<a className={styles['post-submit-button']} href="#" onClick={this.authLogin}><FormattedMessage id="login_message" /></a>
AuthWidget.propTypes = {
  showAuthForm: PropTypes.bool.isRequired,
  authLogin: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(AuthWidget);
