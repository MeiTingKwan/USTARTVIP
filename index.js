import React, { Component } from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      operand_1:" ",
      operand_2:" ",
      result: 0,
      message:" "
    };
  }

  choseinputs=(e)=>{
    if (e.target.id === "operand1") {
      this.state.operand_1 = e.target.value;
    }
    else {
      this.state.operand_2 = e.target.value;
    }
  }

  calculate=(e)=>{
    if (e.target.value === "+"){
      this.state.result = parseInt(this.state.operand_1) + parseInt(this.state.operand_2);
    } else if (e.target.value === "-"){
      this.state.result  = parseInt(this.state.operand_1) - parseInt(this.state.operand_2);
    } else if (e.target.value === "*"){
      this.state.result = parseInt(this.state.operand_1) * parseInt(this.state.operand_2);
    } else if (e.target.value === "/"){
        if(this.state.operand_2 === "0"){
          this.state.result  = "Divide By Zero Error";
        } else {
          this.state.result = parseInt(this.state.operand_1) / parseInt(this.state.operand_2);
        }
    }

    this.setState({message:this.state.operand_1 + e.target.value + this.state.operand_2 + " = " + this.state.result})
    this.render()
  }

  render() {

    const titlestyle = {
     color: "white",
     backgroundColor: "lightblue",
     padding: "25px",
     fontFamily: "Trebuchet MS",
     alignItems: 'center'
   };

   const buttonstyle = {
    color: "#2987fa",
    fontSize: "20px",
    borderRadius: '7px',
    background: 'white',
    fontFamily: "Trebuchet MS"
  };

  const fontstyle = {
   color: "#2987fa",
   fontSize: "20px",
   fontFamily: "Trebuchet MS"
 };

  return (
      <div style={titlestyle} className="Calculator">
         <h1> Simple React Calculator</h1>
             <input style={fontstyle} id = "operand1" onChange={this.choseinputs}/>
             <br />
             <input style={fontstyle} id = "operand2" onChange={this.choseinputs}/>
             <br />
             <button style={buttonstyle} value="+" onClick={this.calculate}> + </button>
             <button style={buttonstyle} value="-" onClick={this.calculate}> - </button>
             <button style={buttonstyle} value="*" onClick={this.calculate}> * </button>
             <button style={buttonstyle} value="/" onClick={this.calculate}> / </button>
             <br />
         <div style={fontstyle} > Result:{this.state.message} </div>

        </div>
   );

  }

}

export default Calculator;
