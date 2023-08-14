import './App.css';
import { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins.js';
import { getCoins } from './api/getCoins.js';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getCoins()
    setCoins(data)
  }

  return (
    <div className="container">
      <div className="row">
        <input onChange={e => setSearch(e.target.value)} type='text' placeholder='Search a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  )
}

export default App
