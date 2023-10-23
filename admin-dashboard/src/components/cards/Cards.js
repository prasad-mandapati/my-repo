import React from 'react'
import "./Cards.css";
import {AiOutlineDollar} from "react-icons/ai"
import{RiFileList2Line} from "react-icons/ri"
import{LiaWalletSolid} from "react-icons/lia"
import {BsHandbag} from "react-icons/bs"
import {HiOutlineArrowSmDown, HiOutlineArrowSmUp} from "react-icons/hi"

const Cards = () => {
  return (
    <div className='section1'>
        <div className='card --flex-between --card --p '>
            <div className="icons-content">
                <AiOutlineDollar className='card-icon' />
            </div>
            <div className="card-container">
                <p className='--text-sm'>Earnings</p>
                <h2 className='--text-md'>$198k</h2>
                <p><span style={{color:"green",fontWeight:"600"}}><HiOutlineArrowSmUp />37.8%</span> this month</p>
            </div>
        </div>
        <div className='card --flex-between --card --p '>
            <div className="icons-content" style={{backgroundColor:"rgba(120, 58, 192, 0.3)"}}>
                <RiFileList2Line className='card-icon' color='#92119c' />
            </div>
            <div className="card-container">
                <p className='--text-sm'>Orders</p>
                <h2 className='--text-md'>$2.4k</h2>
                <p><span style={{color:"red",fontWeight:"600"}}><HiOutlineArrowSmDown />2%</span> this month</p>
            </div>
        </div>
        <div className='card --flex-between --card --p '>
            <div className="icons-content" style={{backgroundColor:"rgba(79, 229, 237, 0.3)"}}>
                <LiaWalletSolid className='card-icon' color='rgba(0, 114, 162, 1)' />
            </div>
            <div className="card-container">
                <p className='--text-sm'>Balance</p>
                <h2 className='--text-md'>$2.4k</h2>
                <p><span style={{color:"red",fontWeight:"600"}}><HiOutlineArrowSmDown />2%</span> this month</p>
            </div>
        </div>
        <div className='card --flex-between --card --p '>
            <div className="icons-content" style={{backgroundColor:"rgba(240, 103, 151, 0.48)"}}        >
                <BsHandbag className='card-icon' color='rgba(220, 2, 2, 1)' />
            </div>
            <div className="card-container">
                <p className='--text-sm'>Total Sales</p>
                <h2 className='--text-md'>$89k</h2>
                <p><span style={{color:"green",fontWeight:"600"}}><HiOutlineArrowSmUp />11%</span> this month</p>
            </div>
        </div>
    </div>
  )
}

export default Cards