import { Outlet } from "react-router";

export default function ProtectedLayout() {
  return (
    <div className="container" id="protected-layout">
      <Outlet />
    </div>
  );
}
