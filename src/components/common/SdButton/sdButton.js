import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

const SdButton = (props) => {
  const {
    size,
    fullWidth,
    className,
    type,
    variant,
    onClick,
    color,
    text,
    tooltip,
    disabled,
    startIcon,
    endIcon,
  } = props;
  return (
    <div>
      <Button
        variant={variant}
        color={color}
        className={className}
        startIcon={startIcon || ''}
        endIcon={endIcon || ''}
        onClick={onClick}
        disabled={disabled}
        fullWidth={fullWidth}
        size={size}
        type={type}
      >
        {text || "Button"}
      </Button>
    </div>
  );
};

SdButton.defaultProps = {
  size: "medium",
  fullWidth: false,
  className: "",
  type: "",
  variant: "contained",
  onClick: () => {},
  color: "primary",
  children: null,
  text: "",
  tooltip: "",
  disabled: false,
};

export default SdButton;
