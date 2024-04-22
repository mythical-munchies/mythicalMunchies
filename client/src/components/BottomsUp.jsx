import "../styles/Veggie.css"


import Drank from "../recipe images/beetlejuiceMarg.jpg"
import Wine from "../images/glasswine.jpg"
import Sophie from "../images/sophie.jpg"
import Pineapple from "../images/pineapple.jpg"


function BottomsUp() {
  return(
    <>
    <div className="veggie-background">
    <h1 className="page-title"><b>Bottoms Up 🍻</b>
    </h1>
    

    <p className="veggie-p">Sip, Savor, and Soak in Life. Pour Decisions Welcome</p>
    <p className="drank-disclaimer"><span className="warning">*</span> 21+ Drink responsibly <span className="warning">*</span></p>


    <img className="veggie-banner" src="https://junkee.com/wp-content/uploads/2014/10/drank.jpg" alt="Tyrion Lanister" />

    <p className="lisa-quote">"That's what I do. I drink and I know things." -Tyrion Lannister</p>
    
    <hr className="dessert-hr"/>

    {/* map over all recipes with dessert tag and display like all other recipes */}
    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Drank} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Beetlejuice Moradita</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">Beetlejuice</a>

        <p className="dessert-text">This "little death" margarita-adjacent cocktail features what some might consider a slightly off-putting key ingredient (though it's delicious, I promise!)-- perfect for the Ghost with the Most. Let's turn on the juice and see what shakes loose!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Wine} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Tyrion's Mulled Wine</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Game of Thrones</a>

        <p className="dessert-text">A rich and aromatic beverage favored by Tyrion Lannister, known for its warming spices and deep flavor. Perfect for cold nights in King's Landing or feasting in the Great Hall of the Red Keep.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

   

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Sophie} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Sophies Tea</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Studio Ghibli</a>

        <p className="dessert-text">For the flower loving hat shop proprietress with a big heart to steal-- piping hot hibiscus tea. If you need to loosen up as much as Sophie does, let your hair down and add a little Japanese whiskey.</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

   

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={Pineapple} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Pineapple Under the Sea</h2>
        <a className="dessert-world" href="somelink.com" target="blank">Bikini Bottom</a>

        <p className="dessert-text">A cocktail recipe all the way from Bikini Bottom. This drink will have you living in a pineapple under the sea!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to Bookmarks 📕</button>
      </div>
    </div>

   

    <hr className="recipe-hr-dessert"/>
    </div>
    </>
  )
}
export default BottomsUp