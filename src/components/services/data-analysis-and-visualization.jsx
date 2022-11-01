import './services.css';
import { useContext } from 'react';
import { themeContext } from '../context/themeContext';

const DataAnalysisVisualization = ({name}) => {
    const { theme } = useContext(themeContext);
    const analysisimages = [{name: 'Assets', img: '/img/services/data-analysis/assets.jpg'},{name: 'Customers', img: '/img/services/data-analysis/customers.jpg'},
                            {name: 'Brands and Products', img: '/img/services/data-analysis/brands-products.jpg'}, {name: 'Financials', img: '/img/services/data-analysis/financials.jpg'},
                            {name: 'Human Resources', img: '/img/services/data-analysis/hr.jpg'}]
    return (
        <div className="container py-5">
            <div className="">
                <span className="text-warning fw-bold"><i className="fa fa-info-circle"></i> Ezweb Solutions provides full-fledge data analytic tools as well as visual dashboard for your bussiness for understanding the data.</span>
            </div>
            <div className="my-3 py-3">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className={"card h-100 bg-" + theme}>
                            <img src="/img/services/data-analysis.png" alt="" className="w-100" />
                            <br /><br />
                            <div className="p-2"><span className="fs-3">D</span>ata analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, and is used in different business, science, and social science domains. In today's business world, data analysis plays a role in making decisions more scientific and helping businesses operate more effectively.</div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className={"card h-100 bg-" + theme}>
                            <img src="/img/services/data-visualization.jpg" alt="" className="w-100" />
                            <br /><br />
                            <div className="p-2"><span className="fs-3">D</span>ata and information visualization (data viz or info viz) is an interdisciplinary field that deals with the graphic representation of data and information. It is a particularly efficient way of communicating when the data or information is numerous as for example a time series.
                                <br /><br /><span className="fs-3">I</span>t is also the study of visual representations of abstract data to reinforce human cognition. The abstract data include both numerical and non-numerical data, such as text and geographic information. It is related to infographics and scientific visualization. One distinction is that it's information visualization when the spatial representation (e.g., the page layout of a graphic design) is chosen, whereas it's scientific visualization when the spatial representation is given.</div>
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <div className="h3 py-2">Areas where we work on data analysis</div>
                    <div className="row">
                        {analysisimages.map((img, idx) => {
                            return(
                                <div className="col-6 col-md-4 col-lg-2 py-2" key={idx}>
                                    <div className="text-center">
                                        <div className="text-center">
                                            <img src={img.img} alt="" className="w-50 rounded-circle" />
                                        </div>
                                        <div className="py-1 fw-bold">{img.name}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="h3 py-3">Methods of analysis</div>
                    <div className="row">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/img/services/data-analysis/statistical.png" alt="" className="w-100" />
                                <div className="text-center fw-bold py-2">Statistical Methods</div>
                            </div>
                            <div className="col-md-6">
                                <img src="/img/services/data-analysis/data-science.jpg" alt="" className="w-100" />
                                <div className="text-center fw-bold py-2">Data Science and ML Algorithms</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <div className="h3 pt-2">Data visualization with interactive dashboard</div>
                    <div className='pb-3'>
                        We helps you build the interactive dashboard for data visualization to extract the important information quickly. 
                        Matplotlib library from python and plotlyjs library from javascript are tools we use for making the visualization.
                    </div>
                    <div className="row">
                        <div className="col-md-6 dashboard-container">
                            <img src='/img/services/data-visualization/db1.jpg' alt="" className="w-100" />
                            <div className="dashboard-btn">
                                <button className="btn btn-outline-warning btn-rounded-lg">View Image</button>
                            </div>
                        </div>
                        <div className="col-md-6 dashboard-container">
                            <img src='/img/services/data-visualization/data-visualization.jpg' alt="" className="w-100" />
                            <div className="dashboard-btn">
                                <button className="btn btn-outline-warning btn-rounded-lg">View Image</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DataAnalysisVisualization;