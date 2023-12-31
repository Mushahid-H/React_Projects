import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Mushahid-H')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Follwers {data.followers}
      <p>{data.name}</p>
      <p>{data.html_url}</p>
      <img src={data.avatar_url} alt='github img' width={300} />
    </div>
  )
}

export default Github
