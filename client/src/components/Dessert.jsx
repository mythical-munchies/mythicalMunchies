import "./styles/Dessert.css"
import PinkCakee from "./recipe images/pinkCakee.jpg"

function Dessert() {
  return(
    <>
    <div className="dessert-background">
    <h1 className="page-title"><b>
      Sweets Galore!
      </b></h1>

      <p className="veggie-p"> Recipe Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem cum perferendis, deleniti, obcaecati sunt </p>

    <hr className="dessert-hr"/>

    {/* map over all recipes with dessert tag and display like all other recipes */}
    {/* <div className="recipe">
      <div> */}
        {/* this should link the recipe later */}
        {/* <img className="dessert-img" src={PinkCakee} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Recipe Title Link</h2>
        <p className="dessert-world">World Link</p>

        <p className="dessert-text"> Recipe Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem cum perferendis, deleniti, obcaecati sunt iure quia neque consectetur quisquam reiciendis velit iusto accusantium, est quod delectus dignissimos quasi dolorem!</p> */}

        {/* add onclick to add to bookmarks IF logged in */}
        {/* <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div> */}

    {/* <hr className="recipe-hr-dessert"/> */}

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={PinkCakee} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Recipe Title Link</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">World Link</a>

        <p className="dessert-text"> Recipe Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem cum perferendis, deleniti, obcaecati sunt iure quia neque consectetur quisquam reiciendis velit iusto accusantium, est quod delectus dignissimos quasi dolorem!</p>

        {/* add onclick to add to bookmarks IF logged in */}
        <button className="dessert-button">Add to favorites 📕</button>
      </div>
    </div>

    <hr className="recipe-hr-dessert"/>

    <div className="recipe">
      <div>
        {/* this should link the recipe later */}
        <img className="dessert-img" src={PinkCakee} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <a  href='somelink.com' className="dessert-title">Recipe Title Link</a>
        {/* <p className="dessert-world">World Link</p> */}
        <a className="dessert-world" href="somelink.com" target="blank">World Link</a>

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