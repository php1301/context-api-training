import React, { useContext, useEffect, useState } from 'react'
import { Wrapper, FieldWrappers } from './userProfile.styles'
import Heading from '../heading/heading.component'
import TextField from '../textField'
import UserDetailsContext from '../../context/userDetails.context'
import Loader from '../loader'

const UserProfile = () => {
  const {
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails
  } = useContext(UserDetailsContext)
  // Tạo state chứa data
  const [data, setData] = useState([])

//  data kéo về
//  sẽ có delay
//  thì ta sử dụng cái gì đó lắp vào cái delay
//  Như loader
  const [loading, isLoading] = useState(true)
  useEffect(()=>{
// gọi api để lấy data
// có các hàm gọi api như fetch, axios, ajax, isomorphic-unfetch, swr,...
  let mount = true
    const fetchData  = async () => {
      const dataFetched = await fetch("https://600ecd3e3bb1d100179e02a0.mockapi.io/users",{
        method:'GET', // ko cần cũng dc, nó mặc định là GET
      })
      // Biến data thành json
      const finalData = await dataFetched.json()
      // Lưu vào state
      setData(finalData)
      
    }
    if(mount){
    // Gọi hàm
    fetchData()
    }
    return () => {mount = false}
  }, [])
  // Kiểm tra xem in data ok chưa
  // console.log(data[0].name)
  // lưu ý data đang là array
  // Phải check null
  // Phải check null
  // Phải check null
  return (
    <>
    {data && data.length > 0 ? (<Wrapper>
      <Heading>My details</Heading>

      <FieldWrappers>
        <TextField
          label='name'
          value={data[0].name}
          onChange={e => {
            setUserDetails({ name: e.target.value })
          }}
        />
        <TextField
          label='date of birth'
          value={dateOfBirth}
          onChange={e => {
            setUserDetails({ dateOfBirth: e.target.value })
          }}
        />
        <TextField
          label='email'
          value={email}
          onChange={e => {
            setUserDetails({ email: e.target.value })
          }}
        />
        <TextField
          label='secret question'
          value={secretQuestion}
          onChange={e => {
            setUserDetails({ secretQuestion: e.target.value })
          }}
        />
        <TextField
          label='age'
          value={data[0].age}
          onChange={e => {
            setUserDetails({ secretAnswer: e.target.value })
          }}
        />
      </FieldWrappers>
      <img src={data[0].avatar} width="400px" height="400px"/>
    </Wrapper>
    ) : (<Loader />)
     }
    </>
  )
}

export default UserProfile
