import React from 'React';
import { PropTypes as ptypes } from 'prop-types';

import './Button.scss';

export class Button extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <button className="Button">
      { children }
      </button>
  )
  }
}

Button.propTypes = {
  children: ptypes.node
};

export default Button;
