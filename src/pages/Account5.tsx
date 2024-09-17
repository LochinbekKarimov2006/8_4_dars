import React from 'react'
import { Link } from 'react-router-dom'

function Account5() {
  return (
    <div>
    <div className=''>
        <form className='div-3' action="">
            <label className='input_text' htmlFor="">Keep your account secure
            <input className='input' type="text" placeholder='Use SMS' />
            <input className='input' type="text" placeholder='Use an authenticator app' />

            </label>
            <Link to="/5">
            <button className='button'>Continue »</button>
            </Link>
        </form>
    </div>
</div>
  )
}

export default Account5