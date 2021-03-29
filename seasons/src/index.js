import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //will be instantly called before anything else, good to initialise state
    //good place to do one time setups

    state = { lat: null, errorMessage: '' };

    //componentDidMount is good place to do data loading
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({ lat: position.coords.latitude });},
            err => {this.setState({ errorMessage: err.message });}
        );
    }

    //componentDidUpdate is good place to do  data loading when state/props change


    //componentWillUnmount is a good place to cleanup, epecially for non-React stuff


    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message='Please accept location request'/>;
    }

    // required to define render
    //avoid doing anything here that returns anything else but JSX
    render() {   
        return <div className='border red'> {this.renderContent()} </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);