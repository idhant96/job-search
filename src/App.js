import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap';
import Jobs from './Jobs';


function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchJobs();

  return (
    <Container className="my-4">
      <h1>New Jobs!</h1>
      {loading && <h1>loading...</h1>}
      {error && <h1>error ...</h1>}
      {jobs.map(job => {
        return <Jobs key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;

