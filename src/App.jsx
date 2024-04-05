import './App.css'
import { Route, Routes } from 'react-router-dom'
import AccountTab from './client/components/AccountTab'
import Nav from './client/components/Nav'
import ContactTab from './client/components/ContactTab'
// import RecipesTab from './components/RecipesTab'
import HomeTab from './client/components/HomeTab'
import SearchBar from './client/components/SearchBar'
import CategoryData from "./Data.json"
import Worlds from "./client/components/Worlds"
import SingleWorld from "./client/components/SingleWorld"
import SingleRecipe from './client/components/SingleRecipe'
// import Login from './components/Login'
import Logo from './client/components/icons/cauldronyellow.png'
// import Test from './client/components/Test'
import DogWarts from './client/components/DogWarts'
import BottomsUp from './client/components/BottomsUp'
import Dessert from './client/components/Dessert'
import Vegetables from './client/components/Vegetables'



function App() {
  return (
    <>
    <div className='persistent-header'>
      <div className='logo-title'>
      <h2><img id='logo-image' src={Logo}></img>Mythical Munchies</h2>
      </div>
      <SearchBar placeholder="Explore Worlds..." data={CategoryData}/>
      {/* <Login /> */}
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
      <Route path="/dogwarts" element={<DogWarts/>}/>
      <Route path="/bottoms-up" element={<BottomsUp/>}/>
      <Route path="/desserts" element={<Dessert/>}/>
      <Route path="/veggie-gardens" element={<Vegetables/>}/>
    
      {/* <Route path="/test" element={<Test/>}/> */}
      {/* <Route path="/my-reviews" element={<MyReviews/>}/> */}
    </Routes>
    </>
  );
}

export default App;
