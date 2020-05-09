import React from "react"
import { FiCheck } from "react-icons/fi"

import { SkillsContainer } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

export default function Skills() {
  const { typesOfTechnology, nextSteps } = useStaticQuery(graphql`
    query {
      typesOfTechnology: allAirtable(
        sort: { fields: data___Order, order: ASC }
        filter: {
          table: { eq: "Types of Technology" }
          data: { Name: { in: ["Front end", "Back end", "Mobile", "Tools"] } }
        }
      ) {
        nodes {
          id
          data {
            Name
            Technologies {
              id
              data {
                Name
              }
            }
          }
        }
      }

      nextSteps: airtable(
        table: { eq: "Types of Technology" }
        data: { Name: { eq: "Next Steps" } }
      ) {
        data {
          Technologies {
            id
            data {
              Name
            }
          }
        }
      }
    }
  `)
  const typesOfTechs = typesOfTechnology.nodes
  const { Technologies: nextTechs } = nextSteps.data

  return (
    <>
      <SkillsContainer className="skills_row">
        {typesOfTechs.map(type => {
          let technologies = type.data.Technologies
          return (
            <div className="skills_column" key={type.id}>
              <h3>{type.data.Name}</h3>
              <ul>
                {technologies.map(tech => (
                  <li key={tech.id}>
                    <FiCheck />
                    <span>{tech.data.Name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </SkillsContainer>
      <div className="learning_div">
        <strong>Next steps: </strong>
        {nextTechs.map((tech, index) => (
          <span key={tech.id}>
            {tech.data.Name}
            {index !== nextTechs.length - 1 && ", "}
          </span>
        ))}
      </div>
    </>
  )
}
