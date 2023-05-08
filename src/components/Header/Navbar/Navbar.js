import React from 'react'
import Search from '../Search/Search';
import Navlist from '../Navlist';

function Navbar() {
  return (
    <div className='f-ac'>
        <Navlist />
        <div>
          <Search/>
        </div>
    </div>
  )
}

export default Navbar;