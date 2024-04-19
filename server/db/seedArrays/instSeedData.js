const instructions = [
  {
    recipe_name: "Ham Ramen",
    description:
      "In a small pot, Boil water and cook 1 egg for 6-7 minutes. In another pot, boil 2 cups of water for your ramen",
    index: "0",
  },
  {
    recipe_name: "Ham Ramen",
    description:
      "While the water is boiling,slice your green onion, add more or less to your taste, and set aside pre cooked slices of ham or pork belly",
    index: "1",
  },
  {
    recipe_name: "Ham Ramen",
    description:
      "To assemble, place ramen noodles in serving bowl (break in half for real ponyo effect). Then, empty all packets onto dry noodles along with a handful of your green onions. Carefully pour the boiling water into your boil to join all the ingredients and create a broth! Cover the serving bowl with a plate and you MUST wait 3 full minutes as Ponyo's mother says so! Add your two slices of ham along with your peeled and sliced runny egg to reveal the finished meal",
    index: "2",
  },
  {
    recipe_name: "Hot Honey Milk",
    description:
      "In a small pot on a stove or in a microwave, heat the milk until steaming but not boiling. Make sure to mix to prevent burning.",
    index: "0",
  },
  {
    recipe_name: "Hot Honey Milk",
    description:
      "Pour the hot milk into a mug. Sprinkle on cinnamon or any other add-ons you want to include.",
    index: "1",
  },
  {
    recipe_name: "Hot Honey Milk",
    description: "Serve immediately and enjoy!",
    index: "2",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Line a 9x13 rectangular cake pan with aluminum foil. You want it to be crinkly to accomplish a superficial bark-like effect on the outside of your cake, so feel free to bunch it thickly in places and/or use more than one sheet of foil.Spray with baking spray and set aside.",
    index: "0",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "In a small saucepan, heat the milk, cocoa powder, and chili powder on medium (do NOT bring to a boil). Stir continuously until cocoa powder clumps are broken up and dissolved, set aside to cool, and preheat the oven to 325 F",
    index: "1",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Now for the 'cake batter.' In a mixing bowl, combine sugar, baking soda, and 1/2 tsp cream of tartar. Sift in cake flour and whisk lightly to incorporate. Add egg yolks, oil, vanilla extract and chocolate milk mixture, stirring to combine.",
    index: "2",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "In a separate mixing bowl, beat egg whites with a hand mixer until lighter and frothy. Add remaining 1/4 tsp cream of tartar and continue to beat until the whites become opaque. Start adding sugar a little bit at a time, increasing the speed of your hand mixer until stiff peaks form.",
    index: "3",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Using a rubber cake spatula, gently fold a third of the egg whites into the chocolate mixture, quickly rotating your wrists as you fold-- you just want to lighten up the chocolate mix a bit before adding the rest of your egg whites.",
    index: "4",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Add in the rest of the whites and continue to fold lightly-- DO NOT overmix, you want the batter to be super light. Pour into a lined cake pan and smooth evenly with your spatula. Drop the pan onto the counter a few times to settle any air bubbles in the batter.",
    index: "5",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Bake for roughly 15 minutes until a toothpick comes out clean. When the cake is finished baking, remove from the oven and let cool for 5 minutes in the pan. Lay a sheet of parchment paper over a cooling rack, and flip your cake onto the parchment paper. Gently peel away the aluminum foil on the other side-- totally fine if the surface is craggy, we're going for a log-like effect!",
    index: "6",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Now, place another sheet of parchment paper over the craggy surface of the cake and flip once more. Remove the first piece of parchment paper and roll your cake from the narrower end, incorporating the bottom piece of paper into the roll itself-- this will prevent the cake from sticking to itself. Note, it's VERY important to roll the cake before it cools completely to prevent the cake from cracking.",
    index: "7",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Let your wrapped cake cool on the counter while you move onto your matcha whipped cream. Using a hand beater, whip cream, matcha, sugar, and cornstarch until stiff peaks form (a couple of minutes should do the trick). Refrigerate until the cake has come to room temp",
    index: "8",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Unroll the cake and quickly spread your whipped cream evenly over the surface. Then, re-roll the cake with a light touch to avoid the cream squeezing out from the sides, and then use the parchment paper to wrap around your log to help maintain its shape. Refrigerate until ready to serve (cake will keep in the fridge for a couple of days if need be).",
    index: "9",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "While your cake is chilling, tackle your white chocolate 'egg shells'! Very important PSA-- do not use regular white chocolate, which tends to get gloopy and separate. You HAVE to invest in melting chocolate. Blow up mini balloons to egg size-- rinse them lightly and coat with a very thin layer of vegetable oil. Next, microwave your melting chocolate in a glass bowl for a minute, pausing at 30 seconds to stir. Allow to come to room temperature, stirring frequently to maintain liquidy texture-- if you don't allow your chocolate to cool a bit, your balloons will pop when you dip them (and trust me when I say the mess is extreme)",
    index: "10",
  },
  {
    recipe_name: "Calcifer Snacks",
    description:
      "Tilt your bowl and dip your balloons a little more than halfway into your chocolate, swirling to coat. Allow any excess chocolate to drip away, and (assuming you have them) use egg holders to allow your balloons to set. Repeat with a second coat. Once completely set, you should be able to pop your balloons and peel away the balloon skin from the insides of your 'shell'-- totally fine if bits of the edges chip away, making it look a bit more authentic.",
    index: "11",
  },
  {
    recipe_name: "Bacon and Eggs",
    description:
      "Heat your cast iron skillet and first add thick cut bacon. Cook bacon on low heat to ensure the inside is fully cooked, then sear for the last 1- 2 minutes on high heat",
    index: "0",
  },
  {
    recipe_name: "Bacon and Eggs",
    description:
      "Reduce heat to medium and crack 4 eggs directly into the same cast iron. Cover until the edge of the whites are nice and crispy, while the yolks are still runny! The perfect sunny side eggs.",
    index: "1",
  },
  {
    recipe_name: "Bacon and Eggs",
    description:
      "Combine with slices of bread and cheese on a plate and enjoy!",
    index: "2",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    description:
      "In a small saucepan over medium heat, combine brown sugar and water. Bring to a gentle boil and cook, stirring constantly, until the mixture reaches a syrup-like consistency, about 7-8 minutes.",
    index: "0",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    description:
      "Remove from heat and stir in salt, apple cider vinegar, and vanilla extract.",
    index: "1",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    description:
      "In a large mixing bowl, combine the cream soda and the prepared brown sugar syrup. Stir until well combined.",
    index: "2",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    description:
      "In a separate bowl, whip the heavy cream until stiff peaks form.",
    index: "3",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    description:
      "To serve, pour the butterbeer mixture into mugs or glasses, top with a dollop of whipped cream, and a small pat of softened butter.",
    index: "4",
  },
  {
    recipe_name: "Harry Potter Butterbeer",
    description:
      "Optionally, you can sprinkle a pinch of cinnamon or nutmeg on top for extra flavor.",
    index: "5",
  },
  {
    recipe_name: "Lembas Bread",
    description:
      "Preheat oven to 350°F (175°C). Grease and flour a 9x13-inch baking dish.",
    index: "0",
  },
  {
    recipe_name: "Lembas Bread",
    description:
      "In a large bowl, mix together the all-purpose flour, baking powder, and salt.",
    index: "1",
  },
  {
    recipe_name: "Lembas Bread",
    description: "Cut in the butter until the mixture resembles coarse crumbs.",
    index: "2",
  },
  {
    recipe_name: "Lembas Bread",
    description: "Stir in the honey and vanilla extract until well combined.",
    index: "3",
  },
  {
    recipe_name: "Lembas Bread",
    description: "Press the mixture evenly into the prepared baking dish.",
    index: "4",
  },
  {
    recipe_name: "Lembas Bread",
    description:
      "Bake in the preheated oven for 25-30 minutes, or until golden brown.",
    index: "5",
  },
  {
    recipe_name: "Lembas Bread",
    description: "Allow to cool completely before cutting into squares.",
    index: "6",
  },
  {
    recipe_name: "Second Breakfast Spread",
    description:
      "In a frying pan, cook bacon until crispy. Remove from pan and set aside.",
    index: "0",
  },
  {
    recipe_name: "Second Breakfast Spread",
    description:
      "In the same pan, cook eggs to your liking. Season with salt and pepper.",
    index: "1",
  },
  {
    recipe_name: "Second Breakfast Spread",
    description: "Toast bread slices and spread with butter.",
    index: "2",
  },
  {
    recipe_name: "Second Breakfast Spread",
    description:
      "Slice tomato and sauté mushrooms in the bacon fat until golden brown.",
    index: "3",
  },
  {
    recipe_name: "Second Breakfast Spread",
    description:
      "Assemble toast with eggs, bacon, sautéed mushrooms, and sliced tomato. Serve hot.",
    index: "4",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    description:
      "In a large mixing bowl, dissolve the sugar in warm water, then stir in the yeast. Let it sit for about 5 minutes until the mixture becomes frothy.",
    index: "0",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    description:
      "Add the salt and 2 cups of flour to the yeast mixture. Stir until well combined.",
    index: "1",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    description:
      "Gradually add the remaining flour, 1/2 cup at a time, until the dough forms a soft ball.",
    index: "2",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    description:
      "Knead the dough on a lightly floured surface for about 6-8 minutes, or until it becomes smooth and elastic.",
    index: "3",
  },
  {
    recipe_name: "Arya's Direwolf Bread",
    description:
      "Place the dough in a greased bowl, cover with a clean kitchen towel, and let it rise in a warm place for about 1 hour, or until doubled in size.",
    index: "4",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    description: "Pour the red wine into a large saucepan.",
    index: "0",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    description:
      "Slice the orange and add it to the saucepan along with the cloves, cinnamon sticks, and star anise.",
    index: "1",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    description:
      "Heat the wine mixture over medium heat until it just begins to simmer. Do not boil.",
    index: "2",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    description:
      "Reduce the heat to low and let the wine steep for 20-30 minutes to allow the flavors to meld together.",
    index: "3",
  },
  {
    recipe_name: "Tyrion's Mulled Wine",
    description:
      "Strain the mulled wine into mugs or heatproof glasses and serve warm.",
    index: "4",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "In a large pot or Dutch oven, heat some olive oil over medium-high heat.",
    index: "0",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Season the beef stew meat with salt and pepper, then add it to the pot. Brown the meat on all sides, then remove it from the pot and set aside.",
    index: "1",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Add the chopped onion and minced garlic to the pot, and cook until softened and fragrant, about 3-4 minutes.",
    index: "2",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Return the browned beef stew meat to the pot, along with any accumulated juices.",
    index: "3",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Add enough water or beef broth to cover the meat, then bring the mixture to a simmer.",
    index: "4",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Peel and chop the potatoes and carrots into bite-sized pieces. Add them to the pot.",
    index: "5",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Let the stew simmer for about 1 to 1.5 hours, or until the meat and vegetables are tender.",
    index: "6",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description:
      "Season the stew with salt, pepper, and any additional herbs or spices to taste.",
    index: "7",
  },
  {
    recipe_name: "Jon Snow's Wildling Stew",
    description: "Serve hot and enjoy your hearty Wildling stew!",
    index: "8",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    description:
      "In a blender, combine the vanilla ice cream, milk, honey, and banana.",
    index: "0",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    description: "Blend until smooth and creamy.",
    index: "1",
  },
  {
    recipe_name: "Lon Lon Milkshake",
    description:
      "Pour into glasses and serve immediately. Enjoy your refreshing Lon Lon Milkshake!",
    index: "2",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description:
      "Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.",
    index: "0",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description:
      "In a large bowl, cream together the butter and sugar until smooth.",
    index: "1",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description: "Beat in the egg and vanilla extract until well combined.",
    index: "2",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description: "Gradually add the flour and mix until a dough forms.",
    index: "3",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description:
      "Roll out the dough on a floured surface to about 1/4 inch thickness. Use a Triforce-shaped cookie cutter to cut out the cookies.",
    index: "4",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description:
      "Place the cookies on the prepared baking sheets and bake for 8-10 minutes, or until the edges are lightly golden.",
    index: "5",
  },
  {
    recipe_name: "Triforce Sugar Cookies",
    description:
      "Allow the cookies to cool on the baking sheets for a few minutes before transferring them to a wire rack to cool completely.",
    index: "6",
  },
  {
    recipe_name: "Blue Milkshake",
    description:
      "In a blender, combine the vanilla ice cream, milk, and blue food coloring.",
    index: "0",
  },
  {
    recipe_name: "Blue Milkshake",
    description: "Blend until smooth and creamy.",
    index: "1",
  },
  {
    recipe_name: "Blue Milkshake",
    description:
      "Pour into glasses, top with whipped cream, and serve chilled. May the Force be with you!",
    index: "2",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description:
      "Cook black pasta according to package instructions. Drain and set aside.",
    index: "0",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description:
      "In a skillet, heat olive oil over medium heat. Add minced garlic and cook until fragrant.",
    index: "1",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description:
      "Add halved cherry tomatoes to the skillet. Cook until slightly softened.",
    index: "2",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description:
      "Toss in cooked black olives and shredded mozzarella cheese. Stir until cheese is melted.",
    index: "3",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description:
      "Add cooked black pasta to the skillet. Mix until well combined.",
    index: "4",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description:
      "Season with salt and pepper to taste. Garnish with chopped fresh basil leaves.",
    index: "5",
  },
  {
    recipe_name: "Beetlejuice's Ghostly Grub",
    description: "Serve hot and enjoy this spooky dish!",
    index: "6",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
    index: "0",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "In a large bowl, sift together flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
    index: "1",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "Add eggs, buttermilk, vegetable oil, and vanilla extract to the dry ingredients. Beat on medium speed for 2 minutes.",
    index: "2",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "Stir in boiling water until the batter is well combined. The batter will be thin.",
    index: "3",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description: "Pour the batter evenly into the prepared pans.",
    index: "4",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "Bake in the preheated oven for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.",
    index: "5",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "Allow cakes to cool in the pans for 10 minutes, then remove from pans and transfer to a wire rack to cool completely.",
    index: "6",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description:
      "Once cooled, dust the top of the cakes with confectioners' sugar before serving.",
    index: "7",
  },
  {
    recipe_name: "Matilda's Chocolate Cake",
    description: "Slice and enjoy this deliciously moist chocolate cake!",
    index: "8",
  },
  {
    recipe_name: "The BFG's Frobscottle",
    description: "In a tall glass, pour clear lemon-lime soda.",
    index: "0",
  },
  {
    recipe_name: "The BFG's Frobscottle",
    description:
      "Add a few drops of green food coloring to the soda and stir gently to mix.",
    index: "1",
  },
  {
    recipe_name: "The BFG's Frobscottle",
    description: "Top the drink with whipped cream.",
    index: "2",
  },
  {
    recipe_name: "The BFG's Frobscottle",
    description: "Garnish with a maraschino cherry.",
    index: "3",
  },
  {
    recipe_name: "The BFG's Frobscottle",
    description:
      "Serve chilled and enjoy the delightful fizziness of Frobscottle!",
    index: "4",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description: "Line a baking sheet with parchment paper.",
    index: "0",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description:
      "In a microwave-safe bowl, melt milk chocolate in 30-second intervals, stirring in between, until smooth.",
    index: "1",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description:
      "Pour melted chocolate onto the prepared baking sheet and spread it evenly.",
    index: "2",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description:
      "Sprinkle mini marshmallows, chopped peanuts, and drizzle caramel sauce over the melted chocolate.",
    index: "3",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description:
      "Place the baking sheet in the refrigerator for about 20 minutes, or until the chocolate sets.",
    index: "4",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description: "Once set, break the chocolate bark into pieces.",
    index: "5",
  },
  {
    recipe_name: "Wonka's Whipple-Scrumptious Fudgemallow Delight",
    description:
      "Enjoy the scrumptious goodness of Wonka's Whipple-Scrumptious Fudgemallow Delight!",
    index: "6",
  },
  {
    recipe_name: "Charlie's Cabbage Soup",
    description: "In a large pot, heat some olive oil over medium heat.",
    index: "0",
  },
  {
    recipe_name: "Charlie's Cabbage Soup",
    description:
      "Add chopped onions and minced garlic. Cook until softened and fragrant.",
    index: "1",
  },
  {
    recipe_name: "Charlie's Cabbage Soup",
    description:
      "Add chopped carrots, diced potatoes, and shredded cabbage to the pot.",
    index: "2",
  },
  {
    recipe_name: "Charlie's Cabbage Soup",
    description:
      "Pour in vegetable broth and bring to a simmer. Cook until vegetables are tender.",
    index: "3",
  },
  {
    recipe_name: "Charlie's Cabbage Soup",
    description: "Season with salt and pepper to taste.",
    index: "4",
  },
  {
    recipe_name: "Charlie's Cabbage Soup",
    description:
      "Serve hot and enjoy this comforting bowl of Charlie's Cabbage Soup!",
    index: "5",
  },
  {
    recipe_name: "Wonka's Everlasting Gobstoppers",
    description:
      "In a saucepan, combine sugar, corn syrup, and water. Stir over medium heat until sugar dissolves.",
    index: "0",
  },
  {
    recipe_name: "Wonka's Everlasting Gobstoppers",
    description:
      "Bring the mixture to a boil without stirring. Use a candy thermometer and cook until it reaches 300°F (hard crack stage).",
    index: "1",
  },
  {
    recipe_name: "Wonka's Everlasting Gobstoppers",
    description:
      "Remove from heat and quickly stir in food coloring, flavor extracts, and citric acid.",
    index: "2",
  },
  {
    recipe_name: "Wonka's Everlasting Gobstoppers",
    description:
      "Pour the mixture onto a greased baking sheet or into candy molds.",
    index: "3",
  },
  {
    recipe_name: "Wonka's Everlasting Gobstoppers",
    description:
      "Allow the candy to cool and harden completely before breaking it into pieces or unmolding from molds.",
    index: "4",
  },
  {
    recipe_name: "Wonka's Everlasting Gobstoppers",
    description:
      "Enjoy the magical and everlasting taste of Wonka's Gobstoppers!",
    index: "5",
  },
  {
    recipe_name: "Krabby Patty",
    description:
      "Divide ground beef into two equal portions and shape them into patties.",
    index: "0",
  },
  {
    recipe_name: "Krabby Patty",
    description:
      "Preheat a grill or skillet over medium heat. Cook the patties for about 4-5 minutes on each side, or until cooked to your desired doneness.",
    index: "1",
  },
  {
    recipe_name: "Krabby Patty",
    description:
      "Toast the hamburger buns lightly on the grill or in a toaster.",
    index: "2",
  },
  {
    recipe_name: "Krabby Patty",
    description:
      "Assemble the Krabby Patty: place lettuce, tomato slices, cheese, pickles, and sliced onion on the bottom bun. Top with a cooked beef patty.",
    index: "3",
  },
  {
    recipe_name: "Krabby Patty",
    description:
      "Spread ketchup and mustard on the top bun, then place it on top of the assembled burger.",
    index: "4",
  },
  {
    recipe_name: "Krabby Patty",
    description: "Serve hot and enjoy the deliciousness of the Krabby Patty!",
    index: "5",
  },
  {
    recipe_name: "Sandy's Texas Corn Ribs",
    description: "Preheat grill to medium-high heat.",
    index: "0",
  },
  {
    recipe_name: "Sandy's Texas Corn Ribs",
    description:
      "In a small bowl, mix melted butter, barbecue sauce, chili powder, garlic powder, salt, and pepper.",
    index: "1",
  },
  {
    recipe_name: "Sandy's Texas Corn Ribs",
    description: "Brush the corn on the cob generously with the sauce mixture.",
    index: "2",
  },
  {
    recipe_name: "Sandy's Texas Corn Ribs",
    description:
      "Place the corn on the grill and cook for about 10-15 minutes, turning occasionally, until tender and lightly charred.",
    index: "3",
  },
  {
    recipe_name: "Sandy's Texas Corn Ribs",
    description: "Remove from grill and sprinkle with fresh chopped cilantro.",
    index: "4",
  },
  {
    recipe_name: "Sandy's Texas Corn Ribs",
    description: "Serve hot and enjoy Sandy's Texas Corn Ribs!",
    index: "5",
  },
  {
    recipe_name: "Jellyfish Jelly Sandwich",
    description: "Spread peanut butter on one slice of bread.",
    index: "0",
  },
  {
    recipe_name: "Jellyfish Jelly Sandwich",
    description: "Spread jellyfish jelly on the other slice of bread.",
    index: "1",
  },
  {
    recipe_name: "Jellyfish Jelly Sandwich",
    description: "Place the two slices of bread together to form a sandwich.",
    index: "2",
  },
  {
    recipe_name: "Jellyfish Jelly Sandwich",
    description: "Slice diagonally and serve.",
    index: "3",
  },
  {
    recipe_name: "Spice Melange",
    description: "Combine all ground spices in a small bowl.",
    index: "0",
  },
  {
    recipe_name: "Spice Melange",
    description: "Mix well until thoroughly combined.",
    index: "1",
  },
  {
    recipe_name: "Spice Melange",
    description: "Store in an airtight container in a cool, dark place.",
    index: "2",
  },
  {
    recipe_name: "Spice Melange",
    description: "Use as desired to add flavor and depth to your dishes.",
    index: "3",
  },

  // {
  //   recipe_name:"",
  //   description:"",
  //   index:""
  // },
];

module.exports = { instructions };
