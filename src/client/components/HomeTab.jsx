import { Link } from "react-router-dom";
import "./styles/HomeTab.css"
import Fav from "./images/butterbeer.jpg"
import PeachBun from "./images/peachBuns.png"
import BFG from "./images/bfg.png"
import HarryDog from "./images/harryDog.png"
import Veggies from "./images/veggies.jpg"
import Drinks from "./images/drinks.jpg"

function HomeTab(){
  return(
    <>
    {/* <div className="top-slide">
      <div className="favorite-slide">
        <h4 className="main-texts">Favorites of the Month!</h4>
        <img className="main-image-test" src={Fav} alt="hermoine" />
      </div>
    </div> */}

    <div className="top-slide">
      <div className="dessert-spotlight">
        <div>
          <h4 className="main-texts">Dessert Spotlight 🍰 </h4>
          <h5 className="details-text">link to recipe.name here</h5>
          <Link to="/desserts"><img className='image-test' src={PeachBun} alt="peach-buns" title="Click here for Desserts!" /></Link>
        </div>
      </div>

      <div className="book-spotlight">
        <div>
          <h4 className="main-texts"> Featured Literature 📚 </h4>
          <h5 className="details-text">link to book.name here</h5>
          <Link to="/featured-literature"><img className= 'image-test' src={BFG} alt="literature" /></Link>
        </div>
      </div>

      <div className="doggy-spotlight">
        <div>
          <h4 className="main-texts">Dogwarts 🐾 </h4>
          <h5 className="details-text">DIY treats for your pup!</h5>
          <Link to="/dogwarts"><img className= 'image-test' src={HarryDog} alt="literature" /></Link>
        </div>
      </div>
    </div>

    <div className="middle-slide">
      <div className="favorite-slide">
        <h4 className="main-texts">Favorites of the Month!</h4>
        <img className="main-image-test" src={Fav} alt="hermoine" />
      </div>
    </div>

    <div className="middle2-slide">
      <div className="veggie-spotlight">
        <div>
          <h4 className="main-texts">Veggie Gardens 🥬🥔 </h4>
          <h5 className="details-text">Vegetarian and Vegan friendly!</h5>
          <Link to="/veggie-gardens"><img className='image-test' src={Veggies} alt="peach-buns" title="Click here for vegetarian and vegan recipes!" /></Link>
        </div>
      </div>

      <div className="brews-spotlight">
        <div>
          <h4 className="main-texts">Bottoms Up 🍻 </h4>
          <h5 className="details-text">Try these tasty potions at your next party</h5>
          <Link to="/bottoms-up"><img className= 'image-test' src={Drinks} alt="literature" /></Link>
        </div>
      </div>
    </div>


    <div className="bottom-slide">
      <div className="bottom-container">
        <div>
          <h5 className="our-story">Our Story</h5>
          <h6 className="special-bottom-text">Once Upon A Time...</h6>
          <h5 className="bottom-text">Mythical Munchies came to life .... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ullam iusto doloribus hic ea reprehenderit minima nesciunt doloremque consectetur non amet, nihil distinctio quibusdillo? Eveniet adipisci optio dolorem autem error voluptate velit fuga, pariatur quo saepe id aspernatur cumque consequatur repudiandae quam hic. <br /></h5>
        </div>
      </div>
    </div>

    <footer>
      <h3>Test Foot</h3>
      <h3>social icons can go here or something</h3>
    </footer>
    </>
  )
}
export default HomeTab