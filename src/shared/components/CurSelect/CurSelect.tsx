import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { CurrencyOption } from '../../interfaces/currency';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);


interface Props {
  currencyData: string[],
  label: string;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  value?:string;
}

const CurSelect: React.FC<Props> = ({ currencyData, label, onChange, value }) => {
  const classes = useStyles();


  return (

    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"

        value={value}
        onChange={onChange}
      >
        {currencyData.map((item) => {
          return (
            <MenuItem
              key={item}
              value={item}>{item}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CurSelect;