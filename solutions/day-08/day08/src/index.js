// index.js
import React from "react";
import {createRoot} from "react-dom/client";

class Image extends React.Component{
    state = {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg'
    }

    changeAnimal = () => {
        let dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        let catURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg'
        let image = this.state.image === catURL ? dogURL : catURL
        this.setState({ image })
    }
    render() {
        return(
            <div className={'animal'}>
                <button onClick={this.changeAnimal}>Change pic!</button>
                <img src={this.state.image} height={250} alt='animal' />
            </div>
        )
    }
}

class App extends React.Component {
    // declaring state
    state = {
        count: 0,
    }

    plusOne = () => {
        this.setState({count: this.state.count + 1})
    }

    minusOne = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        // accessing the state value
        const count = this.state.count
        return (
            <div className='App'>
                <main>
                    <div className={'main-wrapper'}>
                        <h1>{count} </h1>
                        <button onClick={this.plusOne}>
                            Add One
                        </button>
                        <button onClick={this.minusOne}>
                            Minus One
                        </button>
                        <Image />
                    </div>
                </main>
            </div>
        )
    }
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);