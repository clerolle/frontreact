"use client"
import ResponsiveAppBar from '@/components/appbar/AppBar';
import ReviewCard from '@/components/card/Card';
import React, { useState, useEffect } from 'react'

function Company() {

  const [info, setInfo] = useState([]);
  // console.log(info);
  // Redux
  // const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch("http://localhost:8080/company/test12345")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInfo(data);
        // dispatch(getInfo(data.data));
      });
  },[])
  return (
    <>
        <ResponsiveAppBar/>
        <ReviewCard info={info} key={info.nit}/>
    </>
  )
}

export default Company;