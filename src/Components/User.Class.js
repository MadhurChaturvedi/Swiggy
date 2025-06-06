import React from "react";


class UserClass extends React.Component {

    // render Method will return some pace of JSX;

    constructor(props) {
        // console.log("Children Constructor")
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "No-img"

            }
        }
    };

    async componentDidMount() {
        console.log("Children componentDidMount")

        /* api call this method */
        /* when the component is  mounted they mounted in two phases 
        
        1. render phase - Constructor and render 
        2. commit phase - Dom is updated
        So the constructor and and render is render phase then the 
           react actually updates the dom and the componentDidmount is Called
           this is life cycle 

        */

        const data = await fetch("https://api.github.com/users/MadhurChaturvedi");
        const json = await data.json();

        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    // 55:48

    componentDidUpdate() {
        console.log("Did update");

    }
    // see how to destructure the props in ClassBase Comp.
    render() {
        // const { name, location } = this.props
        // const { count, count2, value } = this.state;
        console.log("Children render")

        return (
            <div className="user-card">
                {/* <h2>CountIncrease - {count}</h2>
                <button style={{ padding: 4 }} onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count add</button>
                <input type="text" onChange={
                    (e) => {
                        const value2 = e.target.value
                        this.setState({
                            value: value2
                        })
                    }
                } /> */}
                {/* <h2>Count2 - {count2}</h2> */}
                <img src={this.state.userInfo.avatar_url} width={100} style={{ borderRadius: "5px" }} alt="" />
                <h2>Name - {this.state.userInfo.name}</h2>
                <h3>Location - {this.state.userInfo.location}</h3>
                <h3>Contact - 6265526730</h3>
                {/* <h5>{value}</h5> */}
            </div >
        )
    }
}


export default UserClass;