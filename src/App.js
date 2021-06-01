import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ContactTodo from './ContactTodo/ContactTodo';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={ContactTodo} />
      </Switch>
    </Router>
  );
}
