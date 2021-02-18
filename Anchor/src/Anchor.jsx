import React from 'react';
import { StyledAnchorExternal } from './StyledAnchor';

/**
 * Anchor component with icon (or no) overrides Anchor tag
 * @param {String} label Title or content of the component
 * @param {String} href The path of the page to visit
 * @param {Icon} icon The Icon component
 */
const Anchor = ({ label, href, color = null, icon = null, ...rest }) => {
  return (
    <StyledAnchorExternal href={href} color={color} {...rest}>
      {label}
      {icon !== null && icon}
    </StyledAnchorExternal>
  );
};

export default Anchor;
