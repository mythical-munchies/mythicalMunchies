import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "../icons/profile.png";
import "../styles/CustomerReview.css";

// Url is BaseUrl https://mythicalmunchies.onrender.com/mythicalMunchies
//    /reviews/recipe/:recipe_id
// look at how Sam did this for the endpoint for getting all recipes from a single world.

// Define the CustomerReviews functional component
function CustomerReviews() {
  // Initialize state variables to hold reviews and use useParams to get the dynamic parts of the URL
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null); // State to handle error messages cuz apparently I need all the testing I can get.
  const { recipeid } = useParams();

  // useEffect hook to perform side effects (data fetching here)
  useEffect(() => {
    // Define an asynchronous function to fetch recipe reviews
    const fetchRecipeReviews = async () => {
      try {
        // Construct URL using the recipeid obtained from useParams
        const url = `https://mythicalmunchies.onrender.com/mythicalMunchies/reviews/recipe/${recipeid}`;
        // Await the fetch call to the constructed URL and store the response
        const response = await fetch(url);
        // If the response is not OK, throw an error
        if (!response.ok)
          throw new Error("Failed to fetch reviews from the API");

        // Convert the response to JSON
        const data = await response.json();
        console.log("Fetched reviews:", data);
        // Set the fetched data to the reviews state using setReviews
        setReviews(data);
      } catch (error) {
        // Log any errors to the console
        console.error("Error:", error);
        setError("Failed to load reviews.");
      }
    };

    // Call the fetch function defined above
    fetchRecipeReviews();
  }, [recipeid]); // The dependency array includes recipeid to re-run the effect when it changes
  if (error) {
    return <p>Error: {error}</p>; // Render an error message if there is an error
  }
  return (
    <>
      {/* Map through the reviews state to display each review */}
      {reviews.map((review, index) => (
        <div key={index} className="review-box">
          <article>
            <div className="flex items-center mb-4">
              {/* Display profile image */}
              <img
                id="profile-logo"
                className="w-15 h-12 me-4 rounded-full"
                src={Profile}
                alt="Profile"
              />
              {/* We may need to hard code the date and the reviews.  */}
              <div className="font-medium dark:text-white">
                <p className="this-test-name">
                  {review.user}
                  <time
                    dateTime={review.joinedDate}
                    className="block text-sm text-gray-500 dark:text-gray-400"
                  >
                    Joined on {new Date(review.joinedDate).toLocaleDateString()}
                  </time>
                </p>
              </div>
            </div>
            {/* Display ratings as stars */}
            <div
              id="ratingz"
              className="flex items-center mb-1 space-x-1 rtl:space-x-reverse"
            >
              {Array.from({ length: review.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            {/* Display review text */}
            <p className="this-test">{review.review}</p>
          </article>
        </div>
      ))}
      {/* Show a message if there are no reviews */}
      {reviews.length === 0 && (
        <p>
          Alas! 🌟 This culinary creation has yet to be chronicled in the
          scrolls of epicurean adventurers. Be the first brave soul to inscribe
          your thoughts and tales of tasting this mystical recipe! 📜✨
        </p>
      )}
    </>
  );
}

export default CustomerReviews;

// Sam's code below for reference
//       const response = await fetch(
//         `https://mythicalmunchies.onrender.com/mythicalMunchies/recipes/${worldid}`
//       );
//       const json = await response.json();
//       console.log("recipes", json);
//       console.log(worldid);
//       setRecipes(json);
//     };
//     fetchWorldRecipes();
//   }, []);

//   const { recipeid } = useParams();
//   useEffect(() => {
//     console.log("hi! This is to test recipes!");
//     const fetchRecipeReviews = async () => {
//       const response = await fetch(
//         `https://mythicalmunchies.onrender.com/mythicalMunchies/reviews/recipe/${recipeid}`
//       );
//       const json = await response.json();
//       console.log("recipes", json);
//       console.log(recipeid);
//       setRecipes(json);
//     };
//     fetchRecipeReviews();
//   }, []);

//   return (
//     <>
//       <div className="review-box">
//         <article>
//           <div className="flex items-center mb-4">
//             <img
//               id="profile-logo"
//               className="w-15 h-12 me-4 rounded-full"
//               src={Profile}
//               alt=""
//             />
//             <div className="font-medium dark:text-white">
//               {/* THIS SHOULD EVENTUALLY BE A LINK TO THE PROFILE */}

//               {/* This is the route for the username */}
//               <p className="this-test-name">
//                 user.name{" "}
//                 {/* We can hard code their join date as to not disrupt the the formatting and spacing */}
//                 <time
//                   dateTime="2024-04-01 19:00"
//                   className="block text-sm text-gray-500 dark:text-gray-400"
//                 >
//                   Joined on April 2024
//                 </time>
//               </p>
//             </div>

//             {/* This is the row for stars */}
//           </div>
//           <div
//             id="ratingz"
//             className="flex items-center mb-1 space-x-1 rtl:space-x-reverse"
//           >
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//           </div>
//           {/* This div holds the text of the user review route */}
//           <div>
//             <p className="this-test"> Placeholder text</p>
//           </div>
//         </article>
//       </div>

//       {/* 2nd Reviewer */}
//       <div className="review-box">
//         <article>
//           <div className="flex items-center mb-4">
//             <img
//               id="profile-logo"
//               className="w-15 h-12 me-4 rounded-full"
//               src={Profile}
//               alt=""
//             />
//             <div className="font-medium dark:text-white">
//               {/* THIS SHOULD EVENTUALLY BE A LINK TO THE PROFILE */}
//               <p className="this-test-name">
//                 user.name{" "}
//                 <time
//                   dateTime="2024-04-01 19:00"
//                   className="block text-sm text-gray-500 dark:text-gray-400"
//                 >
//                   Joined on April 2024
//                 </time>
//               </p>
//             </div>
//           </div>
//           <div
//             id="ratingz"
//             className="flex items-center mb-1 space-x-1 rtl:space-x-reverse"
//           >
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//           </div>
//           <p className="this-test">
//             {" "}
//             user.review - I love this recipe so much! It really feels like
//             you're in the movie! Warm, cozy, nostalgic, and delicious! Lorem,
//             ipsum dolor sit amet consectetur adipisicing elit. Dolore sit
//             suscipit praesentium tempora distinctio, voluptate aliquid
//             reprehenderit mollitia ipsum, illo ratione temporibus ut aliquam
//             recusandae veniam quaerat natus harum ipsa.
//           </p>
//         </article>
//       </div>

//       <div className="review-box">
//         <article>
//           <div className="flex items-center mb-4">
//             <img
//               id="profile-logo"
//               className="w-15 h-12 me-4 rounded-full"
//               src={Profile}
//               alt=""
//             />
//             <div className="font-medium dark:text-white">
//               {/* THIS SHOULD EVENTUALLY BE A LINK TO THE PROFILE */}
//               <p className="this-test-name">
//                 user.name{" "}
//                 <time
//                   dateTime="2024-04-01 19:00"
//                   className="block text-sm text-gray-500 dark:text-gray-400"
//                 >
//                   Joined on April 2024
//                 </time>
//               </p>
//             </div>
//           </div>
//           <div
//             id="ratingz"
//             className="flex items-center mb-1 space-x-1 rtl:space-x-reverse"
//           >
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//               className="w-5 h-5 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//           </div>
//           <p className="this-test">
//             {" "}
//             user.review - I love this recipe so much! It really feels like
//             you're in the movie! Warm, cozy, nostalgic, and delicious! Lorem,
//             ipsum dolor sit amet consectetur adipisicing elit. Dolore sit
//             suscipit praesentium tempora distinctio, voluptate aliquid
//             reprehenderit mollitia ipsum, illo ratione temporibus ut aliquam
//             recusandae veniam quaerat natus harum ipsa.
//           </p>
//         </article>
//       </div>
//     </>
//   );
// }

// export default CustomerReviews;
