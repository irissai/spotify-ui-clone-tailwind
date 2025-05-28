import React from 'react'

export default function navbarLarge() {
    return (
         <div className="font-spotify w-full flex p-2 justify-between items-center
                  bg-black h-[48px] col-span-2">
                <a className="flex items-center">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="" width={32} height={32} />

                </a>

                <div className="flex items-center gap-2">

                    <button className="text-[#b3b3b3]">
                        ลงทะเบียน
                    </button>
                    <button className="border px-2 py-1 rounded-[9999px] bg-white text-black ">เข้าสู่ระบบ</button>
                </div>
            </div>
        
    )
}
