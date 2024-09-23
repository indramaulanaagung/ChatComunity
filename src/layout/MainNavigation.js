import React from 'react'
import Navigations from './Navigations'
import Navbar from './Navbar'
import MainWidgets from '../widgets/MainWidgets'
import Community from '../Pages/Community/Community'
import PersonalChats from '../Pages/Chats/PersonlaChats'

const MainNavigation = () => {
  return (
    
<div>
<div>
<Navbar />
<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full rounded-lg bg-white border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar"> 
<Navigations />

</aside>


 </div>
</div>
    
  )
}

export default MainNavigation
