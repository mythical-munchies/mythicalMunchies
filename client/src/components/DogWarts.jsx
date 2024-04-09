// THIS PAGE IS HARDCODED FOR PROJECT COMPLETION
import "./styles/DogWarts.css"
import DogParty from "./images/harry-dog-party.jpg"
import DogBeer from "./images/dog-beer.jpg"
import DogFrog from "./images/dog-frog.jpg"
import Banner from "./images/banner.jpg"
import PhotoBooth from "./images/photobooth.jpg"
import Scarf from "./images/scarf.jpg"
import Cloak from "./images/cloak.jpg"
import { useEffect } from "react"

// useEffect(() => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   });
// }, [id])

function DogWarts() {
  return (
    <>
    <div className="background-color">
      <div id="intro">
        <h1 className="harry-title">DIY Hogwarts Birthday Pawty</h1>
        
        <p className="tiny-text">
          From delicious treats to the tasties pup drinks, try these easy DIY recipes for your Harry Pawter
        </p>

        <p className="credits">Credits: The contents of this page belong to <br /><a className="credit-link" href="https://www.thedapple.com/life/diy-harry-potter-birthday-party-for-dogs" target="blank">thedapple.com/diy-harry-potter-dog-party</a>
        </p>
        <img className="doggyPics-top" src={DogParty} alt="" />

        <div id="diys">
        <p className="linkys">Here you'll find :</p>

        <ul className="linkys">
          <li className="page-link"> <a  className="page-link" href="#Beer">Dog-Friendly Butter Beer Recipe</a></li>
          <li className="page-link"> <a className="page-link" href="#Frog">Not-Chocolate Frog Dog Treat Recipe</a></li>
          <li className="page-link"> <a className="page-link" href="#Banner">Dogwarts Banner</a></li>
          <li className="page-link"> <a className="page-link" href="#Scarf">Gryffindor Scarf for Dogs</a></li>
          <li className="page-link"> <a className="page-link" href="#Cloak">Harry Potter Cloak for Dogs</a></li>
          <li className="page-link"> <a className="page-link" href="#Booth">Prisoner of Azkaban Photo Booth</a></li>
        </ul>

        <p className="disclaimer">Disclaimer: Please check your dogs food allergies.</p>

        <hr className="dog-hr" />

        <div className="dog-recipe">
          <h4 id="Beer" className="diy-name">Dog-Friendly Butter Beer Recipe</h4>
          <img className="doggyPics" src={DogBeer} alt="" />
          <p className="dog-ingredients">Ingredients:</p>
          <ul className="linkys">
            <li className="ingredient">1/3 Cup Nonfat Unsweetened Greek Yogurt</li>
            <br />
            <li className="ingredient">1/3 Cup Water</li>
            <br />
            <li className="ingredient">1 Cup Pumkin Puree (Unsweetened)</li>
            <br />
            <li className="ingredient">Handful of Ice Cubes</li>
          </ul>

          <p className="dog-instructions">Blend ingredients immediately. Serve in your dogs bowls or mini tavern glasses</p>
        </div>

        <hr className="dog-recipe-hr"/>

        <div className="dog-recipe">
          <h4 id="Frog"className="diy-name">Not-Chocolate Frog Dog Treat Recipe</h4>
          <img className="doggyPics" src={DogFrog} alt="" />
          <p className="dog-ingredients">Ingredients:</p>
          <ul className="linkys">
            <li className="ingredient">1 Cup Carob Chips (Dogs can eat carob chips, which look similar to chocolate chips, but please make sure you’re not using chocolate chips)</li>
            <br />
            <li className="ingredient">3 Tablespoons Olive Oil</li>
            <br />
            <li className="ingredient">1 Chocolate Frog Mold Tray</li>
          </ul>

          <p className="dog-instructions">Place carob chips and olive oil in microwave safe bowl. Heat for 30 seconds then stir. Repeat until chips have fully melted. Pour mixture into tray molds and scrape away any excess with a knife. Place tray in freezer for one hour to allow frogs to harden. Keep in refrigerator.</p>
        </div>

           <hr className="dog-recipe-hr"/>

        <div className="dog-recipe">
          <h4 id="Banner"className="diy-name">Dogwarts Banner</h4>
          <img className="doggyPics" src={Banner} alt="" />
          <p className="dog-ingredients">Materials:</p>
          <ul className="linkys">
            <li className="ingredient">1 eight-inch roll of white paper</li>
            <br />
            <li className="ingredient">Large Bowl</li>
            <br />
            <li className="ingredient">Black Tea</li>
            <br />
            <li className="ingredient">Pencil</li>
            <br />
            <li className="ingredient">Permanent Marker</li>
          </ul>

          <p className="dog-instructions">Cut a segment of an eight-inch white paper roll and soak in black tea for 20 minutes. Gently remove and hang the paper to dry. Generate your Harry Potter message using a free font generator like this one. Outline message on banner in pencil, then fill in with permanent marker.</p>
        </div>

           <hr className="dog-recipe-hr"/>

        <div className="dog-recipe">
          <h4 id="Scarf" className="diy-name">Gryffindor Scarf for Dogs</h4>
          <img className="doggyPics-scarf" src={Scarf} alt="" />
          <p className="dog-ingredients">Materials:</p>
          <ul className="linkys">
            <li className="ingredient">2 Sheets of Burgundy Felt</li>
            <br />
            <li className="ingredient">1 Sheet Yellow Self-Adhesive Felt</li>
            <br />
            <li className="ingredient">Scissors</li>
            <br />
            <li className="ingredient">Iron</li>
            <br />
            <li className="ingredient">Needle</li>
            <br />
            <li className="ingredient">Thread</li>
          </ul>

          <p className="dog-instructions">Cut three strips of burgundy felt, roughly three inches wide. Cut two strips of the same width from the yellow felt and then segment into two-inch sections. Remove paper back on felt and evenly place on red felt, sticky side down. Sew three sections together and then iron for a smoother texture. Trim the sides of your scarf to even any imperfections. Finally, add a fringe at the bottom.

          For a Slytherin variation,add a narrow stripe between the larger stripes to match the Slytherin pattern.</p>
        </div>

           <hr className="dog-recipe-hr"/>

        <div className="dog-recipe">
          <h4 id="Cloak" className="diy-name">Harry Potter Cloak for Dogs</h4>
          <img className="doggyPics" src={Cloak} alt="" />
          <p className="dog-ingredients">Materials:</p>
          <ul className="linkys">
            <li className="ingredient">Black felt</li>
            <br />
            <li className="ingredient">Needle</li>
            <br />
            <li className="ingredient">Thread</li>
            <br />
            <li className="ingredient">Medium-sized Button</li>
            <br />
            <li className="ingredient">Scissors</li>
            <br />
            <li className="ingredient">Iron</li>
          </ul>

          <p className="dog-instructions">To create a corgi-size cloak, use a piece of black felt that is 17” x 20.” Fold back the top edge of the cloak to create a hood effect and then iron it down to make it stay. Since all dogs vary in size, try your cloak on your dog to measure the exact placement of the button. The cloak should button on your dog’s chest directly under their chin. Sew the button onto the front chest of the cloak and create a matching button-hole. </p>
        </div>

           <hr className="dog-recipe-hr"/>

        <div className="dog-recipe">
          <h4 id="Booth" className="diy-name">Prisoner of Azkaban Photo Booth</h4>
          <img className="doggyPics-scarf" src={PhotoBooth} alt="" />
          <p className="dog-ingredients">Materials:</p>
          <ul className="linkys">
            <li className="ingredient">1 20” x 28” Foam Board</li>
            <br />
            <li className="ingredient">Scissors</li>
            <br />
            <li className="ingredient">Tan Paint</li>
            <br />
            <li className="ingredient">Sponges</li>
            <br />
            <li className="ingredient">Bowl</li>
            <br />
            <li className="ingredient">Pencil</li>
            <br />
            <li className="ingredient">Sharpie</li>
          </ul>

          <p className="dog-instructions">Cut a 14” x 13” rectangle out of the center of a 20” x 28” foam board. You’ll want the square to be centered and sit about 10 inches above the bottom of the board. Sponge paint your tan paint onto the surface of the foam board for a rough, vintage appearance. Allow to dry. Using a pencil and straight edge, add a border around the frame and then fill in with permanent marker. Copy text from a Harry Potter font generator like this one and pencil the letters onto the board. Fill in with permanent marker</p>
        </div>

        </div>
          
        
      </div>
    </div>
    </>
  )
}

export default DogWarts