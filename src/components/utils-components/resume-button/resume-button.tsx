import React from "react"
import Button from "@material-ui/core/Button"

type Props = {}

const ButtonComponent: React.FC<Props> = props => (
  <Button variant="contained" color="primary" onClick={props.onClick}>
    {props.children}
  </Button>
)

export default ButtonComponent
