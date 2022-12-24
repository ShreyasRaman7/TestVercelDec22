import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';

let key1 =0
const ExerciseButtons = () => {
  const [exerciseData, setExerciseData] = useState({});
  const exerciseOptions = ['abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'neck', 'quadriceps', 'traps', 'triceps'];


  const muscleImages = {
    abductors: 'https://i.ibb.co/BtMCmxJ/abductors.png',
    adductors: 'https://i.ibb.co/WkZTCnt/adductors.png',
    biceps: 'https://i.ibb.co/2nZ0Kd9/biceps.webp',
    calves: 'https://i.ibb.co/WkZTCnt/adductors.png',
    chest: 'https://i.ibb.co/KhY1qy0/chest.jpg',
    forearms: 'https://i.ibb.co/HFYLDB7/forearms.jpg',
    glutes: 'https://i.ibb.co/x6xDTG3/glutes.jpg',
    hamstrings: 'https://i.ibb.co/jwznyg3/hamstrings.jpg',
    lats: 'https://i.ibb.co/JqHqdfs/lats2.jpg',
    neck: 'https://i.ibb.co/jG2zQpd/neck.jpg',
    quadriceps: 'https://i.ibb.co/kXHZwX8/Quadriceps-muscles.png',
    traps: 'https://i.ibb.co/PDjnHhh/traps.webp',
    triceps: 'https://i.ibb.co/dbpY9n9/triceps.jpg',
  };
  
  const ExerciseImage = ({ muscle }) => {
    const imageUrl = muscleImages[muscle];
  
    return <img src={imageUrl} alt={muscle} />;
  };

  const handleButtonClick = muscle => {
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: { muscle },
      headers: {
        'X-RapidAPI-Key': 'c45f2f9687msh24becdeb95d1334p15b4b8jsn8fb2a5cd01ce',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    axios.request(options).then(response => {
      setExerciseData(response.data);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
  {exerciseOptions.map(exercise => (
    <Grid item key={exercise}>
      <Button variant="contained" color="warning" onClick={() => handleButtonClick(exercise)}>
       <h4>{exercise}</h4> 
      </Button>
    </Grid>
  ))}
</Grid>
      {Object.keys(exerciseData).length > 0 && (
        <div>
          
          {/* <img src='https://i.ibb.co/BtMCmxJ/abductors.png' alt='abductors' /> */}
          <h2>Selected Exercise: {exerciseData[0].muscle}</h2>
          <p><ExerciseImage muscle={exerciseData[0].muscle} /></p>


           <span style={{ borderRadius:'2px', margin:'0 10px' ,outline: '.02px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'aliceblue' }}>Difficulty Color Code: </span> <span style={{margin:'0 10px' ,outline: '2px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'lightgoldenrodyellow' }}>Beginner </span> <span style={{margin:'0 10px' ,outline: '2px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'palegreen' }}>Intermediate </span><span style={{margin:'0 10px' ,outline: '2px solid black',boxShadow:'4px 4px 8px 0px rgba(0,0,0,0.75)', color: 'black', backgroundColor: 'lightpink' }}>Expert </span>
          <p></p>
          <Box sx={{ width: '100%',  bgcolor: 'background.paper' }}>
    <List style={{padding: '10px', color:'#0047AB', borderRadius: '5px'  }}>
    {exerciseData && console.log(exerciseData) }
      {exerciseData.map((myEvent) => (
        <ListItem style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor:
        myEvent.difficulty === 'intermediate'
          ? 'lightgoldenrodyellow'
          : myEvent.difficulty === 'beginner'
          ? 'palegreen'
          : 'lightpink'
          }} key={key1 += 1}> {myEvent.name}      <>  <h6 style={{color: 'gray'}}>:                Click→   </h6>   </>
          
          
         
          <PopupState variant="popover" popupId="demo-popup-menu" anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Details
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Type: <h4>{myEvent.type}</h4>   </MenuItem>
            <MenuItem onClick={popupState.close}> <>Equipment Needed: </> <h4>{myEvent.equipment}</h4> </MenuItem>
            <MenuItem onClick={popupState.close}><>Instructions: </> <div style={{ maxHeight: '200px', overflowX: 'hidden', overflowY: 'scroll' }}>
            <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>
            <h4>{myEvent.instructions}</h4>
          </div>
          </div>
          
          </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>

           </ListItem>
        
        
      ))}
    </List>
    </Box>
        </div>
      )}
    </div>
  );
};

export default ExerciseButtons;
