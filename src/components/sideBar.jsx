import React from 'react'
import './sideBar.css'


function Sidebar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
            <li className="nav-item"> 
            <a href="/" className="nav-link">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
            </li>

            <li className="nav-item">
            <a href="#" className="nav-link collapsed">
                <i className="bi bi-list"></i> 
                <span>Orders</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link collapsed" 
                        data-bs-target='#components-nav'
                        
            >
                <i className="bi bi-card-list"></i>
                <span>Inventory</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link collapsed"
                        data-bs-target='#components-nav'
                        data-bs-toggle='collapse'
            >
                <i className="bi bi-people"></i>
                <span>OrderList</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link collapsed"
                        data-bs-target='#components-nav'
                        data-bs-toggle='collapse'
            >
                <i className="bi bi-bar-chart"></i> 
                <span> Analytics </span>
            </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar