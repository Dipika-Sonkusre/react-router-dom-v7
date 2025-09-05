import { createBrowserRouter } from "react-router";
import Layout from "../component/Layout";
import Home from "../component/Home";
import TodoDetails from "../component/TodoDetails";
import Todos from "../component/Todos";
import CreateTodo from "../component/CreateTodo";
import { ApiEndpoint } from "../enum";

export const router = createBrowserRouter([
  {
    path: ApiEndpoint.HOME,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: ApiEndpoint.TODOS,
        Component: Todos,
        loader: todosLoader,
      },
      {
        path: ApiEndpoint.TODO_DETAILS,
        Component: TodoDetails,
        loader: todoDetailsLoader,
      },
      {
        path: ApiEndpoint.TODO_CREATE,
        Component: CreateTodo,
        action: createTodoAction,
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
