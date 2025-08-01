import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mianpage = () => {
    const[data,setData]=useState()
    const[search,setSearch]=useState("")
    const[msg,setMsg]=useState("")

    const handleInput=(event)=>{
        setSearch(event.target.value)
    }
    const myFun = async () =>{
        if(search==""){
            setMsg("Please Enter Something")
        }
        else{
            const get= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData= await get.json()
       // console.log(jsonData.meals);
        setData(jsonData.meals);
       // console.log(data)
        setMsg("")
        }
       
    }
  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div className='container'>
        <div className='searchBar'>
            <input type="text" placeholder='Enter Dish' onChange={handleInput}/>
            <button onClick={myFun}>Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
        <div>
            <Mealcards detail={data}></Mealcards>
        </div>
    </div>
    </>
  )
}

export default Mianpage