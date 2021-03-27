import React from 'react';
import ReactDom from "react-dom";

import Button from './components/atoms/Button'


const App: React.FC = () => <div><Button></Button><h1>Hello world !!!!!</h1></div>
ReactDom.render(<App />, document.getElementById('app'))