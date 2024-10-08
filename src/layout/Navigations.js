import React from 'react'
import { useNavigate, navigate } from "react-router-dom";
import { Link } from "react-router-dom"; 


const Navigations = () => {

         const navigate = useNavigate()

            const gotCommunity = () =>{
               navigate("/Community");
            }

            const gotWidgets = () =>{
               navigate("/MainWidgets");
            }

        
  return (
    <div class="h-full px-5 pb-4 overflow-y-auto  bg-slate-50 border-gray-200 dark:bg-gray-800 border-b border-gray-200 rounded-[20px] ml-2">
    <ul class="space-y-2 font-medium mt-7">
       <li>
          <Link to="/MainWidgets" onClick={()=>gotWidgets()}  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-5 h-12">
             <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
             </svg>
             <span class="ms-3 ">Dashboard</span>
          </Link>
          
       </li>
       <li>
         <Link to="/Community" onClick={()=>gotCommunity()} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-5 h-12">
             <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
             </svg>
             <span class="ms-3 ">Community</span>
          </Link>
       </li>
       <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-5 h-12">
         
            
             <span class="flex-1 ms-3 whitespace-nowrap">Chast</span>
             <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
          </a>
       </li>
       <li>
          <a href="#" class="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-5 h-12">
           
             <span class="flex-1 ms-3 whitespace-nowrap">People</span>
          </a>
       </li>
       <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group bg-slate-200 mt-5 h-12" >
         
             <span class="flex-1 ms-3 whitespace-nowrap">Peolple</span>
          </a>
       </li>
       <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-5 h-12">
          
             <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
          </a>
       </li>
       <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-5 h-12">
       
             <span class="flex-1 ms-3 whitespace-nowrap">Loug Out</span>
          </a>
       </li>
    </ul>
 </div>
  )
}

export default Navigations
