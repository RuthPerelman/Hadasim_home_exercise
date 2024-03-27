import logo from './logo.svg';
import './App.css';
import Member from './components/member/Member';
import { useEffect, useState } from 'react';
import { client } from './services/axios';

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await client.get('/members/read')
      setMembers(response.data)
    }
    getData()
  }, [])

  return <>
    <Member></Member>
    {members}
  </>
}

export default App;
