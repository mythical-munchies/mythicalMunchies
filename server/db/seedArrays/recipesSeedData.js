const recipes = [
  {
    name: "Pink Cake",
    description:
      "Pink Cake may sound basic, but this dainty dessert hides a secret ingredient: melon! In STARDEW VALLEY, Pink Cake is a favorite of several villagers. The in-game thumbnail shows a cute pink tube cake topped with red heart sprinkles. The ingredients are listed as flour, sugar, egg, and pink melon (a fruit unique to the game, which looks like a pink cantaloupe).",
    cook_time: "1 Hour",
    world_name: "Stardew Valley",
    img_url: "https://images.app.goo.gl/VL92W4BGeApxVZZ39",
  },
  {
    name: "Ham Ramen",
    description:
      "Enjoy this cozy, rainy day meal that'll get you ready for a big afternoon nap. Double the recipe and enjoy with a mermaid friend!",
    cook_time: "10-15 Min",
    world_name: "Studio Ghibli",
    img_url:
      "https://external-preview.redd.it/TDiqO4Gh1lv-GKJJB9wOrmKpjFejAK0LwoPUwl-_-EQ.jpg?auto=webp&s=763af17210f6167dd714162ae65dd141bb2ac77d",
  },
  {
    name: "Black and White Zagnut Cookies",
    description:
      "Here is a black and white cookie that the Deetzes might have loved. Inspired by Beetlejuice's favorite Zagnut candy bar. Peanut butter, coconut, and chocolate, oh my!",
    cook_time: "3 hours",
    world_name: "Beetlejuice",
    img_url: "https://images.app.goo.gl/Hxer3PpE6ZibyyuZ9",
  },
  {
    name: "Hot Honey Milk",
    description: "Warm and comforting – perfect for a rainy day!",
    cook_time: "5 Min",
    world_name: "Studio Ghibli",
    img_url:
      "https://doseofsunshine6.home.blog/wp-content/uploads/2019/08/screenshot_20190829-131411_chrome.jpg?w=825",
  },
  {
    name: "Sophie's Tea",
    description:
      "For the flower loving hat shop proprietress with a big heart to steal-- piping hot hibiscus tea. If you need to loosen up as much as Sophie does, let your hair down and add a little Japanese whiskey.",
    cook_time: "5 Min",
    world_name: "Studio Ghibli",
    img_url:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/78b8067ac5f13032d21a743f0b4d1318.jpg",
  },
  {
    name: "Calcifer Snacks",
    description:
      "Log-inspired Japanese cake roll with crushed (white chocolate) egg shells. (Calcifer's Favorite!)",
    cook_time: "1 hour",
    world_name: "Studio Ghibli",
    img_url:
      "https://twocrumbsup.co/wp-content/uploads/2023/10/Howls-Moving-Castle-Cake-2.jpg",
  },
  {
    name: "Bacon and Eggs",
    description:
      "Iconic family-style breakfast. Perfect for those hungry bellies!",
    cook_time: "20 Min",
    world_name: "Studio Ghibli",
    img_url:
      "https://cartooncravings.files.wordpress.com/2017/05/howl-breakfast.jpg",
  },
  {
    name: "Harry Potter Butterbeer",
    description:
      "A magical beverage enjoyed by wizards and witches in the wizarding world. Sweet, creamy, and slightly fizzy, it's the perfect treat for any Harry Potter fan!",
    cook_time: "15 Min",
    world_name: "Wizarding World",
    img_url:
      "https://abeautifulmess.com/wp-content/uploads/2023/10/Harry-Potter-Butterbeer.jpg",
  },
  {
    name: "Lembas Bread",
    description:
      "Nourishing Elven waybread known for its dense texture and sustaining properties. A single bite can fill the stomach of a grown man.",
    cook_time: "45 Min",
    world_name: "Lord of the Rings",
    img_url:
      "https://i.pinimg.com/736x/4f/3e/d2/4f3ed234f3bbb2a77ce3b2b9c8570de6.jpg",
  },
  {
    name: "Second Breakfast Spread",
    description:
      "A hearty meal enjoyed by hobbits in the Shire, often served between breakfast and elevenses.",
    cook_time: "30 Minutes",
    world_name: "Lord of the Rings",
    img_url: "https://i.redd.it/vl5nh5wemqqb1.jpg",
  },

  {
    name: "Arya's Direwolf Bread",
    description:
      "Inspired by Arya Stark's journey and her connection with her direwolf, Nymeria, this bread is shaped like a fearsome direwolf. Made with wholesome ingredients and baked to golden perfection, it's a symbol of strength and resilience in the world of Game of Thrones.",
    cook_time: "1 Hour",
    world_name: "Game of Thrones",
    img_url:
      "https://thestarvingchefblog.com/wp-content/uploads/2022/03/Wolf_Cake.jpg",
  },
  {
    name: "Tyrion's Mulled Wine",
    description:
      "A rich and aromatic beverage favored by Tyrion Lannister, known for its warming spices and deep flavor. Perfect for cold nights in King's Landing or feasting in the Great Hall of the Red Keep.",
    cook_time: "30 Minutes",
    world_name: "Game of Thrones",
    img_url:
      "https://www.pedestrian.tv/wp-content/uploads/2021/07/21/warm-cocktails-lead.jpg?quality=75&w=1200&h=630&crop=1",
  },
  {
    name: "Jon Snow's Wildling Stew",
    description:
      "A hearty and nourishing stew inspired by the rugged lifestyle beyond the Wall in the world of Game of Thrones. Made with tender beef, potatoes, carrots, onions, and garlic, it's a comforting meal fit for any Winterfell feast.",
    cook_time: "1.5 Hours",
    world_name: "Game of Thrones",
    img_url:
      "https://img.jamieoliver.com/jamieoliver/news-and-features/features/wp-content/uploads/sites/2/2014/10/P1_Features_Stew_51_Joe-Sarah.jpg?tr=w-720",
  },
  {
    name: "Lon Lon Milkshake",
    description:
      "Inspired by Lon Lon Ranch from The Legend of Zelda series, this milkshake is a creamy and refreshing treat. Made with fresh milk, vanilla ice cream, and a hint of nostalgia, it's perfect for adventurers seeking a moment of respite on their journey.",
    cook_time: "10 Minutes",
    world_name: "The Legend of Zelda",
    img_url:
      "https://preview.redd.it/oot-lon-lon-milk-i-made-for-our-new-years-party-nope-its-v0-lelj2m1cky9a1.jpg?width=1080&crop=smart&auto=webp&s=fa79cfda2ad6e8e6fcbb6e2fb9c0089246bf6dca",
  },
  {
    name: "Triforce Sugar Cookies",
    description:
      "Delicious sugar cookies inspired by the iconic Triforce symbol from The Legend of Zelda series. These cookies are buttery, sweet, and perfect for any gaming-themed gathering or snack time adventure.",
    cook_time: "Varies based on recipe, typically 10-15 minutes",
    world_name: "The Legend of Zelda",
    img_url:
      "https://images.squarespace-cdn.com/content/v1/5508c899e4b0a308ed6ba859/1505364763444-SG6UGU8H7D2U1CBEZL2N/triforce-linzer-cookies-2.jpg",
  },
  {
    name: "Blue Milkshake",
    description:
      "Inspired by the iconic blue milk enjoyed by characters in the Star Wars universe, this milkshake is a refreshing and vibrant treat. Made with creamy vanilla ice cream, cold milk, and a few drops of blue food coloring for a galaxy-inspired twist. Topped with fluffy whipped cream for extra indulgence.",
    cook_time: "5 minutes",
    world_name: "Star Wars",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNUBu7yapHn72eQocoVokUTC1EXXerTMaKchv1FWicxKa11LYOtIsvpk2Rh7759ebwAU&usqp=CAU",
  },
  {
    name: "Beetlejuice's Ghostly Grub",
    description:
      "A spooky dish inspired by the mischievous antics of Beetlejuice.",
    cook_time: "45 minutes",
    world_name: "Beetlejuice",
    img_url:
      "https://i.pinimg.com/474x/d6/fa/4a/d6fa4ab21845d48462f8a7b6ed6a3d04.jpg",
  },
  {
    name: "Matilda's Chocolate Cake",
    description:
      "A decadent chocolate cake inspired by the mouth-watering treat from Roald Dahl's Matilda.",
    cook_time: "60 minutes",
    world_name: "Roald Dahl",
    img_url:
      "https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-1-e1496872274436.jpg",
  },
  {
    name: "The BFG's Frobscottle",
    description:
      "A fizzy and whimsical drink enjoyed by the Big Friendly Giant in Roald Dahl's 'The BFG'.",
    cook_time: "10 minutes",
    world_name: "Roald Dahl",
    img_url:
      "https://static.wikia.nocookie.net/roalddahl/images/6/66/Scottle.jpg/revision/latest?cb=20171007215444",
  },
  {
    name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description:
      "A mouthwatering candy bar featured in Roald Dahl's 'Charlie and the Chocolate Factory'.",
    cook_time: "30 minutes",
    world_name: "Roald Dahl",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ziLxNcVGrUyyaoR9gFPEvZjeFrZCeLH80BNOM4e5Ag&s",
  },
  {
    name: "Charlie's Cabbage Soup",
    description:
      "A humble yet comforting soup enjoyed by Charlie Bucket in 'Willy Wonka & the Chocolate Factory'.",
    cook_time: "45 minutes",
    world_name: "Roald Dahl",
    img_url:
      "https://www.medieval-recipes.com/noisette/wp-content/uploads/2014/03/homemadepottage.jpg",
  },
  {
    name: "Wonka's Everlasting Gobstoppers",
    description:
      "Magical and everlasting jawbreakers created by Willy Wonka in 'Willy Wonka & the Chocolate Factory'.",
    cook_time: "60 minutes",
    world_name: "Roald Dahl",
    img_url:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Jawbreaker_plate.jpg",
  },
  {
    name: "Krabby Patty",
    description:
      "The iconic burger from the Krusty Krab, as featured in SpongeBob SquarePants.",
    cook_time: "20 minutes",
    world_name: "Bikini Bottom",
    img_url:
      "https://static.wikia.nocookie.net/garpedia/images/f/fa/Krabby_Patty.jpg/revision/latest?cb=20190219175518",
  },
  {
    name: "Sandy's Texas Corn Ribs",
    description:
      "A spicy and flavorful dish inspired by Sandy Cheeks in SpongeBob SquarePants.",
    cook_time: "30 minutes",
    world_name: "Bikini Bottom",
    img_url: "https://i.ytimg.com/vi/Tt7_Qao0TCw/hqdefault.jpg",
  },
  {
    name: "Jellyfish Jelly Sandwich",
    description:
      "A sweet and gooey sandwich made with jellyfish jelly, a favorite of SpongeBob SquarePants.",
    cook_time: "10 minutes",
    world_name: "Bikini Bottom",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0laIOxEnSpNyrO5zffPeY30me3w6751T2dzcKuSVJYw&s",
  },
  {
    name: "Spice Melange",
    description:
      "A mystical and coveted substance from the planet Arrakis in 'Dune'. The Spice must flow.",
    cook_time: "2 minutes",
    world_name: "Dune",
    img_url:
      "https://i0.wp.com/www.innatthecrossroads.com/wp-content/uploads/2020/09/DSC00805-1.png?fit=797%2C1200&ssl=1",
  },
  {
    name: "Arrakeen Spice Tea",
    description:
      "A fragrant and exotic tea brewed with spices from the planet Arrakis.",
    cook_time: "10 minutes",
    world_name: "Dune",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnvx-UMs60vVwJ-cnztji_FJsKcyLokKef5cUWv6ajQ&s",
  },
  {
    name: "Fremen Spice Rice",
    description:
      "A fragrant and flavorful rice dish inspired by the Fremen people of the planet Arrakis.",
    cook_time: "25 minutes",
    world_name: "Dune",
    img_url: "https://www.africanbites.com/wp-content/uploads/2021/08/1-3.jpg",
  },
  {
    name: "Arrakeen Chicken Tagine",
    description:
      "A savory and aromatic chicken tagine inspired by the flavors of Arrakis.",
    cook_time: "1 hour 15 minutes",
    world_name: "Dune",
    img_url:
      "https://middlebury.coop/wp-content/uploads/2023/01/Chicken-Tagine.-SS.-Low-Res-476x476.jpg",
  },
  {
    name: "Elven Honeyed Chicken",
    description:
      "A delectable chicken dish infused with honey and herbs, inspired by the culinary traditions of the elves in the Forgotten Realms.",
    cook_time: "1 hour",
    world_name: "Forgotten Realms",
    img_url:
      "https://i.pinimg.com/736x/da/1b/95/da1b9548a944d02b53a017b9018da15f.jpg",
  },

  // {
  //   "name": "",
  //   "description":"",
  //   "cook_time":"",
  //   "world_name": "",
  //   "img_url":""
  // },
];

module.exports = { recipes };
