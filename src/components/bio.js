/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GithubIcon, LinkedinIcon } from "../icons"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {/* <img src={profilePic} alt="Profile" style={{ width: "100px" }} /> */}
      <div style={{ fontSize: 100, lineHeight: "100px" }}>😎</div>
      {author?.name && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "sans-serif",
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {author.name}
          </div>
          <div
            style={{
              fontSize: 14,
              lineHeight: "14px",
              color: "#3A3B3C",
              marginBottom: "10px",
            }}
          >
            LG CNS Software Engineer
          </div>
          <div>{author?.summary || null}</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <GithubIcon id={social.github} />
            <LinkedinIcon id={social.linkedin} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
