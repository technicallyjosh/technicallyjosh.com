import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { linkedin, twitter, github, stackoverflow } = this.props.data;

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://stackoverflow.com/users/${stackoverflow}?tab=profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-stackoverflow" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
