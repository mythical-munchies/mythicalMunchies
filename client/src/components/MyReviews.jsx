import { mockReviews } from "../ReviewData";
import "./styles/Reviews.css"
import DeleteReview from "./DeleteReview";
import Login from "./Login"
import SignUp from "./SignUp";

function MyReviews() {
  return(
    <>
    <div className="largest-contain">
      <div className="main-contain">  
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

{/* content should only be shown if login AUTH */}

{/* THIS IS THE ACCOUNT CONTENT */}
        <div className="testicle">
          <div className="testin">
            <h2 className="bookmark-title">We appreciate your feedback. Let us know what you love!</h2>
              <div className="reviewed">
                {mockReviews.map((review) => {
                  return (
                    <div>
                      {/* just using mock data but will map over favorites */}
                      <div key={review.id} className="review-row">
                        <a href="somesite.com" className="review-recipe-title">{review.title}</a>
                          <p className="review-date">{review.day}</p>
                          {/* delete review Modal */}
                          <DeleteReview />
                          <hr />
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
        
{/* THIS IS THE PERSISTENT SIDEBAR */}
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div id="sideBar" className="h-full px-3 py-4 overflow-y-auto bg-white-50 dark:bg-gray-800">
                <div>
                  <h1 className="welcome-user">Welcome Back username</h1>
                </div>
                <span className="logout-container">
                  <button className="logout-button">Logout</button>
                </span>

                <ul className="space-y-2 font-medium">
                  <li className="sideBar-button">
                    <a href="/account" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                      <svg className="w-[30px] h-[30px] text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                      </svg>
                      <span id="side-bar-texty" className="flex-1 ms-3 whitespace-nowrap">Account Details</span>
                    </a>
                  </li>

                  <li className="sideBar-button">
                    <a href="/bookmarks" className="flex items-center p-2 text-blue-900 rounded-lg   dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                      <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                      </svg>
                      <span className="flex-1 ms-3 whitespace-nowrap">Bookmarks</span>
                    </a>
                  </li>

                  <li className="sideBar-button">
                    <a href="/my-reviews" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                      <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
                      </svg>
                      <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
                    </a>
                  </li>
                  {/* import signup modal - these function when the sidebar button is clicked  */}  
                  <Login /> 
                  {/* import signup modal - these function when the sidebar button is clicked  */}
                  <SignUp />
                </ul>
              </div>
            </aside>
        </div>
      </div>
    </>
  );
};

export default MyReviews

