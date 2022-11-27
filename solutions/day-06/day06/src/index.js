// index.js
import React from "react";
import {createRoot} from "react-dom/client";
import {tenHighestPopulation} from "./data/ten_highest_populations";


const PopulationBar = (props) => {

    const style = {
        width: 700 * (props.population / 7693165599)
    }

    return(
        <p>
            <button style= {style}></button>
        </p>
    )
}

const TenHighestPopulationFormatted = () => {

    return (tenHighestPopulation.map((country) =>
        <tr key={country.country}>
            <td >{country.country}</td>
            <td>
                <PopulationBar population={country.population} />
            </td>
            <td>{(country.population / 1000000000).toFixed(1)} Billion</td>
        </tr>
    ))
}



const App = () => {

    return (
        <div className='app'>
            <header>
                <div className='header-wrapper'>
                    <h1>World Country Data</h1>
                </div>
            </header>
            <main>
                <div className={'main-wrapper'}>
                    <table>
                        <tbody>
                            <TenHighestPopulationFormatted />
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}


const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);