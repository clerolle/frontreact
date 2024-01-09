"use client";
import styles from './page.module.css';
import ResponsiveAppBar from '@/components/appbar/AppBar';
import NewLogin from '@/components/login/NewLogin';
import SwipeableTextMobileStepper from '@/components/stepper/Stepper';
import { Grid, Link } from '@mui/material';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div>
        <ResponsiveAppBar/>
        <h1 style={{margin: "2em auto", textAlign: "center", color: "white "}}>BIENVENIDO A LITE COMPANY</h1>
        <NewLogin/>
      </div>
    </main>
  )
}
