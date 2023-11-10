import React, { useEffect, useState } from 'react'
import TestUseState from '../useState/TestUseState';

const TestUseEffect = () => {
    const [state, setState] = useState({
        count: 0,
        theme: "blue",
    })

    useEffect(() => {
        console.log("mounted");
    }, [state.theme])

  return (
    <div>
        <h1>UseEffect Testing</h1>
        <button onClick={() => setState((preState) => { return { ...preState, count: preState.count+1 }})}>{state.count}</button>
        <button style={{ backgroundColor: `${state.theme}`, color: "whitesmoke"}} onClick={() => setState((preState) => { return { ...preState, theme: "black" }})}>{state.theme}</button>
        <TestUseState />
    </div>
  )
}

export default TestUseEffect
