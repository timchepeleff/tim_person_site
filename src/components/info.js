import React from "react"

import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> Tim.
      </div>
      <div className="h1 code mt-4 mb-3">func main() {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info code">
        <p>
          I’m a developer with a penchant for the web, interactive UI’s, and
          straightforward user experiences. I embrace opportunities to solve
          complex problems efficiently. Able to understand both the developer
          and business perspectives I can address technical issues with
          comprehensive solutions.
        </p>

        <p>
          I'm currently working at{" "}
          <a href="https://wayfair.com" target="_blank">
            Wayfair{" "}
          </a>{" "}
          and leading the Release Engineering team responsible for building out
          an awesome automated deployment platform that ensures our developers
          can ship early, and ship often.
        </p>
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://github.com/timchepeleff">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/timchepeleff/"
        >
          <Linkedin />
        </a>
        <a
          className="mr-5 icon"
          href="mailto://tim.chepeleff+personal@gmail.com"
        >
          <Mail />
        </a>
      </div>
    </div>
  )
}
