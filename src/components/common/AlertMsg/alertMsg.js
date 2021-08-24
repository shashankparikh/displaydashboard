import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import { MessageContainer,SnackBarContainer } from "./style";

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme) => ({
  success: {
    backgroundColor: "#009587",
  },
  error: {
    backgroundColor: "#d50000",
  },
  info: {
    backgroundColor: "#394c6f",
  },
  warning: {
    backgroundColor: "#394c6f",
  },
  icon: {
    fontSize: 14,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
  },
}));

const AlertMsg = (props) => {
  const { variant, duration, anchorOrigin, message, openAlert } = props;
  const [open, setOpen] = useState(openAlert || true);
  const classes = useStyles1();
console.log(duration,"duration")
  useEffect(() => {
    setOpen(openAlert);
  }, [openAlert]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const Icon = variantIcon[variant];

  return (
    <div>
      <SnackBarContainer
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={duration === 0 ?null:duration}
        onClose={handleClose}
      >
        <SnackbarContent
          className={clsx(classes[variant], classes["icon"])}
          message={
            <MessageContainer>
              <Icon className={clsx(variantIcon[variant])} />
              <span>{message || "Alert Message"}</span>
            </MessageContainer>
          }
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>{" "}
            </>
          }
        />
      </SnackBarContainer>
    </div>
  );
};

AlertMsg.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
  open: PropTypes.bool.isRequired,
};

AlertMsg.defaultProps = {
  duration: 0,
  variant: "error",
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
};

export default AlertMsg;
