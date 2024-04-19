const ingredients = [
  { name: "Active dry yeast", description: "" },
  { name: "All-purpose flour", description: "" },
  { name: "Allspice", description: "" },
  { name: "Apple Cider Vinegar", description: "" },
  { name: "Barbecue sauce", description: "" },
  { name: "Bacon", description: "" },
  { name: "Baking Powder", description: "" },
  { name: "Baking Soda", description: "" },
  { name: "Banana", description: "" },
  { name: "Beef stew meat", description: "" },
  { name: "Beet Juice", description: "" },
  { name: "Bell Pepper", description: "Any color is fine" },
  { name: "Black olives", description: "Sliced" },
  { name: "Black pasta", description: "Cooked" },
  { name: "Black pepper", description: "" },
  { name: "Black tea leaves", description: "" },
  { name: "Ketchup", description: "" },
  { name: "Blue food coloring", description: "" },
  { name: "Food coloring", description: "" },
  { name: "Boiling water", description: "" },
  { name: "Bread", description: "" },
  { name: "Bread slices", description: "" },
  { name: "Brown Sugar", description: "Light or dark is fine" },
  { name: "Butter", description: "" },
  { name: "Buttermilk", description: "" },
  { name: "Cabbage", description: "Shredded" },
  { name: "Cardamom", description: "" },
  {
    name: "Cake Flour",
    description: "Not to be confused with self-rising or bread flour",
  },
  { name: "Canola Oil", description: "" },
  { name: "Caramel sauce", description: "" },
  { name: "Carrots", description: "" },
  { name: "Cayenne pepper", description: "" },
  { name: "Cayenne Powder", description: "" },
  { name: "Cheddar", description: "" },
  { name: "Cheese", description: "Sliced" },
  { name: "Cherry tomatoes", description: "Halved" },
  { name: "Chicken Wings", description: "" },
  { name: "Chicken broth", description: "" },
  { name: "Chicken thighs", description: "Bone-in, skin-on" },
  { name: "Chili Oil", description: "" },
  { name: "Chili Powder", description: "" },
  { name: "Chili powder", description: "" },
  { name: "Cilantro", description: "Can be subbed with parsley" },
  { name: "Cinnamon", description: "Ground" },
  { name: "Cinnamon sticks", description: "" },
  { name: "Cinnamon stick", description: "" },
  { name: "Cardamom pods", description: "" },
  { name: "Citric acid", description: "" },
  { name: "Clear lemon-lime soda", description: "" },
  { name: "Cloves", description: "Ground" },
  { name: "Cocoa powder", description: "" },
  { name: "Coconut Flour", description: "Can be subbed for plain flour" },
  { name: "Coconut Oil", description: "" },
  { name: "Confectioners Sugar", description: "" },
  { name: "Confectioners' sugar", description: "For dusting" },
  { name: "Corn on the cob", description: "Cut into halves or thirds" },
  { name: "Cornstarch", description: "" },
  { name: "Corn syrup", description: "" },
  { name: "Potatoes", description: "" },
  { name: "Coriander seeds", description: "" },
  { name: "Cream of Tartar", description: "" },
  { name: "Cream Soda", description: "" },
  { name: "Cumin", description: "" },
  { name: "Cumin seeds", description: "" },
  { name: "Curry Powder", description: "" },
  { name: "Egg", description: "" },
  { name: "Egg(s)", description: "" },
  { name: "Eggs", description: "" },
  { name: "Five Spice Powder", description: "" },
  { name: "Flavor extracts (e.g., cherry, blueberry, lemon)", description: "" },
  { name: "Fresh basil leaves", description: "Chopped" },
  { name: "Fresh cilantro", description: "Chopped, for garnish" },
  { name: "Fresh Ginger", description: "Fresh, sliced" },
  { name: "Garlic", description: "" },
  { name: "Garlic powder", description: "" },
  { name: "Ginger", description: "Ground" },
  { name: "Granulated Sugar", description: "" },
  { name: "Ground beef", description: "" },
  { name: "Ground cinnamon", description: "" },
  { name: "Ground cumin", description: "" },
  { name: "Ground coriander", description: "" },
  { name: "Ground turmeric", description: "" },
  { name: "Habanero Pepper", description: "" },
  { name: "Heavy Cream", description: "" },
  { name: "Heavy Whipping Cream", description: "" },
  { name: "Hoisin Sauce", description: "" },
  { name: "Honey", description: "Local is best" },
  { name: "Japanese Whiskey", description: "" },
  { name: "Jellyfish jelly", description: "Or your preferred jam or jelly!" },
  { name: "Hamburger buns", description: "" },
  {
    name: "Kosher Salt",
    description:
      "If subbing for table salt, check salt conversion measurements",
  },
  { name: "Large Shrimp", description: "" },
  { name: "Lettuce", description: "Shredded" },
  { name: "Light Corn Syrup", description: "" },
  { name: "Lime", description: "" },
  { name: "Lime Juice", description: "" },
  { name: "Basmati rice", description: "" },
  {
    name: "Loose Leaf Hibiscus Tea",
    description: "Can be subbed for 1 tea bag",
  },
  { name: "Maraschino cherry", description: "" },
  { name: "Green food coloring", description: "" },
  { name: "Matcha", description: "Green tea powder" },
  { name: "Milk", description: "Your choice of dairy or plant-based" },
  { name: "Milk chocolate", description: "Chopped" },
  { name: "Mozzarella cheese", description: "Shredded" },
  { name: "Mushrooms", description: "Sliced" },
  { name: "Mustard", description: "" },
  { name: "Nutmeg", description: "Ground" },
  { name: "Olive oil", description: "" },
  { name: "Onion", description: "" },
  { name: "Orange", description: "" },
  { name: "Orange Juice", description: "" },
  { name: "Oyster Sauce", description: "" },
  { name: "Peanuts", description: "Chopped" },
  {
    name: "Peanut Butter",
    description: "Can also be subbed out for your favorite nut or seed butter",
  },
  { name: "Pepper", description: "To taste" },
  { name: "Pickles", description: "Sliced" },
  { name: "Pork Belly", description: "" },
  { name: "Marshmallows", description: "" },
  { name: "Powdered Sugar", description: "" },
  { name: "Ramen", description: "" },
  { name: "Red wine", description: "" },
  { name: "Rice Vinegar", description: "" },
  { name: "Rosemary", description: "Fresh" },
  { name: "Sausages", description: "" },
  { name: "Salt", description: "" },
  { name: "Scallion", description: "Green onions" },
  { name: "Shaoxing Wine", description: "" },
  { name: "Lemon", description: "" },
  { name: "Sliced Lemon", description: "Sliced, for garnish" },
  { name: "Soy Sauce", description: "" },
  { name: "Star anise", description: "" },
  { name: "Tequila", description: "Alcohol" },
  { name: "Thick Cut Bacon", description: "" },
  { name: "Toast", description: "" },
  { name: "Tomato", description: "Sliced" },
  { name: "Tomatoes", description: "Sliced" },
  { name: "Thyme", description: "Fresh" },
  {
    name: "Table Salt",
    description:
      "If subbing for kosher salt, check salt conversion measurements",
  },
  { name: "Triple Sec", description: "Alcohol" },
  { name: "Turmeric", description: "Ground" },
  { name: "Vanilla extract", description: "" },
  { name: "Vanilla Extract", description: "" },
  { name: "Vanilla ice cream", description: "" },
  { name: "Vegetable broth", description: "" },
  { name: "Vegetable oil", description: "" },
  { name: "Warm water", description: "" },
  { name: "Water", description: "" },
  { name: "Whipped cream", description: "" },

  { name: "Unsalted butter", description: "" },
  { name: "Pink food coloring", description: "" },
  { name: "Melon puree", description: "From fresh melon, strained" },
  { name: "Sprinkles", description: "For decoration" },
  { name: "Spinach", description: "Fresh" },
  { name: "Kale", description: "Fresh" },
  { name: "Soy milk", description: "" },
  { name: "Apple", description: "Cored and chopped" },
  { name: "Chia seeds", description: "" },
  { name: "Hemp seeds", description: "" },
  { name: "Ice cubes", description: "" },
  { name: "Green tea", description: "Brewed and chilled" },
  { name: "Apple juice", description: "Chilled" },
  { name: "Lemon-lime soda", description: "Chilled" },
  { name: "Ginger ale", description: "Chilled" },
  { name: "Pie crust dough", description: "Pre-made or homemade" },
  { name: "Pumpkin puree", description: "Canned or homemade" },
  { name: "Brown sugar", description: "" },

  // {"name":"",
  // "description":""
  // },
];
module.exports = { ingredients };
