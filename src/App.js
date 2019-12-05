import React from "react";
import Header from "./components/header";
import Form from "./components/form";
import Weather from "./components/weather";
import Footer from "./components/footer";
import "../src/styles/main.css";

const API_KEY = "15030af51153be7ba4a310aabd2c564a";
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await request.json();
    if (city && country !== undefined) {
      this.setState ({
        temperature: data.main.temp,
        city:data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter the value"
      })
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="header__content">
              <Header />
            </div>
            <div className="main__content">
              <div className="left__content">
                <Form getWeather={this.getWeather} />
              </div>
              <div className="right__content">
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;