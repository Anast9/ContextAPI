
import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBounda from'./ErrorBounda/ErrorBouda';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      cars: [
        {name: 'Моя девушка - инопланетянка', year: 2022},
        {name: 'Глоток молодости', year: 2018},
        {name: 'Невеста на замену', year: 2019}
        
      ],
  
      pageTitle: 'Дорамы смотреть онлайн',
      showCars: false
    }
  }


  toggleCarsHandler = () =>{

    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = pageTitle =>{
      this.setState({pageTitle})
  }

  onChageName = (name, index) =>{
 const car = this.state.cars[index]
 car.name = name
 const cars = [...this.state.cars]
  cars[index] = car
  this.setState({cars})
}

deleteHandler = (index) =>{
  let cars = this.state.cars.concat()
  cars.splice(index, 1)

  this.setState({cars})

}


  render() {

    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;
if(this.state.showCars){
  cars = this.state.cars.map((car, index) =>{
    return (
      <ErrorBounda key={index}>
      < Car
          
          name={car.name}
           year={car.year}
           index={index}
           onDelete={this.deleteHandler.bind(this, index)}
           onChageName={event => this.onChageName(event.target.value, index)}
           />
           </ErrorBounda>
    )
  
  })
}

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>

<ClickedContext.Provider value={this.state.clicked}>
<Counter clicked={this.state.clicked}/>
</ClickedContext.Provider>
       


<button style={{marginTop: 20}}
onClick={this.toggleCarsHandler}>Поиск  Дорам</button>

<button onClick={() => this.setState({clicked: true})}>test</button>

<div style={{
  width: 400,
  margin: 'auto',
  paddingTop: '20px'
}}>
{cars}
 </div>
 </div>
);

}

}


export default App;


