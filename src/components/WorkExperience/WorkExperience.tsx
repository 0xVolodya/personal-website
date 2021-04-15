import * as React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
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
      maxWidth: 500,
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

const WorkImage = styled.img`
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
            logo
          }
        }
      }
    }
  `)
  const array = data.allWorkExperienceJson.edges
  return (
    <Grid container spacing={2}>
      {array.map((item, index) => {
        item = item.node
        return (
          <Grid item lg={6} xs={12} key={index} className={classes.grid}>
            <Paper className={classes.paper}>
              <WorkImageWrapper>
                <WorkImage src={item.logo} alt="new" />
              </WorkImageWrapper>
              <Description>
                <Typography gutterBottom variant="subtitle1">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  {item.date}
                </Typography>
              </Description>
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default WorkExperience
