import React from 'react'
import { Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <div className="container" id="admin-layout">
      <Outlet />
    </div>
  );
}
