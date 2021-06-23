import styled from 'styled-components'
import {FaBackspace} from 'react-icons/fa'

export const Container= styled.div`
    background-color: #EB7F7F;
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    padding:0;
    margin:0;
    box-sizing:border-box;
    overflow: hidden;
`
export const CalcWrapper= styled.div`
&::before{
    position: fixed;
    top: -390px;
    content:'';
    border: 500px #F2B5B0 solid;
    transform:rotate(65deg);
    height:1600px;
    width: auto;
    z-index: -1;
    
}
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 750px;
    background: #FFFFFF;
    
    text-align: center;
    margin: 128px auto;
    border-radius: 60px;
    /* padding-bottom: 32px; */
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);

    @media screen and (max-height:900px){
        top:-5rem;
        
    }

    @media screen and (max-height:810px){
        height:90%;
        
    }
    @media screen and (max-height:560px){
        overflow: auto;
        
    } 
`

export const Calc= styled.div`
    justify-content: start;
    align-items:center;
`

export const CalcDisplay= styled.div`
    height:220px;
    
    
    display: flex;
    flex-direction: column;
    background-color: #F2B5B0;
    border-radius: 60px 60px 0 0;

    @media screen and (max-height:730px){
        height: 40%;
        
    } 
    @media screen and (max-height:625px){
        height: 30%;
        
    } 
`

export const Screen= styled.div`
    position: relative;
    top: 145px;
    justify-content: flex-end;
    padding: 10px;
    margin:0;
    text-align:right;
    align-items: center;  
    color: #FFFFFF;
    font-size: 50px;
    overflow-x: hidden;
    max-width: 450px;

    @media screen and (max-height:640px){
        top:110px;
        
    } 
    @media screen and (max-height:625px){
        top:60px;
        
    } 
`

export const CalcInput= styled.div`
    padding: 5px 10px 20px 10px;
    
   
    
`


export const CalcButtonRow= styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px auto;
    @media screen and (max-height:810px){
        margin: 20px auto;
        
    }
    @media screen and (max-height:770px){
        margin: 18px auto;
    }
    @media screen and (max-height:760px){
        margin: 17px auto;
        
    }
    
    @media screen and (max-height:750px){
        margin: 15px auto;
        
    }
    @media screen and (max-height:740px){
        margin: 12px auto;
        
    }

    @media screen and (max-height:730px){
        margin: 15px auto;
        
    }
    @media screen and (max-height:695px){
        margin: 10px auto;
        
    }
    @media screen and (max-height:663px){
        margin: 10px auto;
        
    } 
    @media screen and (max-height:640px){
        margin: 10px auto;
        
    } 
    @media screen and (max-height:640px){
        margin: 8px auto;
        
    } 
`

export const Buttons= styled.button`
text-align: center;
    background-color: #FFFFFF;
    border: 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.15);
    height: 60px;
    width: 60px;
    color:#848484;
   font-size: 18px;
   font-weight: 510;
    
    
    border-radius: 50%;

    &:hover{
        color:#FFFFFF;
        background-color:#F2B5B0;
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }
    &:active{
        background-color:#EB7F7F;
        transition: ease-in-out 0.1s;
    }
    @media screen and (max-height:640px){
        height: 55px;
        width: 55px;
        
    } 
    
`
export const FnButtons= styled.button`
text-align: center;
    background-color: #FFFFFF;
    border: 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.15);
    height: 60px;
    width: 60px;
    color:#EB7F7F;
   font-size: 18px;
   font-weight: 530;
    
    
    border-radius: 50%;

    &:hover{
        color:#FFFFFF;
        background-color:#848484;
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }
    &:active{
        background-color:#F2B5B0;
        transition: ease-in-out 0.1s;
    }
    @media screen and (max-height:640px){
        height: 55px;
        width: 55px;
        
    } 
`
export const ClrButton= styled.button`
text-align: center;
    background-color: #FFFFFF;
    border: 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.15);
    height: 60px;
    width: 60px;
    color:#EB7F7F;
   font-size: 18px;
   font-weight: 530;
    
    
    border-radius: 50%;

    &:hover{
        color:#FFFFFF;
        background-color:#EB7F7F;
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }
    &:active{
        background-color:#F2B5B0;
        transition: ease-in-out 0.1s;
    }
    @media screen and (max-height:640px){
        height: 55px;
        width: 55px;
        
    } 
`

export const EqButton= styled.button`
    background-color: #EB7F7F;
    border: 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 8px 8px rgba(0,0,0,0.11), 
              0 16px 16px rgba(0,0,0,0.11), 
              0 32px 32px rgba(0,0,0,0.11);
    padding: 18px 60px ;
    margin: 2px 0px;
    border-radius: 35px;
    color:#FFFFFF;
    font-size: 18px;
    font-weight: 510;

    &:hover{
        color:#848484;
        background-color:#FFFFFF;
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }
    &:active{
        background-color:#EB7F7F;
        transition: ease-in-out 0.1s;
        color:#FFFFFF;
    }
    
`
export const BackIconBtnRow = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 30px auto;
    /* @media screen and (max-height:810px){
        margin: 18px auto;
        
    }
    @media screen and (max-height:770px){
        margin: 22px auto; */
        
    
    @media screen and (max-height:750px){
        margin: 20px auto;
        
    }
    
    @media screen and (max-height:750px){
        margin: 25px auto;
        
    }
    @media screen and (max-height:695px){
        margin: 22px auto;
        
    }
    @media screen and (max-height:663px){
        margin: 20px auto;
        
    } 
    
    @media screen and (max-height:640px){
        margin: 18px auto;
        
    } 

`

export const BackIconBtn = styled.button`
    
    
    background-color: #eb7f7f;
    border: 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
    padding: 8px 30px;
    margin-top: -18px ;
    margin-bottom:-12px;
    margin-left:10px;
    border-radius: 35px;
    color: #ffffff;
    

  font-weight: 510;

  &:hover{
        color:#FFFFFF;
        background-color:#848484;
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }
    &:active{
        background-color:#F2B5B0;
        transition: ease-in-out 0.1s;
    }
`;

export const BackIcon= styled(FaBackspace)`
transform: rotate(180deg);
   font-size: 20px;
   height: 100%;
`





















