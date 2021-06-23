import React, {useState} from 'react'

import {
  CalcWrapper,
  Container,
  Calc,
  CalcButtonRow,
  CalcDisplay,
  Buttons,
  Screen,
  CalcInput,
  FnButtons,
  ClrButton,
  EqButton,
  BackIconBtn,
  BackIconBtnRow,
  BackIcon
} from "./CalculatorElements";
const Calculator = () => {
  
  var [display,setDisplay] = useState('')


 
  console.log(display);






  const Backspace=()=>{
    var i=display.length;
    if(i>=0)
      setDisplay(
        display.slice(0,i-1)
      )
    
  }
  const Evaluate=()=>{
   
    if(display!==''){
      setDisplay(eval(display));
    }
  }
// var d=display.search('.')
//   const Decimal = () =>{
//     if(d===-1){
//       setDisplay(display + '.');
//       d=d-1;
//     }
//   }
// console.log(d);
  // const Brackets=(prev)=>{
  //   var l=0;
  //   var r=0;
  //   var dis= display.split('');
  //   var check=0;

  //   for(let i=0;i<=dis.length; i++){
  //     if(dis[i]==='('){
  //       l=l+1;
        
  //     }
  //   }

  //   for(let i=0;i<=dis.length; i++){
  //     if(dis[i]===')')
  //     r=r+1;
  //   }

    
 
    
  //   if(r===l || l===0 ){
  //     setDisplay(display+'(');
  //     check=0;
      
  //   }
  //   if(l>r ){
  //     setDisplay(display+')');
  //   }
  //   console.log(l,r)
  // }

    return (
      <>
        <Container>
         
          <CalcWrapper>
            <Calc>
              <CalcDisplay>
                <Screen type='text'>{display}</Screen>
              </CalcDisplay>
              <CalcInput>
                
                <BackIconBtnRow>
                <BackIconBtn className="Backspace" onClick={Backspace}>
                  <BackIcon />
                </BackIconBtn>
                </BackIconBtnRow>
                
                <CalcButtonRow>
                <ClrButton className="Clear" onClick={() => setDisplay("")}>
                C
                  </ClrButton>
                  <FnButtons classname="LBrackets" onClick={() => setDisplay(display + '(') }>(</FnButtons>
                  <FnButtons className="Divide"  onClick={() => setDisplay(display + '/')}>/ </FnButtons>
                  <FnButtons className="RBrackets" onClick={() => setDisplay(display + ')')}> ) </FnButtons>
                  
                    
                </CalcButtonRow>
                <CalcButtonRow>
                  <Buttons onClick={() => setDisplay(display + 7)}>7</Buttons>
                  <Buttons onClick={() => setDisplay(display + 8)}>8</Buttons>
                  <Buttons onClick={() => setDisplay(display + 9)}>9</Buttons>
                  <FnButtons className="Multiply"  onClick={() => setDisplay(display + '*')}>*</FnButtons>
                </CalcButtonRow>
                <CalcButtonRow>
                  <Buttons onClick={() => setDisplay(display + 4)}>4</Buttons>
                  <Buttons onClick={() => setDisplay(display + 5)}>5</Buttons>
                  <Buttons onClick={() => setDisplay(display + 6)}>6</Buttons>
                  <FnButtons className="Subtract"  onClick={() => setDisplay(display + '-')}>-</FnButtons>
                </CalcButtonRow>
                <CalcButtonRow>
                  <Buttons onClick={() => setDisplay(display + 1)}>1</Buttons>
                  <Buttons onClick={() => setDisplay(display + 2)}>2</Buttons>
                  <Buttons onClick={() => setDisplay(display + 3)}>3</Buttons>
                  <FnButtons className="Add"  onClick={() => setDisplay(display + '+')}>+</FnButtons>
                </CalcButtonRow>
                <CalcButtonRow>
                  <Buttons className="Decimal"  onClick={() => setDisplay(display + '.')}>.</Buttons>
                  <Buttons onClick={() => setDisplay(display + 0)}>0</Buttons>
                  <EqButton className="Equal"  onClick={Evaluate}>=</EqButton>
                </CalcButtonRow>
              </CalcInput>
            </Calc>
          </CalcWrapper>
        </Container>
      </>
    );
}

export default Calculator
