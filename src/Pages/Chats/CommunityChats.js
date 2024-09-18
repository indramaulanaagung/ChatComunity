import React from 'react'
import { Image } from '@mui/icons-material'



const CommunityChats = () => {

  return (


        <div className='flex-1'>

            {/* Nama Orang Chats */}
            <header className='bg-white p-4 text-gray-700'>
                <h1 className='text-2xl font-semibold'>
                    Indra Maulana
                </h1>
            </header>


                {/* Chats area */}
            <div className='h-screen overflow-y-auto p-4 pb-36'>

            <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">Hey Bob, how's it going?</p>
                 </div>


                    {/* //replay Chats */}

                 <div class="flex justify-end mb-4 cursor-pointer">
                 <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   
                 </div>
               </div>


               </div>

            </div>

        </div>
  )
}

export default CommunityChats
