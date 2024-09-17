import React from 'react'
import { Link } from 'react-router-dom'

function Account3() {
  return (
    <div>
        <div className=''>
            <form className='div-3' action="">
            <label className='input_text' htmlFor="">VAT
            <input className='input' type="text"  placeholder='VAT number'/>
                </label>
                <label className='input_text' htmlFor="">Industry
            <select className='input' name="" id="" >
                <option value="">Please select your industry...</option>
                <option value="">Please select your industry...</option>
                <option value="">Please select your industry...</option>
                <option value="">Please select your industry...</option>
                <option value="">Please select your industry...</option>
            </select>
                </label>
                <label className='input_text' htmlFor="">Organization website
                <input className='input' type="text" placeholder='www.example.com' />
                </label>
                <Link to="/3">
            <button className='button'>Continue »</button>
            </Link>
            </form>
        </div>
    </div>
  )
}

export default Account3