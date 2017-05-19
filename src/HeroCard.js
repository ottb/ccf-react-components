import React, { Component } from 'react';

class HeroCard extends Component {
  render() {
    return (
      <div className="call-to-action__item__minimal-rhythm center  l-3col--{this.props.index}">
        <a href={this.props.url}>
          <h3 className="call-to-action__title lede show-above-bp2">
            {this.props.title}
          </h3>
        </a>

        <div className="call-to-action__text show-above-bp2">
          <p>
            {this.props.text}
          </p>
        </div>
        <a href={this.props.url} className="call-to-action-item__button button--secondary button--arrow">{this.props.buttonText}</a>
      </div>
    );
  }
}

export default HeroCard;