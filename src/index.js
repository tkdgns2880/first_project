import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch18/App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
); 
// 브라우저라우터를 사용하기 위해서는 태그를 만들어줘야한다