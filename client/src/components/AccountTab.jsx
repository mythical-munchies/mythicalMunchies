import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./styles/AccountTab.css"
// import Login from "./Login";
// import Register from "./Register"


// STRETCH GOAL TO CREATE ROUTE PATH TO MODAL
const AccountTab = ({ authenticate })=> {
  const [accountData, setAccountData] = useState({
    first: "",
    last: "",
    username: "",
    email: "",
    password:"",
    birthday:"",
    about: "",
  });

  const handleUpdate = (e) => {
    const { key, value } = e.target;
    setAccountData({...accountData, [key]: value});
  };

  const handleSubmit = (e) => {
    e.prevent.Default();
  }

    return (
      <>
        <div className="largest-contain">
          <div className="main-contain">  
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
             <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                  </path>
                </svg>
            </button>

            <div className="testicle">
            <div className="testin">
              
              <div className="testin">
              <h3 className="edit">Edit your Account Information</h3>
              </div>
<form id="account-edit" class="max-w-sm mx-auto">
  <div class="mb-5">
    <label id="textington" for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
    <input type="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kingOFtheNorth" required />
  </div>

  <div class="mb-5">
    <label id="textington" for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name:</label>
    <input type="name" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
  </div>

  <div class="mb-5">
    <label id="textington" for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name:</label>
    <input type="name" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Snow" required />
  </div>

  <div class="mb-5">
    <label id="textington" for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email:</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johnsnow@gmail.com" required />
  </div>

  <div class="mb-5">
    <label id="textington" for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="***********" required />
  </div>


<form class="max-w-sm mx-auto">
  <label id="textington" for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About You:</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Got any powers? Tell us about it!"></textarea>
</form>


  <button id="account-submit" type="submit" class="text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Update</button>
</form>

            </div>
            </div>

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
                      <a href="#" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                        <svg class="w-[30px] h-[30px] text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                        </svg>
                        <span id="side-bar-texty" className="flex-1 ms-3 whitespace-nowrap">Account Details
                        </span>
                      </a>
                    </li>

                    <li className="sideBar-button">
                      <a href="#" className="flex items-center p-2 text-blue-900 rounded-lg   dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                        <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Bookmarks</span>
                      </a>
                    </li>

                    <li className="sideBar-button">
                      <a href="#" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                        <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
                      </a>
                    </li>
              
                    <li className="sideBar-button">
                      <a href="#" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                        <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                      </a>
                    </li>

                    <li className="sideBar-button">
                      <a href="#" className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-800 group">
                        <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.495.93A.5.5 0 0 0 6.5 13c0 1.19.644 2.438 1.618 3.375C9.099 17.319 10.469 18 12 18c1.531 0 2.9-.681 3.882-1.625.974-.937 1.618-2.184 1.618-3.375a.5.5 0 0 0-.995-.07.764.764 0 0 1-.156.096c-.214.106-.554.208-1.006.295-.896.173-2.111.262-3.343.262-1.232 0-2.447-.09-3.343-.262-.452-.087-.792-.19-1.005-.295a.762.762 0 0 1-.157-.096ZM8.99 8a1 1 0 0 0 0 2H9a1 1 0 1 0 0-2h-.01Zm6 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                      </a>
                    </li>
                  </ul>
              </div>
            </aside>
            
           
      </div>
      </div>
      </>
    );
};

export default AccountTab