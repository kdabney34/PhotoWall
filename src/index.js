import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'


//render component instance Main inside index.js, wrapped in router so we know every time main is rendered, MAKE SURE THERE'S NO SPACE BETWEEN BROWSERROUTERS AND MAIN OR ELSE IT WILL CRASH!!!!
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));

//now connect browserrouter to a link component