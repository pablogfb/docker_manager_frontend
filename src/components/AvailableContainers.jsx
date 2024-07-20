import { delContainer, fetchAvailableContainers, sendCommandContainer } from '../http.js';
import { useState, useEffect } from 'react';



export default function AvailableContainers({ handleActionChange }) {
  
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
      async function fetchData() {
          try {
              const data = await fetchAvailableContainers();
              setFetchedData(data);
          } catch (error) {
              console.log(error)
              setError({ message: error.message || 'Could not fetch data' });
          }
          setIsFetching(false);
      }
      fetchData();

  }, [isFetching]);


  if (error) {

  }

  const handleUpdate = async (func, data) => {
    await func(data);
    setIsFetching(true);
  }

  return (<>
    <div className="mt-10 text-center">
      <h2 className="text-xl font-bold text-stone-500 my-4">Available Containers</h2>
    </div>
    <div>
      {isFetching && <p className="fallback-text">Loading Containers</p>}
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image ID</th>
            <th>Names</th>
            <th>Status</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {!isFetching && fetchedData !== undefined && (fetchedData.map((container) => (
            <tr key={container.id} className="place-item">
              <td className='pr-5'>{container.id}</td>
              <td className='pr-5'>{container.image}</td>
              <td className='pr-5'>{container.names}</td>
              <td className='pr-5'>{container.status}</td>
              <td className='pr-5'>
                <a onClick={() => handleActionChange('container', container.id)} className='ml-1 cursor-pointer'>Info</a>
                <a onClick={() => sendCommandContainer(container.id, 'start')} className='ml-1 cursor-pointer'>Start</a>
                <a onClick={() => sendCommandContainer(container.id, 'stop')} className='ml-1 cursor-pointer'>Stop</a>
                <a onClick={() => handleUpdate(delContainer, container.id)} className='ml-1 cursor-pointer'>Destroy</a>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  </>

  );
}
