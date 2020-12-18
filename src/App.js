import { Component } from 'react';
import './App.less';
import AppHeader from './components/header';
import AppHome from './components/views/home';
import AppFooter from './components/footer';

// import { Layout } from 'antd';
// const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggleHandler = () => this.setState({ toggle: !this.state.toggle });

  render() {
    return (
      <div className="w-full">
        <AppHeader status={this.state.toggle} setToggler={this.toggleHandler} />
        <AppHome />
        <AppFooter />
      </div >
    )
  }
}

export default App;



