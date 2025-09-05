import { Outlet } from "react-router";

export default function SuperAdminLayout() {
  return (
    <div className="container" id="super-admin-layout">
      <Outlet />
    </div>
  );
}
