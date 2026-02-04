import React from 'react';
import ReactDOM from 'react-dom/client';
import Cubes from './components/Cubes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Cubes
        gridSize={10}
        maxAngle={30}
        radius={3}
        borderStyle="1px dashed #6f85ff"
        faceColor="#0b1020"
        rippleColor="#6f85ff"
        rippleSpeed={0.5}
        autoAnimate
      />
    </div>
  </React.StrictMode>
);
