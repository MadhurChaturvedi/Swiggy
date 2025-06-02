import React from "react";


class UserClass extends React.Component {

    // render Method will return some pace of JSX;

    constructor(props) {
        super(props);
        // console.log(props);
    }

    // see how to destructure the props in ClassBase Comp.
    render() {
        const { name, location } = this.props
        return (
            <div className="user-card">
                <h2>Name - {name}</h2>
                <h3>Location - {location}</h3>
                <h3>Contact - 6265526730</h3>
            </div>
        )
    }
}


export default UserClass;