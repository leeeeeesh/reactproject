import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
// reset.css를 index.html넣어도되는데 그럼 한번들어가고 정적으로 끝나는데 여기 넣으면 동적으로 작동
// (reset.css)  id값으로 들어갈때 css안먹힐때가잇는데 그땐 그냥 여기 index.js에 넣으면된다.
// 처음에 import중에서 맨밑에 썼는데 여기도 순서대로 적용되는지 reset이 맨밑으로가서 위로 올려줬음

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
