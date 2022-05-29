import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Timer = () => {
const[timer,setTimer]=useState(0)

useEffect(()=>{
 let id= setInterval(()=>{

  if(timer>100){
    // clearInterval(id);
  }else{
    setTimer(timer+1);
  }
  },1000);

  return()=>{
    //call a api to inform that user has logged oyt
    clearInterval(id);
  };
  //component is unmounting
},[])
 

  return (
    <div>
      Count Down:{timer}
     
      </div>
  )
}

export default Timer