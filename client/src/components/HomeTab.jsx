import { Link } from "react-router-dom";
import "../styles/HomeTab.css";
import Fav from "../images/butterbeer.jpg";
import PeachBun from "../images/peachBuns.png";
import BFG from "../images/bfgg.jpg";
import HarryDog from "../images/harryDog.png";
import Veggies from "../images/veggies.jpg";
import Drinks from "../images/download-1.jpg";

function HomeTab() {
  return (
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
            <h5 className="details-text">Post Meal Affair</h5>
            <Link to="/desserts">
              <img
                className="image-test"
                src={PeachBun}
                alt="peach-buns"
                title="Click here for Desserts!"
              />
            </Link>
          </div>
        </div>

        <div className="book-spotlight">
          <div>
            <h4 className="main-texts"> The Bookshelf 📚 </h4>
            <h5 className="details-text"><span className="details-text-span">Words and Stuff</span></h5>
            <Link to="/literature">
              <img className="image-test" src={BFG} alt="literature" />
            </Link>
          </div>
        </div>

        <div className="doggy-spotlight">
          <div>
            <h4 className="main-texts">Dogwarts 🐾 </h4>
            <h5 className="details-text">Hogwarts Birthday Pawty</h5>
            <Link to="/dogwarts">
              <img className="image-test" src={HarryDog} alt="literature" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="middle-slide">
        <div className="favorite-slide">
          <h4 className="main-texts">Favorites of the Month!</h4>
          <img className="main-image-test" src={Fav} alt="hermoine" />
        </div>
      </div> */}

      <div className="middle2-slide">
        <div className="veggie-spotlight">
          <div className="home-tabs-content">
            <h4 className="main-texts">Veggie Gardens 🥬🥔 </h4>
            <h5 className="details-text">Vegetarian and Vegan friendly</h5>
            <Link to="/veggie-gardens">
              <img
                className="image-test"
                src={Veggies}
                // src="https://s41230.pcdn.co/wp-content/uploads/2020/04/vegan-plant-based-news-paul-mccartney-simpsons-livekindly.png"
                alt="peach-buns"
                title="Click here for vegetarian and vegan recipes!"
              />
            </Link>
          </div>
        </div>

        <div className="brews-spotlight">
          <div>
            <h4 className="main-texts">Bottoms Up 🍻 </h4>
            <h5 className="details-text">
              Its 5 o'clock Somewhere
            </h5>
            <Link to="/bottoms-up">
              <img className="image-test" src={Drinks} alt="literature" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bottom-slide">
        <div className="bottom-container">
          <div>
            {/* <h5 className="our-story">Our Story</h5> */}
            <h6 className="special-bottom-text">Once Upon A Time...</h6>
            <h5 className="bottom-text">
              Once upon a time, where marshmallow clouds floated amidst rivers
              of chocolate and mountains of cheese stood tall, Mythical Munchies
              came to life. Legend has it that it all began when a group of
              food-loving computer wizards gathered around a bubbling Zoom meeting link. And thus, with a
              sprinkle of imagination and a dash of culinary prowess, Mythical
              Munchies was born. So grab your fork and join us on this
              epic adventure, where every bite is a chapter in the
              story of deliciousness! 🍔🧙‍♂️✨ <br />
            </h5>
          </div>
        </div>
      </div>

      {/* Commented out Sam's code for now while the Footer.jsx gets tested. We can delete this later if we agree as a team! */}
      {/* <footer>
      <h3>Test Foot</h3>
      <h3>social icons can go here or something</h3>
    </footer> */}
    </>
  );
}
export default HomeTab;
