import React from "react";


class UserClass extends React.Component {

    // render Method will return some pace of JSX;

    constructor(props) {
        super(props);
        // console.log(props);
        // State in CBC
        this.state = {
            count: 0,
            count2: 2,
        }
    };

    // see how to destructure the props in ClassBase Comp.
    render() {
        const { name, location } = this.props
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>CountIncrease - {count}</h2>
                <button style={{ padding: 4 }} onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count add</button>
                <h2>Count2 - {count2}</h2>
                <h2>Name - {name}</h2>
                <h3>Location - {location}</h3>
                <h3>Contact - 6265526730</h3>
            </div >
        )
    }
}


export default UserClass;