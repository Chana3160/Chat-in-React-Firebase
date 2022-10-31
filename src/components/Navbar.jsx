import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>My Chat</span>
      <div className='user'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt='' />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar