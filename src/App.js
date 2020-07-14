import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Title from '@material-ui/core/DialogTitle'
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert';

import './App.css';
import WeatherCard from './WeatherCard';

const useStyles = makeStyles((theme) => ({
  container:{
    width: '100%',
    
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  
  form: {
   width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: '15px',
    background: '#f7f7f7',
    boxShadow: '0px 2px 2px rgba(13, 15, 47, 0.924)',
  },
  title:{
    width: '100%',
    color: 'slategrey',
  },
  textfield:{
      marginLeft: '5% '
  },
  submit: {
    margin: theme.spacing(3, 30.1, 2),
  },
  card:{
    width: '100%'
  },
  footerLink:{
    textDecoration: 'none',
    color: 'slategrey',
    alignItems: 'center',
    width: '100%'
  }
}));
function App() {
  
  const classes = useStyles();
  const[data, setData] = useState({})
  const[city, setCity] = useState('')
  const[error, setError] = useState('')
  const[country, setCountry] = useState('')
  const[flagErrors, setFlag] = useState(false)
  const handleCity = (event)=>{
      setCity(event.target.value)
     
  }
  const handleCountry = (event)=>{
    setCountry(event.target.value)
  
  }
    const  handleSubmit = async(event)=>{
      event.preventDefault();
      console.log(city, country)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=8e0be2251dae4a629c7358238b2f7c60`);
        if(res.ok){
        res.json()
          .then(res => setData({
            data: data,
            city: city,
            country: country.toUpperCase(),
            condition: res.weather[0].main,
            description: res.weather[0].description,
            temperature: Math.round(res.main.temp)
          }),
          setFlag(true))
          setError('')
        } 
        
      
      else{
        setData({
          data: "",
            city:"",
            country: "",
            condition: "",
            description: "",
            temperature: "",
        })
        setError(
          "Invalid City or Country"
        )
        setFlag(false)
      }
      
    }

    console.log(flagErrors)
  return (
    
      <Container className={classes.container} maxWidth="xs">
         
        <div className={classes.paper}>
     
     <form className={classes.form} onSubmit={handleSubmit} >
     <Title className={classes.title}><Typography variant="h2">
      Weather App
    </Typography></Title>
      <TextField 
      className={classes.textfield}
      id="standard-required"
      label="City"
      value={city}
      onChange={handleCity}
      inputProps={{
        maxLength: 20
      }}
       required>
         </TextField>
      <TextField
      className={classes.textfield}
      id="standard-required"
      label="Country"
      value={country}
      onChange={handleCountry}
      inputProps={{
        maxLength: 20
      }}
      required>

      </TextField>
     
      
     <br></br>
     <Button
        className={classes.submit}
        variant="contained"
        color="default"
        endIcon={<Icon>send</Icon>}
        type="submit" 
        

      > 
      Send
      </Button>
      </form>
      
    {flagErrors ? <WeatherCard className={classes.card} data={data}/> : null }
    {error===''? null:  <Alert variant="filled" severity="error">{error}</Alert>}
   
    
      <hr></hr>
      <Typography><a className={classes.footerLink} href='https://sohanpatel.codes'>by sohan patel</a></Typography>
      </div>
    </Container>      
   
  );
}

export default App;
