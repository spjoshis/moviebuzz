import React from 'react';
import { getContent } from '../utils/translator';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
            <div className="text-center">
                © {new Date().getFullYear()} {getContent('footer-text')}
            </div>
        </div>
    );
  }
}

export default Footer;