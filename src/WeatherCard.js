import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    card:{
      width: '100%',
      marginTop: theme.spacing(1),
      marginBottom: '15px',
      background: '#f7f7f7',
      boxShadow: '0px 2px 2px 1px rgba(13, 15, 47, 0.924)'
    
    }
  }));
const WeatherCard = (props) => {
    const classes = useStyles();
    const data = props.data;
  
    return(
  
      <Card className={classes.card}>
      <CardContent>
    <Typography variant="h5" className={classes.cardTitle}>{data.city}, {data.country}</Typography>
    <Typography variant="h5" component="h2">Current Condition: {data.condition}, {data.description}</Typography> 
    <Typography variant="h5" component="h2">Today's Temperature: {data.temperature }&#8457;</Typography> 
      
      
      </CardContent>
    </Card> 
    )
}
export default WeatherCard;