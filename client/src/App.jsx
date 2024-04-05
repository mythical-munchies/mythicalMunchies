import "./App.css";
import { Route, Routes } from "react-router-dom";
import AccountTab from "./components/AccountTab";
import Nav from "./components/Nav";
import ContactTab from "./components/ContactTab";
import HomeTab from "./components/HomeTab";
import SearchBar from "./components/SearchBar";
import CategoryData from "./Data.json";
import Worlds from "./components/Worlds";
import SingleWorld from "./components/SingleWorld";
import SingleRecipe from "./components/SingleRecipe";
// import Login from './components/Login'
import Logo from "./components/icons/cauldronyellow.png";
import DogWarts from './components/DogWarts';
import BottomsUp from './components/BottomsUp';
import Dessert from './components/Dessert';
import Vegetables from './components/Vegetables';
import Footer from "./components/Footer";
// >>>>>>> main

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
        {/* <Login /> */}
      </div>


			<Nav />
			<Routes>
				<Route path='/' element={<HomeTab />} />
				<Route path='/worlds' element={<Worlds />} />
				<Route path='/contact' element={<ContactTab />} />
				{/* ONLY SHOW THE ACCOUNT TAB IF A USER IS LOGGED IN - fix later once modules are coded in */}
				<Route path='/account' element={<AccountTab />} />
				<Route path='/single-world' element={<SingleWorld />} />
				<Route path='/single-recipe' element={<SingleRecipe />} />
				<Route path='/dogwarts' element={<DogWarts />} />
				<Route path='/bottoms-up' element={<BottomsUp />} />
				<Route path='/desserts' element={<Dessert />} />
				<Route path='/veggie-gardens' element={<Vegetables />} />


        {/* <Route path="/test" element={<Test/>}/> */}
        {/* <Route path="/my-reviews" element={<MyReviews/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
