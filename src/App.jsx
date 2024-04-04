import "./App.css";
import { Route, Routes } from "react-router-dom";
import AccountTab from "./client/components/AccountTab";
import Nav from "./client/components/Nav";
import ContactTab from "./client/components/ContactTab";

import HomeTab from "./client/components/HomeTab";
import SearchBar from "./client/components/SearchBar";
import CategoryData from "./Data.json";
import Worlds from "./client/components/Worlds";
import SingleWorld from "./client/components/SingleWorld";
import SingleRecipe from "./client/components/SingleRecipe";
import Logo from './client/components/icons/cauldronyellow.png'



function App() {
  return (
    <>
      <div className="persistent-header">
        <div className="logo-title">
          <h2>
            <img id="logo-image" src={Logo}></img>Mythical Munchies
          </h2>
        </div>
        <SearchBar placeholder="Explore Worlds..." data={CategoryData} />
 
      </div>

      <SearchBar placeholder="Explore Worlds..." data={CategoryData}/>
    </div>
   
    <Nav/>
    <Routes>
      <Route path="/" element={<HomeTab/>}/>
      <Route path="/worlds" element={<Worlds/>}/>
      <Route path="/contact" element={<ContactTab/>}/>
      {/* ONLY SHOW THE ACCOUNT TAB IF A USER IS LOGGED IN - fix later once modules are coded in */}
      <Route path="/account" element={<AccountTab/>}/>
      <Route path="/single-world" element={<SingleWorld/>}/>
      <Route path="/single-recipe" element={<SingleRecipe/>}/>
   
    </Routes>

    </>
  );
}

export default App;
