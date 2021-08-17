import React,{useState} from 'react'

const WithCounter = (WrappedComponent) =>function WithCounter(props) {
    const [count,setCount] = useState(0)

    const handleIncreament=()=>{
        setCount(prev=>prev+1)
    } 

    return (
        <>
           <WrappedComponent increament={handleIncreament} count ={count} {...props}/> 
        </>
    )
}

export default WithCounter
