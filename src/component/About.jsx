import React from "react";
import { useLoaderData } from "react-router";

export default function About() {
  const data = useLoaderData();

  return (
    <div className="container" id="about">
      <h1>{data.message}</h1>
    </div>
  );
}
