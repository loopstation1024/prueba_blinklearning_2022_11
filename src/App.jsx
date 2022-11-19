import { Nav } from "./components/Nav";
import { connect } from 'react-redux';

const App = () => {
    return (
        <div className="app-container">
            <h1>Prueba React</h1>
            <Nav />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        exercise: state.exercise
    }
}

export default connect(mapStateToProps)(App);