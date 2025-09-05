import { redirect } from "react-router";
import { ApiEndpoint } from "../enum";

export async function authLoader() {
  const isAuthenticated = localStorage.getItem("authToken");

  if (!isAuthenticated) {
    throw redirect(ApiEndpoint.LOGIN);
  }
  return null;
}

export const roleLoader = (role) => async () => {
  const userRole = localStorage.getItem("role");

  if (userRole !== role) {
    throw redirect(ApiEndpoint.LOGIN);
  }
  return null;
};
