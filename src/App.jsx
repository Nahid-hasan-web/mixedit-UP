import './App.css'
import { IoMdStar } from "react-icons/io";

function App() {
  

  return (
    <>
        <nav className="nav">
          <div className="container">
            <div className="py-8 px-10 bg-[#F4EFE3] flex justify-end gap-5 mb-10 mt-10">
                  <button className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>All</button>
                  <button className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>All</button>
                  <button className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5c6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>All</button>
                  <button className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>All</button>
                  <button className='py-2 px-5 bg-white rounded-md text-lg font-semibold text-[#5C6574] transition-[.4s] hover:bg-[#FA8507] hover:text-white active:scale-[1.1]'>All</button>
            </div>
            <div className="allCards flex gap-5 flex-wrap">
              <div className="singel_food_card ">
                <div className="product_image rounded-sm w-[300px] px-[35px] py-[50px] bg-[#F4EFE3] mb-5">
                  <img src="https://wordpress.themeholy.com/restar/wp-content/uploads/2024/04/product_1_4-312x312.png" alt="Food Image" />
                </div>
                <div className="card_text">
                    <ul className='flex gap-1 justify-center '>
                      <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                      <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                      <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                      <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                      <li><IoMdStar className='text-xl text-[#FFB539]' /></li>
                    </ul>
                    <div className='card_text flex flex-col items-center mt-5'>
                        <h2 className='text-[23px]   font-playwrite  mb-5 '>Raw Salmon Salad</h2>
                        <p className='text-lg font-bold  text-[#FFB539]'>$19 <span className='text-[#5C6574] ml-5 line-through'>$22</span></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default App
