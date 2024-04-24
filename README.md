# Mythical Munchies 🍄🔮✨

Prepare to embark on a fantastical culinary adventure through the realms of fiction and fantasy! With our enchanted app, you'll journey through a myriad of fictional worlds, indulging in delectable recipes straight from your favorite stories and film.

Check out our site on Render: (https://mythicalmunchies-55ge.onrender.com/)

## Developed By

- Eleni Papadatos ([EleniP94](https://github.com/orgs/mythical-munchies/people/EleniP94))
- Lucas Barrs ([Lucas-Barrs](https://github.com/Lucas-Barrs))
- Samantha Lugtu ([SammyLug](https://github.com/SammyLug))
- Simone LaPray ([viinn-viinn](https://github.com/orgs/mythical-munchies/people/viinn-viinn))

## Objective

Our objective for Mythical Munchies is to have a fully developed fullstack application where all users can view recipes from various fictional worlds. As an account holder, you have the benefit of saving your favorite recipes to your profile, as well as leaving reviews for recipes which all users can see. Each recipe card includes ingredients, special properties, and cooking instructions to achieve your desired mythical munchie.

# Main Functionality

## Features

### Login/Logout 🚪

Enter the mystical realm of Mythical Munchies with a simple click! Log in to unlock a treasure trove of magical recipes, or bid adieu with a graceful logout.

### Account Page 📜

Delve into your account page to discover a realm of possibilities:

- **Profile Settings**: Customize your enchanted profile to reflect your unique culinary spirit.
- **Bookmarks/Reviews**: Keep track of your favorite recipes and share your magical experiences with fellow adventurers.

### Recipe Exploration 🌟

Embark on a mouthwatering journey through the whimsical worlds of fiction:

- **Explore Recipes**: Feast your eyes upon a cornucopia of culinary wonders, each inspired by beloved fictional universes.
- **Recipe Card**: Dive deep into each recipe's essence with a spellbinding recipe card, featuring tantalizing photos, enchanting ingredients, mystical instructions, and bewitching reviews.

### Browse and Search 🧙‍♂️

Unleash the power of the search bar and filter categories to uncover recipes from your most cherished realms, including:

- Studio Ghibli 🌿
- Roald Dahl 🍫
- Game of Thrones 🐉
- Zelda 🗡️
- Spongebob 🍍
- Stardew 🌾
- Lord of the Rings 🧝‍♂️
- PotterWorld ⚡
- Star Wars 🌌
- Dune 🐛
- Make Room! 🍵
- James & the Giant Peach 🍑

### User Interaction 🌟

Join the culinary fellowship and interact with fellow adventurers:

- **Bookmarks/Favorites**: Save your most cherished recipes to your personal treasure trove for easy access.
- **Reviews**: Share your magical experiences with the community by leaving reviews that sparkle with your unique insights and enchanting tales.

### Ratings and Comments 🌈

Elevate your culinary adventures with star-studded ratings and optional comments:

- **Presentation**: How visually captivating is the dish?
- **Magical Effects**: Does the recipe transport you to a realm of wonder?
- **Sensory Experience**: Engage your senses with delightful aromas and textures.
- **Taste**: Indulge in the magical flavors crafted by mystical ingredients.
- **Recipe Difficulty**: Rate the level of magic required to conjure the dish.
- **Comments**: Share your epic tales of culinary conquests and enchanting flavors.

Get ready to sprinkle some magic into your kitchen and unleash the culinary wizard within! Welcome to Mythical Munchies, where every recipe is a journey into the realms of imagination and flavor. 🌟🍴📚

## Technologies 🛠️

- React => JS Web Framework
- Redux => State management tool for React
- SQL => Data Management and Retrieval
- Express => Server
- Vite => Build Tool
- ViteExpress => Combined the two above
- Fetch => Offers native browser support for making API calls without additional dependencies
- JWT => Issues login tokens
- BCrypt => Encrypts sensitive passwords
- EmailJS => Utilized for seamless form submission functionality.


## Design 🎨

- React - Bootstrap
- Tailwind CSS
- Flowbite React 
- Font: Almendra

## Install Instructions 
If you wish to run this application locally, here are the install notes.

1. First you will need to clone this repository.
    git@github.com:mythical-munchies/mythicalMunchies.git

2. Next you will need to navigate to the backend directory, then install Node.
    npm install

3. You will also want to copy .env.example as a .env file, but with your key values. cp .env.example .env

4. Within this terminal and run either of these command groups: 
  - Individual commands (must run in order) in package.json
       
You can also elect to run npm run rebuild as that is a custom script within package.json to run all of the above commands in order. This is found at line 14 in in backend/package.json.
 -- npm run rebuild

5. While in the backend directory, you will start the application.
    npm run start

6. Open a new terminal in the frontend directory so that the backend is live and install dependencies there.
    npm i

7. In this frontend directory, then start the React frontend server.
    npm run dev

8. In a new frontend directory, run npm run build which will trigger vite to build. The original command for this is vite build --watch. The --watch flag will trigger a rebuild when changes are made to vite.config.js as well as any bundled files. This is found at line 8 in frontend/package.json.
    npm run build

9. If Vite does not automatically open a tab in your browser, navigate to http://localhost:5173/.

10. You are all set to run Mythical Munchies on your local machine!


## Thanks 🙏
May the Gryphon of Infinite Gratitude swoop down upon you, sprinkling its golden feathers of appreciation and filling your mythical munchies vault with an abundance of ambrosial delights! Thank you for journeying through the enchanted realms of literature and film with us. 📚🔮✨
