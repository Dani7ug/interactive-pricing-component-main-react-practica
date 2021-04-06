import React,{useState} from "react"
import { Cont,Button,ButtonTwo, List,ContText} from "./Styled";
import Check from "./images/icon-check.svg";

function App() {
  const [campo,setCampo] = useState({month:36,pageviews:"1M",positon:4});
  const [bool,setBool] = useState(false)
  let months = !bool ?  [8,12,16,24,36] : [6,9,12,18,27];
  let pagesViews = ["10K","50k","100K","500K","1M"];
  function range(e){
    const values = Number(e.target.value);
    setCampo({month:months[values],pageviews:pagesViews[values],positon:values});
  }
  function click (){
    setBool(!bool);
    if(!bool){
      setCampo({...campo,month:75*campo.month/100});
    }else{
      months = [8,12,16,24,36];
      setCampo({...campo,month:months[campo.positon]});
    }
  }

  return (
    <Cont className="container vh-100 w-100 d-flex justify-content-center align-items-center flex-column">
      <ContText className="d-flex flex-column justify-content-center">
      <h2 className="text-center mb-3">Simple, traffic-based pricing</h2>
      <p className=" text-center p ">Sign-up for our 30-day trial. No credit card required.</p>
      </ContText>
      <div className="d-flex align-items-center mb-4">
        <p className="m-0 mx-4 col-md-6 page">{campo.pageviews} PAGEVIEWS</p>
        <h1 className="m-0 ml-2 col-md-6 d-flex align-items">${campo.month}.00 <span className="d-flex align-items-center mx-2">/month</span></h1>
      </div>
      <input type="range" className=" " min="0" max="4"  onChange={range}></input>
      <div className="d-flex flex-row mt-4 align-items-center justify-content-center">
        <p className="mx-2 my-0 text-center">Monthly Billing</p>
        <Button  className="mx-2 my-0 d-flex align-items-center" onClick={click} validate={bool}><div></div></Button>
        <p  className="mx-2 my-0 text-center">Yearly Billing</p>
        <b  className="mx-2 my-0 text-center"><span>-</span>25% <span>descount</span></b>
      </div>
      <List className="row mt-4 d-flex justify-content-center">
        <ul className="list-group">
          <li className="list-group-item "><p className="m-0"><img src={Check} alt="" className="mx-2"/>Unlimited websites</p></li>
          <li className="list-group-item"><p className="m-0"><img src={Check} alt="" className="mx-2"/>100% data ownership</p></li>
          <li className="list-group-item"><p className="m-0"><img src={Check} alt="" className="mx-2"/>Email reports</p></li>
        </ul>
        <div className=" text-center">
          <ButtonTwo className=" text-white px-4 py-2 mt-2">Start mu trial</ButtonTwo>
        </div>
      </List>
    </Cont>
  );
}

export default App;
