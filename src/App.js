import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="main-content">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'clients' && <div>Clientes em desenvolvimento...</div>}
          {activeTab === 'products' && <div>Produtos em desenvolvimento...</div>}
          {activeTab === 'sales' && <div>Vendas em desenvolvimento...</div>}
          {activeTab === 'reports' && <div>Relatórios em desenvolvimento...</div>}
        </main>
      </div>
    </div>
  );
}

export default App;