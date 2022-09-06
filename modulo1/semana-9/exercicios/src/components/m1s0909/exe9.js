// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }

import React, { useState, useEffect, useRef} from 'react';
function Exe9() {
    const timerID = useRef()
    const [date,setDate] = useState()
    

    useEffect(()=>{
        timerID.current = setInterval(()=>
        tick()
        ,1000)
    },[])

    useEffect(()=>{
        return ()=>{
            clearInterval(timerID.current)
        }
    })

    function tick(){
      setDate(new Date().toDateString());
    }
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date}.</h2>
        </div>
    );

}
export default Exe9;
