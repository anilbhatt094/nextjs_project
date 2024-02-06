import React, {useState} from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";
import "../../public/css/admin/main.css";

const menu = () => {
  const [MainMenuisActive, setMainMenuisActive] = useState(false);
  const [SubMenuisActive, setSubMenuisActive] = useState(false);
  const [SelectedMainMenu , SetSelectMainMenu]= useState<string | null>(null);
  const [SelectedSubMenu , SetSelectedSubMenu]= useState<string | null>(null); 
  const handleMainMenuClick=()=>{ setMainMenuisActive(!MainMenuisActive)};
  const handleSubMenuClick=()=>{setSubMenuisActive(!SubMenuisActive)};

  const hideMainMenu=(item:string)=>{
    SetSelectMainMenu(item);
    hideDropdown();
  };


  const hideDropdown = ()=>{
    setMainMenuisActive(false);
    setSubMenuisActive(false);
  }

  const hideSubMenu=(item:string)=>{
    SetSelectedSubMenu(item);
    hideDropdown();
  };

  const handleMenuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSelectMainMenu(e.target.value);
  };

  const handleSubMenuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSelectedSubMenu  (e.target.value);
  };

  return (
    <section className="dFlex">
      {/*start here sidebar*/}
      <aside>
        <Sidebar />
      </aside>
      {/*end here sidebar*/}
      <section className="w100">
        {/*start here header*/}
        <article>
          <Header name="Header Menu" />
        </article>
        {/*end here header*/}
        {/*Start here menu add*/}
       
        <section className="containerFluid">
          <div className="gridTwolarge-section">
            <div className="gridmid-box">
            <table>
            <thead>
              <tr>
                <th className="primary-font">S.No</th>
                <th className="primary-font">Main Menu</th>
                <th className="primary-font">Sub Menu</th>
                <th className="primary-font">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="textLeft">1</td>
                <td className="textLeft">Main Menu</td>
                <td className="textLeft">Sub Menu</td>
                <td className="textCenter"><button className="primarybtn">Edit</button> <button className="dangerbtn">Delete</button></td>
              </tr>
           
            </tbody>
          </table>
            </div>
            <div className="gridside-box">
           
          <div className="borderall pall10">
            <div className="textRight borderBottom">
            <button className="primarybtn mb10">Save</button>
            </div>
            <div className="mall5">
              <form>
                <div className="wdInput mt10 positionRelative" onClick={handleMainMenuClick}>
                  <input className="w100 pall10" type="text" placeholder="Select Menu" value={SelectedMainMenu ?? ""} onChange={handleMenuChange}/>
                  <i className="arrow down"/>
                  {MainMenuisActive &&
                  <div className="selectList">
                    <ul>
                      <li onClick={()=> hideMainMenu('Menu 1')}>Menu 1</li>
                      <li onClick={()=> hideMainMenu ('Menu 2')}>Menu 2</li>
                      <li onClick={ ()=> hideMainMenu ('Menu 3')}>Menu 3</li>
                      <li onClick={()=> hideMainMenu ('Menu 4')}>Menu 4</li>
                    </ul>
                  </div>
}
                </div>
                <div className="wdInput mt10 positionRelative" onClick={handleSubMenuClick}>
                  <input className="w100 pall10" type="text" placeholder="Select Sub Menu" value={SelectedSubMenu ?? ""} onChange={handleSubMenuChange}/>
                  <i className="arrow down"/>
                  {SubMenuisActive &&
                  <div className="selectList">
                    <ul>
                      <li onClick={()=> hideSubMenu('Sub Menu 1')}>Sub Menu 1</li>
                      <li onClick={()=> hideSubMenu ('Sub Menu 2')}>Sub Menu 2</li>
                      <li onClick={()=> hideSubMenu ('Sub Menu 3')}>Sub Menu 3</li>
                      <li onClick={()=> hideSubMenu ('Sub Menu 4')}>Sub Menu 4</li>
                    </ul>
                  </div>
}
                </div>
                <div className="wdInput mt10 positionRelative">
                  <textarea className="w100 pall10" placeholder="Enter Main Menu Title"></textarea>
                
                </div>
                <div className="wdInput mt10 positionRelative">
                  <textarea className="w100 pall10" placeholder="Enter Main Menu Description"></textarea>                
                </div>
                <div className="wdInput mt10 positionRelative">
                  <textarea className="w100 pall10" placeholder="Enter Sub Menu Title"></textarea>
                
                </div>
                <div className="wdInput mt10 positionRelative">
                  <textarea className="w100 pall10" placeholder="Enter Sub Menu Description"></textarea>                
                </div>
              </form>
            </div>
          </div>
            </div>

          </div>
        
        
        </section>
        {/*End here menu add*/}

        {/*start here footer*/}
        <article>
          <Footer />
        </article>
        {/*start here footer*/}
      </section>
      
    </section>
  );
};
export default menu;