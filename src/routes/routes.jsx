import { createBrowserRouter } from "react-router";
import Layout from "../component/Layout";
import Home from "../component/Home";
import TodoDetails from "../component/TodoDetails";
import Todos from "../component/Todos";
import CreateTodo from "../component/CreateTodo";
import { ApiEndpoint } from "../enum";
import ProtectedLayout from "../component/ProtectedLayout";
import Login from "../component/auth/Login";
import { authLoader, roleLoader } from "../utils/loaders";
import AdminLayout from "../component/AdminLayout";
import AdminDashboard from "../component/AdminDashboard";
import SuperAdminLayout from "../component/SuperAdminLayout";
import SuperAdminDashboard from "../component/SuperAdminDashboard";
import ManageAdmins from "../component/ManageAdmins";

export const router = createBrowserRouter([
  {
    path: ApiEndpoint.HOME,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        errorElement: <div>Something went wrong!</div>,
      },
      {
        path: ApiEndpoint.LOGIN,
        Component: Login,
        errorElement: <div>Something went wrong!</div>,
      },

      // Protected layout
      {
        Component: ProtectedLayout,
        loader: authLoader,
        children: [
          {
            path: ApiEndpoint.TODOS,
            Component: Todos,
            loader: todosLoader,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: ApiEndpoint.TODO_DETAILS,
            Component: TodoDetails,
            loader: todoDetailsLoader,
            errorElement: <div>Something went wrong!</div>,
          },
        ],
      },

      // Admin layout
      {
        Component: AdminLayout,
        loader: roleLoader("admin"),
        children: [
          {
            path: ApiEndpoint.TODO_CREATE,
            Component: CreateTodo,
            action: createTodoAction,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: ApiEndpoint.ADMIN_DASHBOARD,
            Component: AdminDashboard,
            errorElement: <div>Something went wrong!</div>,
          },
        ],
      },

      // Super Admin layout
      {
        Component: SuperAdminLayout,
        loader: roleLoader("super-admin"),
        children: [
          {
            path: ApiEndpoint.SUPER_ADMIN_DASHBOARD,
            Component: SuperAdminDashboard,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: ApiEndpoint.MANAGE_ADMINS,
            Component: ManageAdmins,
            errorElement: <div>Something went wrong!</div>,
          },
        ],
      },
    ],
  },
]);

export async function todosLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}

export async function todoDetailsLoader({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );
  if (!res.ok) throw new Response("Not Found", { status: 404 });
  return res.json();
}

export async function createTodoAction({ request }) {
  const formData = await request.formData();
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: formData,
  });
  return res.json();
}
