import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Child from './child.jsx';
import Parent from './Parent.jsx';

function Main() {
  const [name, setName] = React.useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="/child" element={<Child receiveName={setName} />} />
          {/* Pass name directly to Parent */}
          <Route path="/Parent" element={<Parent newName={name} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
