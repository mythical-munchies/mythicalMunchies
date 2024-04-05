import "./styles/Dessert.css"
import PinkCakee from "./recipe images/pinkCakee.jpg"

function Dessert() {
  return(
    <>
    <div className="dessert-background">
    <h1 className="page-title">
      Sweets Galore!
    </h1>

    <p className="dessert-p">🎂Craving something sweet? Try out these tasty pastries for a boost of mystical powers🦄 </p>
    
    <p>🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂</p>
    <hr className="dessert-hr"/>

    {/* map over all recipes with dessert tag and display like all other recipes */}
    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={PinkCakee} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Recipe Title Link</h2>
        <p className="dessert-world">World Link</p>

        <p className="dessert-text"> Recipe Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem cum perferendis, deleniti, obcaecati sunt iure quia neque consectetur quisquam reiciendis velit iusto accusantium, est quod delectus dignissimos quasi dolorem!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>
    </div>
    </>
  )
}

export default Dessert