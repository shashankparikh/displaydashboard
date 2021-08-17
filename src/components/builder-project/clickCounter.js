import React from 'react'
import WithCounter from '../../containers/HighOrderComponent/withCounter';

const ClickCounter = (props) => {
    const {increament,count} = props;

    return (<button onClick={increament}>Click {count} times</button>)
}

export default WithCounter(ClickCounter)
