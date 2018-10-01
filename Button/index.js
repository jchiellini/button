import { Component, ptypes, React } from 'common_imports';

import './Button.scss';

export class Button extends Component {
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
