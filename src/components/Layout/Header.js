import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Sistema de Gestão - Produtos Estéticos</h1>
        <div className="header-user">
          <span className="user-greeting">Olá, Tia! 👋</span>
          <div className="user-avatar">T</div>
        </div>
      </div>
    </header>
  );
};

export default Header;