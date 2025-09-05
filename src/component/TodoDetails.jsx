import { useLoaderData } from "react-router";

export default function TodoDetails() {
  const todo = useLoaderData();
  console.log("🚀 ~ TodoDetails ~ todo:", todo);

  return (
    <div className="container" id="userDetails">
      <h1>Todo Details</h1>
      <p>
        <b>Id: </b>&nbsp;
        {todo.id}
      </p>
      <p>
        <b>User Id: </b>&nbsp;
        {todo.userId}
      </p>
      <p>
        <b>Title: </b> &nbsp;
        {todo.title}
      </p>
    </div>
  );
}
