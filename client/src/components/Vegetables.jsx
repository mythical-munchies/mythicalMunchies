// import "./styles/Dessert.css"
import "../styles/Veggie.css"
import Flatbread from "../recipe images/netherworld-flatbread.jpg"
import Bread from "../images/bread.jpg"
import Wolf from "../images/Wolf_Cake.jpg"
import Soup from "../images/soup.jpg"
import Sandy from "../images/sandy.jpg"
import Rice from "../images/rice.jpg"
import Ghost from "../images/ghost.jpg"
import Pasta from "../images/pasta2.jpg"



function Vegetables() {
  return(
    <>
    <div className="veggie-background">
    <h1 className="page-title"><b>Veggie Gardens</b>
      
    </h1>

    <p className="veggie-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dicta sequi, architecto quisquam provident eum soluta, reprehenderit iste, atque officia dolores.  </p>


    <img className="veggie-banner" src="https://s41230.pcdn.co/wp-content/uploads/2020/04/vegan-plant-based-news-paul-mccartney-simpsons-livekindly.png" alt="lisa-simpson" />

    <p className="lisa-quote">"But I promised Paul McCartney I wouldnt eat meat. -Lisa Simpson</p>
    
    <hr className="dessert-hr"/>

    {/* map over all recipes with dessert tag and display like all other recipes */}

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Bread} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Lembas Bread</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Lord of the Rings</a>

        <p className="dessert-text"> Nourishing Elven waybread known for its dense texture and sustaining properties. A single bite can fill the stomach of a grown man.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Flatbread} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Netherworld Flatbread</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Beetlejuice</a>

        <p className="dessert-text"> This vegetarian dish highlights fall flavors and pays homage to the visual aesthetic of the musical. A bit of food coloring (or squid ink) helps achieve that black-and-white duality the Ghost With the Most seems to love. Beetlejuicy moldy funk.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Rice} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Fremen Spice Rice</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Dune</a>

        <p className="dessert-text">A mystical and coveted substance from the planet Arrakis in 'Dune'. The Spice must flow.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Pasta} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Beetlejuice's Ghostly Grub</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Beetlejuice</a>

        <p className="dessert-text">A spooky dish inspired by the mischievous antics of Beetlejuice.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Wolf} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Arya's Direwolf Bread</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Game of Thrones</a>

        <p className="dessert-text">Inspired by Arya Stark's journey and her connection with her direwolf, Nymeria, this bread is shaped like a fearsome direwolf. Made with wholesome ingredients and baked to golden perfection, it's a symbol of strength and resilience in the world of Game of Thrones.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Sandy} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Sandy's Texas Corn Ribs</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Bikini Bottom</a>

        <p className="dessert-text">A spicy and flavorful dish inspired by Sandy Cheeks in SpongeBob SquarePants.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Soup} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Charlies Cabbage Soup</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Roald Dahl</a>

        <p className="dessert-text">A humble yet comforting soup enjoyed by Charlie Bucket in 'Willy Wonka & the Chocolate Factory'.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    
    </div>
    </>
  )
}

export default Vegetables