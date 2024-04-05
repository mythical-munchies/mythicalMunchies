// import "./styles/Dessert.css"
import "./styles/Veggie.css"
import Flatbread from "./recipe images/netherworld-flatbread.jpg"



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
        <img className="dessert-img" src={Flatbread} alt="Stardew Valley Pink Cake" />
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
        <img className="dessert-img" src={Flatbread} alt="Stardew Valley Pink Cake" />
      </div>

      <div className="dessert-info">
        <h2 className="dessert-title">Recipe Title Link</h2>
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

export default Vegetables