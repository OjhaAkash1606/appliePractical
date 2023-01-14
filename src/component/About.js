import React from "react";
import { Link } from "react-router-dom";
import { navBar } from "./navbar";

function About() {
  return (
    <>
      {navBar?.map((item) => (
        <>
          <Link style={item.decoration} to={item.path}>
            {item.title}
          </Link>
          <br />
        </>
      ))}
      <p id="paragraph">
        The first sentence in the first paragraph is our thesis statement, which
        explains what this essay is about and the writer’s stance on the
        subject. Also in the first paragraph is the necessary background
        information for context, in this case a description of capybaras for
        readers who aren’t familiar with them. Notice how each of the three body
        paragraphs focuses on its own particular topic. The first discusses how
        rodents in general make good pets, and the second dispels some common
        rumors about capybaras as pets. The third paragraph directly addresses
        criticism of the writer’s point of view, a common tactic used in
        argumentative and persuasive essays to strengthen the writer’s argument.
        Last, the concluding paragraph reiterates the previous points and ties
        them together. Because the topic involves laws about keeping capybaras
        as pets, there’s a call to action about contacting lawmakers. The final
        sentence is written as a friendly send-off, leaving the reader at a high
        point.
      </p>
    </>
  );
}

export default About;
