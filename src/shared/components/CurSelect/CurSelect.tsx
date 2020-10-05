import React, { memo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 120,
      height: 60,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface Props {
  currencyData: string[];
  label: string;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  value: string;
}

const CurSelect: React.FC<Props> = memo(({ currencyData, label, onChange, value }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select labelId={label} value={value} onChange={onChange}>
        {currencyData?.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
});

export default CurSelect;
