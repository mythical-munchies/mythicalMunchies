import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AccountTab from "./components/AccountTab";
import Bookmarks from "./components/Bookmarks";
import BottomsUp from "./components/BottomsUp";
import CategoryData from "./Data.json";
import ContactTab from "./components/ContactTab";
import Dessert from "./components/Dessert";
import DogWarts from "./components/DogWarts";
import Footer from "./components/Footer";
import HomeTab from "./components/HomeTab";
import Literature from "./components/Literature";
import Login from "./components/Login";
import Logo from "./icons/cauldronyellow.png";
import MythicalMunchiesFAQ from "./components/FAQ";
import MyReviews from "./components/MyReviews";
import Nav from "./components/Nav";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SearchBar from "./components/SearchBar";
import SignUp from "./components/SignUp";
import SingleRecipe from "./components/SingleRecipe";
import SingleWorld from "./components/SingleWorld";
import Vegetables from "./components/Vegetables";
import Worlds from "./components/Worlds";
import Error404 from "./components/Error404";

import { useEffect, useState } from "react";

function App() {
  const [worlds, setWorlds] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [auth, setAuth] = useState([]);
  const [review, setReview] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchWorlds = async () => {
      const response = await fetch(
        "https://mythicalmunchies.onrender.com/mythicalMunchies/worlds/"
      );
      const json = await response.json();
      console.log(json);
      setWorlds(json);
    };
    fetchWorlds();
  }, []);

  return (
    <>
      <div className="persistent-header">
        <h2 className="logo-title-main">
          <img id="logo-image" src={Logo} />
          Mythical Munchies
        </h2>
        <SearchBar placeholder="Explore Worlds..." data={CategoryData} />
      </div>

      <Nav />
      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/worlds" element={<Worlds worldsArray={worlds} />} />
        <Route path="/contact" element={<ContactTab />} />
        {/* ONLY SHOW THE ACCOUNT TAB IF A USER IS LOGGED IN - fix later once modules are coded in */}
        <Route
          path={`single-world/:worldid`}
          element={<SingleWorld worldsArray={worlds} />}
        />
        <Route path="/account" element={<AccountTab />} />
        <Route path="/single-recipe/:recipeid" element={<SingleRecipe />} />
        <Route path="/dogwarts" element={<DogWarts />} />
        <Route path="/bottoms-up" element={<BottomsUp />} />
        <Route path="/desserts" element={<Dessert />} />
        <Route path="/veggie-gardens" element={<Vegetables />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/FAQ" element={<MythicalMunchiesFAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />

        {/* <Route path="/test" element={<Test/>}/> */}
        {/* <Route path="/my-reviews" element={<MyReviews/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
