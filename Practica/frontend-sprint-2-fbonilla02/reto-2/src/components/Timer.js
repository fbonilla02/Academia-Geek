import React, { useEffect, useRef, useState } from 'react'
import { ArticleTime, DivTimer, Ptime } from '../style/TimerStyle'

export default function Timer() {

    const [days, setTimeDays] = useState('00');
      const [hours, setTimeHours] = useState('00')
      const [min, setTimeMin] = useState('00')
      const [sec, setTimeSec] = useState('00')
      // Tomamos la fecha declarada y lo convertimos a ms 
      const  date = new Date('junio 29, 2022 00:00:00').getTime()
      //Usamos UserRef para guardar el estado inicial de interval
    let interval  = useRef()
      const StartTimer = () => {
        //Iniciamos setInterval para que reste cada 1000ms = 1seg
        interval = setInterval(()=>{
          //Creamos una fecha actual y la convertimos a ms
          const actual = new Date().getTime()
          const diferencia = date - actual;
          //Calculos para convertir cada valor
          const days = Math.floor(diferencia / (1000 * 60 * 60* 24))
          const hours = Math.floor(diferencia % (1000 * 60 * 60* 24) / (1000 * 60 * 60))
          const minute = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((diferencia % (1000 * 60)) / 1000)

          if(diferencia < 0){
            //en caso de que la diferencia sea 0 limpiamos el intervalo para que no cuente en numero negativo
            clearInterval(interval.current)
          }else{
            //le asignamos la variable de los dias a los estados
            setTimeDays(days)
            setTimeHours(hours)
            setTimeMin(minute)
            setTimeSec(seconds)
          }
        }, 1000)
      }
      //Limpiamos el interval para que no genere bugs visuales
    
      useEffect(()=>{
        StartTimer()
        return() =>{
          clearInterval(interval.current)
        }
      } ,[])
  return (
    <DivTimer>
      <div>
        <ArticleTime>
          {days}
        </ArticleTime>
          <Ptime>DAYS</Ptime>
      </div>

      <div>
        <ArticleTime>
          {hours}
        </ArticleTime>
        <Ptime>HOURS</Ptime>
      </div>

      <div>
        <ArticleTime>
          {min}
        </ArticleTime>
        <Ptime>MINUTES</Ptime>
      </div>

      <div>
        <ArticleTime>
          {sec}
        </ArticleTime>
        <Ptime>SECONDS</Ptime>
      </div>

    </DivTimer>
  )
}
