import React, { Component } from 'react';
import './App.css';
import SiteHeader from './SiteHeader'
import Hero from './Hero'

class App extends Component {
  render() {
    return (
      <div>
        <SiteHeader logo="https://my.clevelandclinic.org/-/scassets/images/org/logo/logo-ccf.ashx?la=en&amp;hash=1AC03A77F0EFD3CE883B2F5FEBFDED5E33EBF191" />
        <Hero background="imgs/code-review.jpg" title="Content Engineering" subtitle="Technical Documentation" />
      </div>
    );
  }
}

export default App;
