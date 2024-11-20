import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { remove } from '../redux/slice/Cartslice'
import { useDispatch } from 'react-redux'

const Cartitem = ({item,itemindex}) => {
const dispatch=useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 border-b-2 border-slate-500">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
      <div className="w-[30%]">
        <img  className="object-cover "   src={item.image} alt="" />
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
        <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
        <p className="text-base text-slate-700 font-medium">{item.description}</p>

        <div className="flex items-center justify-between">
        <span  className="font-bold text-lg text-green-600">${item.price}</span>
        <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
       
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Cartitem
