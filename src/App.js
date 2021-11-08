import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import React from "react"
class App extends React.Component{
  state = {
    Person:{fullName:"Sakis Ahmed",
    bio:"Ingenieur Front End React JS",
    imgSrc:"/Photo.png",
    profession:"inge"
    },
    show:false,
    compteur: 0
  }
   handleName=()=>{
     this.setState({show:!this.state.show});
     console.log(this.state.show);
   }


   componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID); 
  }

  tick() {
    this.setState({
      compteur: this.state.compteur+1
    });
  }
  render() {
      
  return ( this.state.show?(
    <div className="App">
    <Card style={{ width: '18rem',display:'flex', justifyContent: 'space-around'}}>
        <Card.Img variant="top" src={this.state.Person.imgSrc}/>
        <Card.Body>
          <Card.Title>{this.state.Person.fullName}</Card.Title>
          <Card.Text>
            {this.state.Person.bio}<br/>
            {this.state.Person.profession}
          </Card.Text>
          <Button variant="warning" onClick={()=>this.handleName()}>hide</Button>
        </Card.Body>
      </Card>
      <Badge pill bg="secondary">Component Life: {this.state.compteur} seconds</Badge>
    </div>)
    :(
      <div className="App">
    <Button type="submit" variant="info" onClick={()=>this.handleName()} >Presentation</Button><br/>
    <Badge pill bg="secondary">Component Life: {this.state.compteur} seconds</Badge>     
    </div>
    )
  );
}
}
export default App;
