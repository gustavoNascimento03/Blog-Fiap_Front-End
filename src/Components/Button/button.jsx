import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * @param {React.ReactNode} children
 * @param {React.ElementType} as
 * @param {object} props
 */

function Button({ children, as: Component = 'button', ...props }) {
  return (
    <Component className="btn" {...props}>
      {children}
    </Component>
  );
}

export default Button;