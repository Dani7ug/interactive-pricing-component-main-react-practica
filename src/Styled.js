import Styled,{css} from "styled-components";
import Img from "./images/pattern-circles.svg"
import Slide from "./images/icon-slider.svg"

const Cont = Styled.div`
font-family:'Manrope', sans-serif;
 h2{
 color:hsl(227, 35%, 25%);
}
p{
    color:hsl(225, 20%, 60%);
    font-size:12px;
}
.p{
    font-size:15px;
}
 .page{
    font-size:15px;
    font-weight:800;
    letter-spacing:2px;
}
div h1 span{
    font-size:13px;
    color:hsl(225, 20%, 60%);
}
div h1{
    color: hsl(227, 35%, 25%);
}
b{
    color:hsl(15, 100%, 70%);
    font-size:12px;
    span:nth-child(2){
        @media(max-width:556px){
            display:none;
        }
    }
    span:first-child{
        @media(min-width:556px){
            display:none;
        }
    }
}
input[type=range] {
  display: block;
  -webkit-appearance: none;
  width: 35vh;
  height: 5px;
  border-radius: 5px;
  outline: 0;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: hsl(174, 86%, 45%);
  background-image:url("${Slide}");
  background-size:15px 15px;
  background-repeat:no-repeat;
  background-position:center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
`
const Button = Styled.button`
border:none;
outline:none;
padding:0px 20px;
border-radius:30px;
background:hsl(226, 100%, 87%);
height:23px;
position:relative;
transition:all .3s ease;
    &:hover{
        background:hsl(174, 86%, 45%);
    }
    div{
        width:13px;
        height:13px;
        border-radius:50px;
        background:white;
        position:absolute;
        left:3px;
        right:unset;
        transition:all .2s ease;
    }
    div{
        ${props =>
    props.validate &&
    css`
    left:22px;
    `
    }
    }
`
const ButtonTwo = Styled.button`
border:none;
outline:none;
 background:hsl(227, 35%, 25%);
 font-size:13px;
 border-radius:30px;
 padding:10px 30px;
`;
const List = Styled.div`
margin-top:30px;
ul,div{
    margin:5px 5rem;
}
ul{
    li{
        border:none;
        margin:10px 0;
        padding:0;
    }
}
div{
    display:flex;
    align-items:center;
}
`
const ContText = Styled.div`
    margin-bottom:50px;
    height:150px;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    background-image:url("${Img}") ;
    @media(max-width:556px){
        height:200px;
    }
`
export {Cont,Button,ButtonTwo,List,ContText}