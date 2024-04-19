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
  

  // {
  //   recipe_name:"",
  //   description:"",
  //   index:""
  // },
];

module.exports = { instructions };
