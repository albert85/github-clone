import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PageLayout } from '../../components/global/style'
import { LoginButton } from './style'

const Login = () => {
  const {search} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(search){
      const code = search.split('=')[1];
      axios.post('https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth', { code })
      .then((res) => {
        const resp = res.data.data.access_token;
        if(resp){
          localStorage.setItem('@githubToken', resp);
          navigate('/auth/search')
        }
      });
    }
    
  }, [navigate, search])
  
  
  return (
    <PageLayout>
      <LoginButton href='https://github.com/login/oauth/authorize?client_id=4f262cc9e20d3043da02'>Login to Github</LoginButton>
    </PageLayout>
  )
}

export default Login