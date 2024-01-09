import React, { useEffect, useState } from 'react'

function Github() {
    const[data , setData] = useState([])
    useEffect(()=>{
        fetch('http://api.github.com/users/rpmwin')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center bg-gray-500 m-4 text-white text-3xl p-3'>
      Github Followers: {data.followers} <br /><br />
      USER NAME : {data.name} <br /><br />
      Public Repos : {data.public_repos}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github
