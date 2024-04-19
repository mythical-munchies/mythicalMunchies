import "../styles/Veggie.css"


import Drank from "../recipe images/beetlejuiceMarg.jpg"


function BottomsUp() {
  return(
    <>
    <div className="veggie-background">
    <h1 className="page-title"><b>Bottoms Up 🍻</b>
    </h1>
    

    <p className="veggie-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dicta sequi, architecto quisquam provident eum soluta, reprehenderit iste, atque officia dolores.  </p>
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
        <img className="dessert-img" src={Drank} alt="Stardew Valley Pink Cake" />
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
export default BottomsUp