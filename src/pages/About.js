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
            <div className="mt-10 min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
                <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-gray-800">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700">
                        About Us
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Welcome to our application! We are a team of passionate developers dedicated to building user-friendly, efficient, and modern web experiences.
                        Our mission is to empower users with powerful tools and seamless interfaces using the latest technologies.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Our team values innovation, transparency, and collaboration. We strive to improve continuously and deliver high-quality products to our users.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Meet the Team</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <User />
                            <User />
                            <User />
                            {/* Add more <User /> components as needed */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About

// 