import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const SdCheckBox = (props) => {
  const {
    className,
    required,
    hasError,
    disabled,
    id,
    checked,
    onChange,
    value,
    text,
    errorMsg,
    readOnly,
  } = props;
  return (
    <FormControl
      className={className}
      required={required}
      error={hasError}
      component="fieldset"
    >
      <FormControlLabel
        disabled={disabled}
        control={
          <Checkbox
            color="primary"
            id={id}
            required={required}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            value={value}
            readOnly={readOnly}
          />
        }
        label={text}
      />
      {hasError ? <FormHelperText>{errorMsg}</FormHelperText> : null}
    </FormControl>
  );
};

SdCheckBox.defaultProps = {
  readOnly: false,
  hasError: false,
  disabled: false,
  errorMsg: "",
  onChange: () => {},
  validationState: null,
  id: "",
  value: null,
  containerClass: "",
  className: "",
  required: false,
  text: "",
};

export default SdCheckBox;
