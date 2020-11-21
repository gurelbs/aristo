import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import BgShape from './bgShape'
import musagim from './musagim'
import './App.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';  
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ToggleButton from '@material-ui/lab/ToggleButton';
const useStyles = makeStyles({
    root: {
        minWidth: 275,

    },
      cardaction: {
        display: 'flex',
        justifyContent: 'center',
      },
      heartred: {
        fontSize: '4rem'
      },
      heart: {
        border: 'none',
      },
})
export default function FullCard() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(false);

    const { title } = useParams();

    return (
        <div className="page">
            <BgShape />
            <Nav />
            <div className="text-light">
                {musagim
                .filter(card => card.title === title)
                .map((card,index) => {
                    return (
                        <div key={index} className="row m-0">
                        <Card className={classes.root} variant="outlined">
                          <CardContent >
                            <div className="d-flex">
                            <h2 className="varela flex-fill">
                              {card.title}
                            </h2>
                            <Link to="/main" className="flex-shrink-1 align-self-center btn btn-outline-info">חזרה</Link>
                            </div>
                            <Typography className={classes.pos} color="textSecondary">
                              {card.subTitle}
                            </Typography>
                            <div className="content-style col-lg-8 mx-auto px-0">
                              {card.content}
                            </div>
                          </CardContent>
                          <CardActions className={classes.cardaction}>
                            <IconButton  aria-label="add to favorites">
                              <ToggleButton
                              className={classes.heart}
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
                })}
            </div> 
            <Footer />
        </div>
    )
}
