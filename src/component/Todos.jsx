import { useLoaderData } from "react-router";

export default function Todos() {
  const todo = useLoaderData();
  console.log("🚀 ~ TodoDetails ~ todo:", todo);

  return (
    <div className="container" id="users">
      <h1>Todos: {todo.length}</h1>
    </div>
  );
}
