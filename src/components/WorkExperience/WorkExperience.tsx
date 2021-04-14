import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
// import data from "../../data/WorkExperience.json"
import { graphql, useStaticQuery } from "gatsby"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    grid: {
      marginBottom: "1em",
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
)


const WorkExperience = function WorkExperience() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      allWorkExperienceJson {
        edges {
          node {
            title
            href
            logo
          }
        }
      }
    }
  `)
  const array = data.allWorkExperienceJson.edges
  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
          {array.map((item, index) => {
            item = item.node
            // const image = getImage(require(item.logo))
            return (
              <Grid item lg={4}  xs={12} key={index} className={classes.grid}>
                <Paper className={classes.paper}>
                  <Grid item>
                    <ButtonBase
                      className={classes.image}
                      href={item.href}
                      target="_blank"
                    >
                      <img src={item.logo} alt="new" />
                    </ButtonBase>
                  </Grid>
                  <Typography gutterBottom variant="subtitle1">
                    {item.title}
                  </Typography>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
    </div>
  )
}

export default WorkExperience
