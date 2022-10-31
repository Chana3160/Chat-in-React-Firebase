import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search