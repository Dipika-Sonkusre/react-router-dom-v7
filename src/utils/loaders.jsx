import { redirect } from "react-router";

export async function authLoader() {
  const isAuthenticated = localStorage.getItem("authToken");
  if (!isAuthenticated) {
    throw redirect("/login");
  }
  return null;
}
