import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Package, ShoppingCart, DollarSign, AlertCircle } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const salesData = [
    { mes: 'Jan', vendas: 45000 },
    { mes: 'Fev', vendas: 52000 },
    { mes: 'Mar', vendas: 48000 },
    { mes: 'Abr', vendas: 61000 },
    { mes: 'Mai', vendas: 55000 },
    { mes: 'Jun', vendas: 67000 }
  ];

  return (
    <div className="dashboard">
      <div className="metrics-grid">
        <div className="metric-card success">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Vendas do Mês</p>
              <p className="metric-value">R$ 67.000</p>
              <p className="metric-change positive">+12% vs mês anterior</p>
            </div>
            <DollarSign className="metric-icon" size={32} />
          </div>
        </div>
        
        <div className="metric-card primary">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Pedidos</p>
              <p className="metric-value">20</p>
              <p className="metric-change positive">+4 esta semana</p>
            </div>
            <ShoppingCart className="metric-icon" size={32} />
          </div>
        </div>
        
        <div className="metric-card purple">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Clientes Ativos</p>
              <p className="metric-value">48</p>
              <p className="metric-change positive">+3 novos</p>
            </div>
            <Users className="metric-icon" size={32} />
          </div>
        </div>
        
        <div className="metric-card orange">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Produtos</p>
              <p className="metric-value">63</p>
              <p className="metric-change negative">5 com estoque baixo</p>
            </div>
            <Package className="metric-icon" size={32} />
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="card chart-container">
          <h3 className="chart-title">Vendas por Mês</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => [`R$ ${value.toLocaleString()}`, 'Vendas']} />
              <Bar dataKey="vendas" fill="var(--primary-color)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="alert">
        <AlertCircle size={20} />
        <span>Atenção: 5 produtos com estoque baixo</span>
      </div>
    </div>
  );
};

export default Dashboard;