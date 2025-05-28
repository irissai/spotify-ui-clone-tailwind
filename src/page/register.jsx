import React, { useState } from 'react';
import '.././App.css'

function register() {
  const [username, setUsername] = useState('');
  const [showError, setShowError] = useState(false);

  function checkInput(e) {
      e.preventDefault();
    if (username.trim() === '') {
      setShowError(true);
    } else {
    }
  }

  return (
    <div className="font-spotify bg-[#121212] block overflow-x-hidden text-white">
      <div className="flex justify-start flex-col  min-h-screen w-full  bg-[#121212] rounded-lg   " >
        <header className='flex justify-center pt-[32px] pb-[24px] min-h-[32px]' >
          <div >
            <a href="">
              <img className='w-[24px] md:w-[40px] h-[24px] md:h-[40px] ' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="" />
            </a>
          </div>
        </header>
        <section className='flex grow-[1] justify-center'>

          <div className="block w-full xs:w-[388px] px-[32px] py-0 xs-full">
            <header className='mb-[40px] text-center'>
              <h1 className='font-spotify text-center text-[2rem] md:text-[3rem] font-bold text-white mb-[32px] wrap-anywhere align-middle text-balance leading-tight'>ลงทะเบียนเพื่อเริ่มฟัง</h1>
            </header>
            <form action="" className='block mt-0'> 
                    <div className="">
                      <label htmlFor="" className='font-bold text-[14px]'>อีเมล</label>
                    </div>
                    <div className="pt-[8px]">
                      <div className="">
                      <input type="text" placeholder='name@domain.com'
                        className='[overflow-wrap:anywhere]  px-[12px] py-[4px] min-h-[48px] bg-none bg-[#121212] rounded-[4px] border border-[#7c7c7c] shadow-sm w-full focus:shadow-[0_0_0_3px_#fff] hover:hover:border-[#fff]' 
                         value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                                 {showError && (
                                <div className="text-[#f3727f] text-sm flex items-start gap-2 mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mt-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                        <path d="M7.25 9V4h1.5v5h-1.5zm0 3.026v-1.5h1.5v1.5h-1.5z" />
                                    </svg>
                                    <span>อีเมลนี้ไม่ถูกต้อง ตรวจสอบให้แน่ใจว่าเขียนแบบนี้ example@email.com</span>
                                </div>
                            )}
                            </div>
                      <div className="mt-[8px]">
                        <a href="" className='text-[#1ed760] underline underline-offset-2 text-[14px]'>ใช้หมายเลขโทรศัพท์แทน</a>
                      </div>
                    </div>
            

              <button
              //  type="button"
                onClick={checkInput}
                className="mt-[20px] [overflow-wrap:anywhere] font-bold px-4 py-3 bg-[#1ed760]  text-black w-full rounded-[9999px] hover:bg-[#3be477] min-[48px]"
              >
                <span>ถัดไป</span>

              </button>
            </form>

            <div className="mt-[32px]">
              <div className="w-full relative flex justify-center before:contents-[''] before:h-[1px] before:bg-[#7c7c7c] before:block before:absolute before:top-[50%] before:left-0 before:right-0">
                <span className='bg-[#121212] relative px-[12px] py-[0px] inline-block text-[14px]'>หรือ</span>
              </div>
            </div>
            <div className="mt-[32px]">
              <a href="" className='[overflow-wrap:anywhere] font-bold rounded-[9999px] py-[10.5px] pr-[32px] pl-[55px] wrap-anywhere border border-[#7c7c7c] relative inline-flex align-middle justify-center w-full'>
                <span className='flex absolute left-[20px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.6 12.2273C21.6 11.5182 21.5364 10.8364 21.4182 10.1819H12V14.0501H17.3818C17.15 15.3001 16.4455 16.3592 15.3864 17.0682V19.5773H18.6182C20.5091 17.8364 21.6 15.2728 21.6 12.2273Z" fill="#4285F4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 21.9999C14.7001 21.9999 16.9637 21.1044 18.6183 19.5772L15.3864 17.0681C14.491 17.6681 13.3455 18.0226 12.0001 18.0226C9.39554 18.0226 7.19099 16.2635 6.40463 13.8999H3.06372V16.4908C4.70918 19.759 8.09099 21.9999 12.0001 21.9999Z" fill="#34A853" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.40455 13.8999C6.20455 13.2999 6.09091 12.659 6.09091 11.9999C6.09091 11.3409 6.20455 10.6999 6.40455 10.0999V7.50903H3.06364C2.38636 8.85903 2 10.3863 2 11.9999C2 13.6136 2.38636 15.1409 3.06364 16.4909L6.40455 13.8999Z" fill="#FBBC05" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 5.97727C13.4683 5.97727 14.7864 6.48182 15.8228 7.47273L18.691 4.60455C16.9592 2.99091 14.6955 2 12.0001 2C8.09099 2 4.70918 4.24091 3.06372 7.50909L6.40463 10.1C7.19099 7.73636 9.39554 5.97727 12.0001 5.97727Z" fill="#EA4335" />
                    <script xmlns="" /></svg>

                </span>
                ลงทะเบียนด้วย Google
              </a>
              <a href="" className='[overflow-wrap:anywhere]  mt-[8px] font-bold rounded-[9999px] py-[10.5px] pr-[32px] pl-[55px] wrap-anywhere border border-[#7c7c7c] relative inline-flex align-middle justify-center w-full'>
                <span className='flex absolute left-[20px]'>
                  <svg width={25} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="white" />
                    <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.308 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.125V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12Z" fill="#1877F2" />
                  </svg>

                </span>
                ลงทะเบียนด้วย Facebook
              </a>
              <a href="" className='[overflow-wrap:anywhere]  mt-[8px] font-bold rounded-[9999px] py-[10.5px] pr-[32px] pl-[55px] wrap-anywhere border border-[#7c7c7c] relative inline-flex align-middle justify-center w-full'>
                <span className='flex absolute left-[20px]'>
                  <svg width={25} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.195 4.513C15.873 3.69 16.351 2.567 16.351 1.433C16.351 1.278 16.341 1.123 16.318 1C15.206 1.044 13.872 1.734 13.083 2.668C12.449 3.379 11.871 4.513 11.871 5.647C11.871 5.825 11.905 5.991 11.916 6.047C11.982 6.058 12.094 6.08 12.216 6.08C13.206 6.08 14.45 5.413 15.195 4.513ZM15.973 6.313C14.317 6.313 12.961 7.325 12.093 7.325C11.171 7.325 9.97 6.38 8.525 6.38C5.779 6.38 3 8.648 3 12.918C3 15.586 4.023 18.398 5.301 20.211C6.391 21.744 7.347 23 8.725 23C10.081 23 10.682 22.1 12.371 22.1C14.083 22.1 14.472 22.978 15.973 22.978C17.463 22.978 18.453 21.61 19.397 20.265C20.442 18.72 20.887 17.219 20.897 17.142C20.809 17.119 17.963 15.952 17.963 12.695C17.963 9.871 20.198 8.604 20.331 8.504C18.852 6.381 16.596 6.314 15.973 6.314V6.313Z" fill="white" />
                  </svg>

                </span>
                ลงทะเบียนด้วย Apple
              </a>

            </div>
            <div className="mt-[32px] w-full relative flex justify-center before:contents-[''] before:h-[1px] before:bg-[#292929] before:block before:absolute before:top-[50%] before:left-0 before:right-0">
            </div>
            <p className='mt-[32px] text-center'>
              <span className='block align-middle text-[#b3b3b3] '>
                หากมีบัญชีอยู่แล้ว
                <a href="/login" className='text-[#fff] ml-[5px] underline underline-offset-2'>เข้าสู่ระบบที่นี่</a>
              </span>
            </p>
          </div>

        </section>
        <footer className='p-[24px] text-center'>
          <span className="text-[#b3b3b3]  align-middle text-[12.5px]">
            <p>
              This site is protected by reCAPTCHA and the Google
              <br />
              <a href="" className='underline underline-offset-2 '> Privacy Policy </a>

              and
              <a href="" className='underline underline-offset-2'> Terms of Service </a>
              apply.
            </p>
          </span>
        </footer>
      </div>


    </div>
  )
}

export default register