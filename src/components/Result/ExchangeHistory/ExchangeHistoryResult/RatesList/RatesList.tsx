import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getHistoryBase } from '../../../../../store/history/selectors';

import { HistoryRates } from '../../../../../shared/interfaces/history';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

interface Props {
  data: HistoryRates[];
}

const RatesList: React.FC<Props> = memo(({ data }) => {
  const classes = useStyles();

  const base = useSelector(getHistoryBase);

  return (
    <List className={classes.root}>
      {data &&
        data.map((item) => {
          return (
            <ListItem key={item.date}>
              <ListItemText primary={base} secondary={item.date} />
              <ListItemText primary={item.rate.value.toFixed(2)} secondary={item.rate.currency} />
            </ListItem>
          );
        })}
    </List>
  );
});

export default RatesList;
