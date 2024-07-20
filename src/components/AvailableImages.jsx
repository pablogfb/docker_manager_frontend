import { delImage, fetchAvailableImages, createContainer } from '../http.js';
import { useState, useEffect } from 'react';



export default function AvailableImages({ handleActionChange }) {

  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
      async function fetchData() {
          try {
              const data = await fetchAvailableImages();
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
      <h2 className="text-xl font-bold text-stone-500 my-4">Available Images</h2>
    </div>
    <div>
      {isFetching && <p className="fallback-text">Loading Images</p>}
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>TAGS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {!isFetching && fetchedData !== undefined && (fetchedData.map((image) => (
            <tr key={image.id} className="place-item">
              <td className='pr-5'>{image.id}</td>
              <td className='pr-5'>{image.tag}</td>
              <td className='pr-5'>
                <a onClick={() => handleActionChange('image', image.id)} className='ml-1 cursor-pointer'>Info</a>
                <a onClick={() => createContainer(image.id)} className='ml-1 cursor-pointer'>Create</a>
                <a onClick={() => handleUpdate(delImage, image.id)} className='ml-1 cursor-pointer'>Delete</a>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  </>

  );
}
