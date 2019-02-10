import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';
import AuthMiniPage from '../../../Auth/pages/AuthMiniPage/AuthMiniPage';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes}
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        <div className={styles.authbox}>
          {
            context.router.isActive('/', true)
              ? <a className={styles['header_button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
              : null
          }
          {
            context.router.isActive('/', true)
              ? <a className={styles['header_button']} href="#" onClick={props.toggleAuthForm}><FormattedMessage id="login" /></a>
              : null
          }
          <AuthMiniPage />
        </div>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  toggleAuthForm: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
