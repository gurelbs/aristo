import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '0 auto'
  },
  input: {
    marginRight: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchForm() {
  const classes = useStyles();

  return (
      <>
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        autoFocus
        placeholder="חיפוש חופשי"
        inputProps={{ 'aria-label': 'search-text' }}
      />
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </>
  );
}
