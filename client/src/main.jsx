import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import { TransactionsProvider } from "./context/TransactionContext.jsx";



const container=document.getElementById("root")
const root=createRoot(container)

root.render(
  <TransactionsProvider>
    <App/>
  </TransactionsProvider>
)