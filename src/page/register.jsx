import React, { useState } from 'react';
import '.././App.css'
import SportifyIcon from '../assets/image/spotify.png'
import GoogleIcon from '../assets/image/google.png'
import FacebookIcon from '../assets/image/facebook.png'
import AppleIcon from '../assets/image/apple.png'


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
              <img className='w-[24px] md:w-[40px] h-[24px] md:h-[40px] ' src={SportifyIcon} alt="" />
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
                  <img className='w-[25px] h-[24px] ' src={GoogleIcon} alt="" />
                </span>
                ลงทะเบียนด้วย Google
              </a>
              <a href="" className='[overflow-wrap:anywhere]  mt-[8px] font-bold rounded-[9999px] py-[10.5px] pr-[32px] pl-[55px] wrap-anywhere border border-[#7c7c7c] relative inline-flex align-middle justify-center w-full'>
                <span className='flex absolute left-[20px]'>
                <img className='w-[25px] h-[24px] ' src={FacebookIcon} alt="" />
                </span>
                ลงทะเบียนด้วย Facebook
              </a>
              <a href="" className='[overflow-wrap:anywhere]  mt-[8px] font-bold rounded-[9999px] py-[10.5px] pr-[32px] pl-[55px] wrap-anywhere border border-[#7c7c7c] relative inline-flex align-middle justify-center w-full'>
                <span className='flex absolute left-[20px]'>
                <img className='w-[25px] h-[24px] ' src={AppleIcon} alt="" />                
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