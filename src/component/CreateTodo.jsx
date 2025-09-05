import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router";

export default function CreateTodo() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const actionData = useActionData();
  console.log("🚀 ~ CreateTodo ~ actionData:", actionData);

  useEffect(() => {
    if (actionData && actionData.id) {
      //jsonplaceholder returns id for created object
      setUserId("");
      setTitle("");
      setCompleted(false);
      alert("Todo created successfully");
    }
  }, [actionData]);

  return (
    <div className="container" id="createUser">
      {/* It automatically submit form to action function */}
      <Form method="post">
        <h1>Create Todo</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="userId">UserId</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <br />

        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />

        <div style={{ display: "flex", gap: "3px" }}>
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={() => setCompleted((prev) => !prev)}
          />
          <label htmlFor="completed">Completed</label>
        </div>
        <br />

        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
