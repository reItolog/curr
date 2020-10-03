import 'date-fns';
import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  label: string;
  dateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const DatePicker: React.FC<Props> = memo(({ dateChange, label, required = false }) => {
  return (
    <TextField
      label={label}
      type='date'
      required={required}
      onChange={dateChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
});

export default DatePicker;
