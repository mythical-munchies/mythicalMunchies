import './App.css';
import { Route, Routes } from 'react-router-dom';
import AccountTab from './components/AccountTab';
import Nav from './components/Nav';
import ContactTab from './components/ContactTab';
// import RecipesTab from './components/RecipesTab'
import HomeTab from './components/HomeTab';
import SearchBar from './components/SearchBar';
import CategoryData from './Data.json';
import Worlds from './components/Worlds';
import SingleWorld from './components/SingleWorld';
import SingleRecipe from './components/SingleRecipe';
// import Login from './components/Login'
import Logo from './components/icons/cauldronyellow.png';

function App() {
	return (
		<>
			<div className='persistent-header'>
				<div className='logo-title'>
					<h2>
						<img id='logo-image' src={Logo}></img>Mythical Munchies
					</h2>
				</div>
				<SearchBar placeholder='Explore Worlds...' data={CategoryData} />
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
				{/* <Route path="/my-reviews" element={<MyReviews/>}/> */}
			</Routes>
		</>
	);
}

export default App;
