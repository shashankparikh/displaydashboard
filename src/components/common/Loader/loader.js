import React,{useState,useEffect} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {LoaderContainer} from './style'

export default  ()=>(WrappedComponent) => {
    const InjectLoader=(props)=>{
     const [showLoader,setShowLoader] = useState(false);
    useEffect(()=>{
        if(typeof window !== 'undefined'){
        window.showGlobalLoader=(bool)=>{
            setShowLoader(bool)
        }
    }
},[])

   return  (<>
    {showLoader && 
         <LoaderContainer>
              <CircularProgress color="secondary" />     
        </LoaderContainer>}
        <WrappedComponent {...props}/>
         </>
     )
    }
    return InjectLoader;
}
