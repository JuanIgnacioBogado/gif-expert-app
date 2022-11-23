import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { GifExpertApp } from './GifExpertApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
