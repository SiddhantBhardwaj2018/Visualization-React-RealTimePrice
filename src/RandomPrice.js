import React,  { useEffect, useState }  from 'react';
import { AreaChart, Area, LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
var startTime = new Date().getTime();

export default function RandomPrice({ min, max }){
    const [prices,setPrices] = useState([])
    const [mode,setMode] = useState(true)
    const [sellOrder,setSellOrder] = useState(false)
    const [intervalId, setIntervalId] = useState(0);
    const [currentTime,setCurrentTime] = useState(0)
    var time = 180;
    const uponClick = () => {
        if(mode === true){
         updatePrices();
         setMode(false);
         setIntervalId(setInterval(() => {
             setCurrentTime(new Date().getTime())
             updatePrices();
         },2000))
     }
 }   
 
    useEffect(() => {
        if(currentTime - startTime > 180000){
            clearInterval(intervalId)
            setTimeout(() => alert("You did not even try "),2000)
        }
    },[currentTime])

    useEffect(() => {
        if(sellOrder){
            if(!mode){
            clearInterval(intervalId)
            const max_value = Math.max.apply(Math, prices.map(function(o) { return o.Price; }))
            let lastPrice = prices.at(-1)
            lastPrice = lastPrice.Price
            if(lastPrice >= max_value){
                alert(`You have won the game !! Hurrah !! The max price is ${max_value} and your selected price was ${lastPrice}`)
                setPrices([])
            }else{
                alert(`BooHoo !! You lost the game !! The max price is ${max_value} and your selected price was ${lastPrice}`)
                setPrices([])
            }
            }else{
                alert("Please start the game before hitting the start button")
            }
        }
    },[sellOrder])

    const updatePrices = () => {
        let minutes = String(Math.floor(time / 60))
        let seconds = time % 60;
        if(seconds < 10){
            seconds = '0' + seconds
        }else{
            seconds = String(seconds)
        }
        let appearance = minutes + ':' + seconds
        let newPrice = {"Price":Math.floor(Math.random() * (max - min + 1)) + min, "Time": appearance};
        setPrices(prevState => [...prevState,newPrice])
        time = time - 2;
    }    
    


    return (
        <div>
            <button onClick = {uponClick} >Start</button>
            <LineChart data={prices} height={250} width={700}>
                <XAxis dataKey="Time"  />
                <YAxis  />
                <Line dataKey = "Price" />
            </LineChart>
           <button onClick = {() => setSellOrder(prevState => !prevState)}>Sell</button> 
        </div>
    )
}

const styles = {
    container: {
      maxWidth: 1000,
      margin: "0 auto",
    },
  };