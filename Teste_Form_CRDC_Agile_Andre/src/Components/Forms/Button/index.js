import React from "react";
import PropTypes from "prop-types";

import { ButtonStyleded } from "./styles";

function Button({
  text = "",
  onPress = () => null,
  bg = " #004e92",
  color = "#fff",
  styles,
  hoverStyles,
  ...props
}) {
  return (
    <ButtonStyleded
      bg={bg}
      color={color}
      onClick={onPress}
      style={styles}
      {...props}
    >
      {text}
    </ButtonStyleded>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  styles: PropTypes.object,
  hoverStyles: PropTypes.object,
};
