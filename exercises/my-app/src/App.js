
import { useEffect, useState } from 'react';
import axios from 'axios';

import PaginationBar from './components/PaginationBar';

function App() {

  const [assets, setAssets] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [loadingAssets, setLoadingAssets] = useState(true);
  const [assetsError, setAssetsError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const pagination_number = 10;
  const token ='';
  const instance = axios.create({
    //baseURL: 'https://api.coincap.io/v2/assets/',
    baseURL: 'https://api.coinstats.app/public/v1/coins/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+ token,
              'Access-Control-Allow-Origin': '*'
     }
  });

  useEffect(() => {
    async function getAssets() {
      setLoadingAssets(true);
      setAssets([]);
      try {
         //const response = await fetch(`https://gutendex.com/books/?page=${currentPage}`);
         const response = await fetch(`https://api.coinlore.net/api/tickers/?start=${currentOffset}&limit=${pagination_number}`);
         const json = await response.json();
        // setHasPreviousPage(json.previous !== null);
         setAssets(json.data);
         console.log(json.data);
        //const { data } = await instance.get(`?skip=${currentOffset}&limit=10`)
        //setHasPreviousPage(data.previous !== null);
        //setAssets(data.results);
      } catch (error) {
        setAssetsError(error.message); 
        // setBooksError(error.response.data)
      }
      setLoadingAssets(false);
    }
    getAssets();
  }, [currentPage]);

  
 
  const moveForward = () => {
    
    let tmpCurrentPage = currentPage + 1;
    setCurrentPage(tmpCurrentPage);
    let tmpCurrentOffset = tmpCurrentPage * pagination_number;
    setCurrentOffset(tmpCurrentOffset);
    console.log('fwd:' + tmpCurrentPage + '/' + tmpCurrentOffset);
  };


  const moveBack = () => {
    
    let tmpCurrentPage = currentPage - 1;
    let tmpCurrentOffset = tmpCurrentPage * pagination_number;
    console.log('tmpCurrentPage:' + tmpCurrentPage);
    console.log('tmpCurrentOffset:' + tmpCurrentOffset);

    if(tmpCurrentPage > 0) {
      console.log('greater:');
      setCurrentPage(tmpCurrentPage);
      setCurrentOffset(tmpCurrentOffset);
    }else {
      console.log('lesser:');
      setCurrentPage(0);
      setCurrentOffset(0);
    }
    console.log('back:' + tmpCurrentPage + '/' + tmpCurrentOffset);
    

  };



  return (
    <div className="container-fluid">
      
      {loadingAssets && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {assetsError ? <h4>{assetsError}</h4> : null}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price in $</th>
          </tr>
        </thead>
        <tbody>


        {assets && assets.map((asset) => (
          <tr key={asset.id}>
            <th scope="row">{asset.rank}</th>
            <td>{asset.name}</td>
            <td>{asset.symbol}</td>
            <td>{asset.price_usd}</td>
          </tr>
        ))}


        </tbody>
</table>

    <PaginationBar moveForward={moveForward} moveBack={moveBack}></PaginationBar>


    </div>
  );
}

export default App;
