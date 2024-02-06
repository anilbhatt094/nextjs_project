import React, {useState} from "react";
import "../../public/css/frontend/searchWidget.css";
function SearchWidget() {
 
  const [flyingFrom  , setFlyingFrom]= useState("Where do you want to fly from");
  const [flyingTo , setFlyingTo]=useState("Where you want to fly to?");
  const [inputactiveadd , setinputactiveadd] = useState(null);
  const handleFlyingForm =(event:any)=>{
    const setFlyingtext = event.target.value.trim();
    if (setFlyingtext !== '') {
      setFlyingFrom("Flying From");
    } else {
      setFlyingFrom('Where do you want to fly from');
    }
  }

  const handleFlyingTo = (event:any)=>{
    const setFlyingToText = event.target.value.trim();
    if(setFlyingToText !==''){
      setFlyingTo("Flying To");
    }else{
      setFlyingTo("Where you want to fly to?")
    }
    }

    const handleInputClick = (inputId:any) => {
      setinputactiveadd(inputId);
    }
    return (
        <>
         <div className="searchWidget">
              <div className="searchWidgetTab">
              <ul className="dFlex gap30">
                <li className="positionRelative active">Flights</li>
                <li className="positionRelative">Hotels</li>
                <li className="positionRelative">Packages</li>
                <li className="positionRelative">Transfers</li>
              </ul>
              </div>
              <div className="searchwidgetresult mt30 bg-seconday-color secondaryboxShadow borderradius25">
                <div className="searchWidgetshow flightSearchWidget">
                  <div className="flightSearchWidgetHeader dFlex gap20 pall20 borderBottom">
                    <ul className="tripsection dFlex gap10 positionRelative">
                      <li className="py10 px30 borderradiusfull primary-font active">Round Trip</li>
                      <li className="py10 px30 borderradiusfull primary-font">One-Way</li>
                    </ul>
                    <ul className="businessClassGuest dFlex gap10 positionRelative">
                        <li className="py10 pr30 pl10 borderradiusfull primary-font positionRelative">Economy <i className="arrow down"></i></li>
                        <li className="py10 pr30 pl10 borderradiusfull primary-font positionRelative">01 Guests <i className="arrow down"></i></li>
                    </ul>
                  </div>
                  <div className="searchWidgetForm dFlex w100 alignItemCenter py10">
                    <div className="searchWidgetinput w100 positionRelative">
                      <input type="text" className={inputactiveadd === 'input1' ? 'px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull active' : 'px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull '}  placeholder="Flying from" onClick={() => handleInputClick('input1')} onChange={()=>handleFlyingForm(event)}/>
                      <p className="primary-font text-default-color">{flyingFrom}</p>
                    </div>
                    <div className="searchWidgetinput w100 positionRelative">
                      <input type="text" className={inputactiveadd === 'input2' ? 'px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull active' : 'px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull '} placeholder="Flying to" onClick={() => handleInputClick('input2')} onChange={()=>handleFlyingTo(event)} />
                      <p className="primary-font text-default-color">{flyingTo}</p>
                    </div>
                    <div className="searchWidgetinput w100 positionRelative">
                      <input type="text" className="px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull" placeholder="May 01 - May 16"/>
                      <p className="primary-font text-default-color"><span>Pick up</span> - <span>Drop Off</span></p>
                    </div>
                    <div className="searchWidgetinput w20">
                      <button className="borderradius50 bg-primary-color text-seconday-color"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    
    );
};
export default SearchWidget;