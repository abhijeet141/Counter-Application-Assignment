import React from "react";
import { Button, Segment, Grid } from 'semantic-ui-react'

export const Counter = Props =>{
  function func1(){
    Props.setCount(Props.count + 1)
  }
return(
<div>
<Segment>
<h1>Count</h1>
{Props.count<=4 ? <h1 style={{color: "green"}}>{Props.count}</h1> : Props.count>=5 && Props.count<=9 ? <h1 style={{color: "blue"}}>{Props.count}</h1> :  <h1 style={{color: "red"}}>{Props.count}</h1> }
<Grid>
<Grid.Column width={8}>
{Props.count >= 10 ? <Grid.Column width={8}> <Button disabled content='Increment' color="green"/> </Grid.Column> :  <Grid.Column width={8}> <Button content='Increment' color="green" onClick = {function(event){func1()}}/> </Grid.Column>}
</Grid.Column>
{Props.count === 0 ? <Grid.Column width={8}> <Button disabled content='Decrement' color="red"/> </Grid.Column> :  <Grid.Column width={8}> <Button content='Decrement' color="red" onClick = {()=>{Props.setCount(Props.count - 1)}}/>  </Grid.Column>}
</Grid>
</Segment>
</div>
)}