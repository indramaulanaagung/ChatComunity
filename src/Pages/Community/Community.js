import React from 'react'

import CommunityChats from '../Chats/CommunityChats';
import PeopleList from '../Chats/PeopleList';

const Community = () => {

  return (
 
    <div class="p-4 sm:ml-64 mt-2 ">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 ">
       <div class="grid grid-cols-2 gap-x-3.5 mb-4">  
    <PeopleList />  
    <CommunityChats />
       </div>
    </div>
 </div>
  
  )
}

export default Community
