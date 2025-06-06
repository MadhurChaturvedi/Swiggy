import User from "../Components/User.Class.js";
import React from "react"

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("About Constructor")

    }


    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.log("About render")
        return (
            <div>
                About Us fuck you you shit fat
                < User  />
            </div >
        )
    }
}

export default About

// 