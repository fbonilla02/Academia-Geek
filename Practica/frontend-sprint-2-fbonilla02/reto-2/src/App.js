import React from 'react';
import './App.css';
import Logos from './components/Logos';
import Timer from './components/Timer';

import { Layout, TextH1 } from './style/Layout';

function App() {
  return (
    <Layout >
    <TextH1>WE'RE LAUNCHING SOON</TextH1>

      <Timer />

      <Logos/>
    </Layout>
  );
}

export default App;
