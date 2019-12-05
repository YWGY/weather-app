import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div className="form__content">
            <div className="form__detail"><input type="text" name="city" placeholder="Please enter your city" required="required" /></div>
            <div className="form__detail"><input type="text" name="country" placeholder="Please enter your country" required="required"  /></div>
            <div className="form__detail"><button>Search</button></div>
        </div>
    </form>
)

export default Form;