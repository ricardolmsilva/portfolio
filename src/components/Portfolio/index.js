import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ProjectsContainer,
  Project,
  ProjectRow,
  ProjectColumn,
  ProjectButtons,
} from "./styles"

export default function Portfolio() {
  const {
    allAirtable: { projects },
  } = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Projects" } }
        sort: { order: DESC, fields: data___Order }
      ) {
        projects: nodes {
          id
          data {
            Name
            Description
            Demo
            Code
            Technologies {
              id
              data {
                Name
              }
            }
            Attachments {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <ProjectsContainer>
      {projects.map(project => (
        <Project key={project.id}>
          <h3>{project.data.Name}</h3>
          <ProjectRow>
            <ProjectColumn>
              <img
                src={project.data.Attachments[0].url}
                alt={project.data.Name}
              />
            </ProjectColumn>
            <ProjectColumn>
              <div>
                <p>
                  <strong>Technologies used: </strong>
                  {project.data.Technologies.map((tech, index) => (
                    <span key={tech.id}>
                      {tech.data.Name}
                      {index !== project.data.Technologies.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Project: </strong>
                  {project.data.Description}
                </p>
              </div>
              <div>
                <ProjectButtons>
                  {project.data.Demo && (
                    <a
                      href={project.data.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Go to demo"
                    >
                      <div>Demo</div>
                    </a>
                  )}

                  {project.data.Code && (
                    <a
                      href={project.data.Code}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Go to code repository"
                    >
                      <div>Code</div>
                    </a>
                  )}
                </ProjectButtons>
              </div>
            </ProjectColumn>
          </ProjectRow>
        </Project>
      ))}
    </ProjectsContainer>
  )
}
