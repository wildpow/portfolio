import React from "react";
import { Link } from "rebass";
import Tippy from "@tippy.js/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tippy.js/dist/tippy.css";

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, color }) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter">
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      {console.log(color)}
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </IconLink>
  </Tippy>
);

SocialLink.defaultProps = {
  color: "primary"
};

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default SocialLink;
