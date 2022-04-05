import './App.css';
import { Component } from 'react';
import styles from './component/css/appStyles.module.css' // Can "NOT" be use in child component.
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={styles.success}>Success</h1>
        <ClickCounter name="Java" />
        <HoverCounter name="Java" />
      </div>
    );
  }
}

export default App;
