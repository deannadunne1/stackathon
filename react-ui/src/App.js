import React from 'react';
import './App.css';
import {Navbar, Footer} from './components'
import Routes from './routes'

function App() {
  // const [message, setMessage] = useState(null);
  // const [isFetching, setIsFetching] = useState(false);
  // const [url, setUrl] = useState('/api');

  // const fetchData = useCallback(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       setMessage(json.message);
  //       setIsFetching(false);
  //     }).catch(e => {
  //       setMessage(`API call failed: ${e}`);
  //       setIsFetching(false);
  //     })
  // }, [url]);

  // useEffect(() => {
  //   setIsFetching(true);
  //   fetchData();
  // }, [fetchData]);

  return (
    <div className="App">
      {/* <header className="App-header">
        { process.env.NODE_ENV === 'production' ?
            <p>
              This is a production build from create-react-app.
            </p>
          : <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
        }
        <p>{'« '}<strong>
          {isFetching
            ? 'Fetching message from API'
            : message}
        </strong>{' »'}</p>
      </header> */}
      <div className="page">
        <Navbar />
        <Routes />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );

}

export default App;
