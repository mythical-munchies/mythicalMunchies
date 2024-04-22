import "../styles/Dessert.css"
import PinkCakee from "../images/pink.jpg"
import Cal from "../images/calci-snacks.jpg"
import Pumpkin from "../images/pumpkin.jpg"
import Zelda from "../images/zcookies.jpg"
import Choc from "../images/chocolate-cake.jpg"
import Beetle from "../images/beetlecookies.jpg"
import Fudge from "../images/whipple.jpg"


function Dessert() {
  return(
    <>
    <div className="dessert-background">
    <h1 className="page-title"><b>
      Sweets Galore!
      </b></h1>

      <p className="veggie-p"> "Hmmm I think I need something sweet!" Check out these tasty desserts for your post meal treat. </p>

      <img className="veggie-banner" src="https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://s3-images.ladbible.com/s3/content/65bc859660cc6ca4d3ac57a9b6294e2f.png" alt="chocolate-cake boy from Matilda" />

      <p className="lisa-quote">"You can do it Bruce! - Matilda"</p>


    <hr className="dessert-hr"/>

{/* THESE ARE THE RECIPES HARDCODED  */}
    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Cal} alt="yummy food!" />
      </div>

        <div className="dessert-info">
          <a  href='somelink.com' className="dessert-title">Calcifer Snacks</a>
        {/* <p className="dessert-world">World Link</p> */}
          <a className="dessert-world" href="somelink.com" target="blank">Howls Moving Castle</a>
          <p className="dessert-text">Log-inspired Japanese cake roll with crushed white chocolate egg shells. Calcifer's Favorite!</p>

        {/* add onclick to add to bookmarks IF logged in */}
          <button className="dessert-button">Add to Bookmarks 📕</button>
        </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Fudge} alt="yummy food!" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Wonka Whipple-Scrumptious Fudgemallow Delight</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Roald Dahl</a>

        <p className="dessert-text">A mouthwatering candy bar featured in Roald Dahl's 'Charlie and the Chocolate Factory. Remember, the pipe doesnt go to the marshmallowroom, it goes to the fudge room!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Pumpkin} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Pumpkin Pastries</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Wizarding World</a>

        <p className="dessert-text">Delicious hand pies filled with spiced pumpkin filling, a favorite treat among Hogwarts students. Perfect for a falltime afterschool snack!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Choc} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Chocolate Cake</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Roald Dahl</a>

        <p className="dessert-text">Would little Brucy come up here please? The most scrumptious cake in the entire world -according to Miss Trunchbull. Triple chocolate confection minus the sweat and blood.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Beetle} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Black and White Zagnut Cookies</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Beetlejuice</a>

        <p className="dessert-text">Here is a black and white cookie that the Deetzes might have loved. Inspired by Beetlejuice's favorite Zagnut candy bar. Peanut butter, coconut, and chocolate, oh my!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={PinkCakee} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Pink Cake</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Stardew Valley</a>

        <p className="dessert-text">Pink Cake may sound basic, but this dainty dessert hides a secret ingredient: melon! In STARDEW VALLEY, Pink Cake is a favorite of several villagers. The in-game thumbnail shows a cute pink tube cake topped with red heart sprinkles. The ingredients a pink melon (a fruit unique to the game, which looks like a pink cantaloupe).</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Zelda} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Triforce Sugar Cookies</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Zelda</a>

        <p className="dessert-text">Delicious sugar cookies inspired by the iconic Triforce symbol from The Legend of Zelda series. These cookies are buttery, sweet, and perfect for any gaming-themed gathering or snack time adventure</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>
    </div>
    </>
  )
}

export default Dessert