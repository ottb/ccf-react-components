import React, { Component } from 'react';

class SiteHeader extends Component {
  render() {
    return (
      <header className="header ">
        <div className="header__wrap clearfix">
          <span className="header__logo">
            <a href="/"><img src={this.props.logo} alt="logo-ccf" /></a>
          </span>
        </div>
      </header>
    );
  }
}

export default SiteHeader;