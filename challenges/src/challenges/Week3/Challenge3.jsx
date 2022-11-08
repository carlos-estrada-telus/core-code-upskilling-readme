import {Route,Routes, Navigate, Link} from 'react-router-dom';


export const Challenge3 = () => {
 

  return (
    <div style={{border: '2px solid black'}}>
      <h2>Challenge #3</h2>

      <Routes>
        <Route path="/" element={(
          <>
          <ul>
            <li>
              <h3><Link to='/react' >React</Link> </h3>
            </li>
            <li>
              <h3><Link to='/corecode' >Core Code</Link> </h3>
            </li>
            <li>
              <h3><Link to='/helloworld' >Hello world</Link> </h3>
            </li>
          </ul>
            
          </>
        )} />
        <Route path="/react" element={(
          <>
            React
            <h4><Link to='/'>👈Back</Link> </h4>
          </>
        )} />
        <Route path="/corecode" element={(
          <>
            corecode
            <h4><Link to='/'>👈Back</Link> </h4>
          </>
        )} />
        <Route path="/helloworld" element={(
          <>
            helloworld
            <h4><Link to='/'>👈Back</Link> </h4>
          </>
        )} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
    </div>
  );
};


