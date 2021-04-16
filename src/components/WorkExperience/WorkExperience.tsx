import * as React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      height: "100%",
      margin: "auto",
      transition: "transform .2s" /* Animation */,
      maxWidth: 500,
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    image: {
      width: 128,
      height: 128,
    },
    grid: {
      marginBottom: "1em",
      width: "200px",
      height: "130px",
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100px",
      maxHeight: "100px",
    },
  })
)

const WorkImageWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`

const WorkImage = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 0;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
`

const WorkExperience = function WorkExperience() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      allWorkExperienceJson {
        edges {
          node {
            title
            href
            date
            logo {
              childImageSharp {
                gatsbyImageData(
                  width: 100
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)
  const array = data.allWorkExperienceJson.edges
  return (
    <div>
      <h4>Work Experience</h4>
      <Grid container spacing={2}>
        {array.map((item, index) => {
          item = item.node
          const image = getImage(item.logo)
          return (
            <Grid item lg={5} xs={12} key={index} className={classes.grid}>
              <Paper className={classes.paper}>
                <Link to={item.href} className="link-wrapper">
                  <WorkImageWrapper>
                    <GatsbyImage image={image} alt="new" />
                  </WorkImageWrapper>
                  <Description>
                    <Typography gutterBottom variant="subtitle1">
                      {item.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      {item.date}
                    </Typography>
                  </Description>
                </Link>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default WorkExperience
