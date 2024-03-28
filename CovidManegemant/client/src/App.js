import logo from './logo.svg';
import './App.css';
import Member from './components/member/Member';
import { useEffect, useState } from 'react';
import { client } from './services/axios';
import Table from './components/table/Table';

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await client.post('/members/read', { colunmsNames: ['*'], conditions: ['1=1'] })
      // console.log(response.data);
      setMembers(response.data)
    }
    getData()
  }, [])

  return <>
    <Member></Member>
    <Table data={members}></Table>
  </>
}

export default App;
