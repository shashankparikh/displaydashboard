import React from 'react'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SdRadio = (props) => {
    const {type,checked,disabled,onChange,required,className,id,text,value,color,name} = props;
    return (
         <FormControlLabel className={className} control={<Radio color={color} onChange={onChange} checked={checked} id={id} disabled={disabled} value={value} name={name || 'name'} required={required}/>} label={text || 'Radio Button'} />
    )
}

SdRadio.defaultProps={
    // checked: false,
    readOnly: false,
    disabled: false,
    inline: false,
    onChange: () => {},
    validationState: null,
    id: '',
    name: '',
    value: null,
    containerClass: '',
    color: 'primary',
    type: 'radio'
}


export default SdRadio
