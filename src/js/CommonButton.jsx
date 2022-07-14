import React from "react";
import Button from "@mui/material/Button";

const commonButton = ({
  children,
  color,
  disabled,
  size,
  variant,
  sx,
  onClick,
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default commonButton;
