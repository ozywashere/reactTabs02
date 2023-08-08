import { useState, useEffect } from 'react';
import Loader from './ui/Loader';
import Error from './ui/Error';
import Jobs from './jobs/Jobs';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState([]);
  const [currentItem, setCurrenItem] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <main>
      <Jobs
        data={data}
        setData={setData}
        currentItem={currentItem}
        setCurrenItem={setCurrenItem}
      />
    </main>
  );
}

export default App;
