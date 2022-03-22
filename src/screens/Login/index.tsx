import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { PageLayout } from '../../components/global/style'
import { LoginButton } from './style'

const Login = () => {
  const {search} = useLocation();

  useEffect(() => {
    if(search){
      const code = search.split('=')[1];
      axios.post('https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth', { code })
      .then((res) => {
        console.log(res.data.data.access_token, '*****')
      });
    }
    
  }, [search])
  
  
  return (
    <PageLayout>
      <LoginButton href='https://github.com/login/oauth/authorize?client_id=4f262cc9e20d3043da02'>Login to Github</LoginButton>
    </PageLayout>
  )
}

export default Login