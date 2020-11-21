import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {Link} from 'react-router-dom'
import ShareBtn from './ShareBtn'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem 0',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'right',
    padding: 0,
    margin: '1rem 0',
    fontFamily: `Varela Round', sans-serif`
  },
  pos: {
    marginBottom: 12,
  },
  cardaction: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  heart: {
    border: 'none',
  },
  centerbtn: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    margin: '0 auto',
  },

});

export default function CardContainer(data) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);

  return (
    <div className='card-style'>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <h2 className="varela">
          {data.title}
        </h2>
        <Typography className={classes.pos} color="textSecondary">
          {data.subTitle}
        </Typography>
        <div className="content-style text-center">
          {data.content}
        </div>
        
          <Link 
            to={`/main/${data.title}`} 
            style={{ textDecoration: 'none' }}>
            <Button 
              className={classes.centerbtn} 
              variant="outlined" 
              color="primary" 
              size="large" >
            המשך קריאה</Button>
            </Link>
      </CardContent>
      <CardActions className={classes.cardaction}>
        <ShareBtn data={data}/>
        <IconButton  aria-label="add to favorites">
          <ToggleButton
          className={classes.heart}
          border={0}
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
          >
            <FavoriteIcon className={classes.heartred}/>
      </ToggleButton>
        </IconButton>
      </CardActions>
    </Card>
    </div>
  )
}
