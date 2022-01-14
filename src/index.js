import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TicketApp } from './TicketApp';

require('dotenv').config()


ReactDOM.render(
  <TicketApp />,
  document.getElementById('root')
);
