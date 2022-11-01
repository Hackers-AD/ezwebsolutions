import React from "react";
import ScrollBar from '../scrollBar';
import Navbar from "../navbar";
import Footer from '../footer';
import Portfolios from "./portfolios";

const Portfolio = () => {

    return (
        <React.Fragment>
            <ScrollBar />
            <Navbar />
            <Portfolios />
            <Footer />
        </React.Fragment>
    );
}
 
export default Portfolio;