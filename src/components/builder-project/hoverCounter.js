import React from 'react'
import WithCounter from '../../containers/HighOrderComponent/withCounter';

const HoverCounter = (props) => {
    const {increament,count} = props;

    return (
         <div>
          <h3 onMouseOver={increament}>Hovered {count} times.</h3>  
         </div>
    )
}

export default WithCounter(HoverCounter)
