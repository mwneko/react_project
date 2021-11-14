import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Cat from './CarClass'
// 该ReactDOM.render()函数接受两个参数，HTML 代码和一个 HTML 元素。
// 该函数的目的是在指定的 HTML 元素内显示指定的 HTML 代码。
// 在你的 React 项目的根目录下还有另一个文件夹，名为“public”。在这个文件夹中，有一个index.html文件。
// index.html中有一个single <div>。这是我们的 React 应用程序将被渲染的地方。
ReactDOM.render(
  <React.StrictMode>
    {/* <Main />是一大块JSX Component, id是自定义id，用于在html页面调用 */}
    {/* color = "red" 是一个 props */}
    <Main color="red" name="props" />
    <Cat model="MUSTANG"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// 可以通过这种形式给网页分层次(也可以写在一起)
ReactDOM.render(<App />, document.getElementById('app'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
