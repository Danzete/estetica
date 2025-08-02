import React from 'react';
import { Users, Package, ShoppingCart, TrendingUp, FileText } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'products', label: 'Produtos', icon: Package },
    { id: 'sales', label: 'Vendas', icon: ShoppingCart },
    { id: 'reports', label: 'Relatórios', icon: FileText }
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <ul className="sidebar-menu">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`sidebar-item ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;