import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './UserCard'
import TimeCard from './TimeCard'

function App() {

  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col">
          <UserCard nombre='Jeremy Robson' imagen='url(../images/image-jeremy.png)' />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              <TimeCard actividades='Work' horas="32hrs" informacion="Last Week - 36hrs" fondo="hsl(15, 100%, 70%)" icon="url(../images/icon-work.svg)" />
            </div>
            <div className="col-4">
              <TimeCard actividades='Play' horas="10hrs" informacion="Last Week - 8hrs" fondo="hsl(195, 74%, 62%)" icon="url(../images/icon-play.svg)" />
            </div>
            <div className="col-4">
              <TimeCard actividades='Study' horas="4hrs" informacion="Last Week - 7hrs" fondo="hsl(348, 100%, 68%)" icon="url(../images/icon-study.svg)" />
            </div>
            <div className="col-4">
              <TimeCard actividades='Exercise' horas="4hrs" informacion="Last Week - 5hrs" fondo="hsl(145,58%,55% )" icon="url(../images/icon-exercise.svg)" />
            </div>
            <div className="col-4">
              <TimeCard actividades='Social' horas="5hrs" informacion="Last Week - 10hrs" fondo="hsl(264, 64%, 52%)" icon="url(../images/icon-social.svg)" />
            </div>
            <div className="col-4">
              <TimeCard actividades='Self Care' horas="2hrs" informacion="Last Week - 2hrs" fondo="hsl(43, 84%, 65%)" icon="url(../images/icon-self-care.svg)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
