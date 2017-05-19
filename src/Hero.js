import React, { Component } from 'react';
import HeroCard from './HeroCard';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoaded: false};
    this.cards = [
      { title: "Component Catalog", text: "Learn about the building blocks of our site.", buttonText: "View Catalog", url: "/" },
      { title: "API Documentation", text: "View API specifications.", buttonText: "View Documentation", url: "http://myapi/help" },
      { title: "Coding Standards", text: "The way we write code.", buttonText: "Learn More", url: "/" }
    ]
  }

  componentDidMount() {
      this.setState({isLoaded: true});
  }

  componentDidUpdate() {
      this.setState({isLoaded: true});
  }

  render() {
    let heroStyle = {
      backgroundImage: "url(" + this.props.background + ")"
    }

    let textClass = "hero__text js-hero__text hero__text--bottom hero__text--center";

    if (this.state.isLoaded.valueOf()) {
      textClass += " hero__text--load";
    }

    return (
      <section className="hero theme-blue-pattern hero--hasDesktopImage hero--hasCards">
        <div className="hero__image hero__image--shadeBottomDesktop" style={heroStyle}>
          <div className="container">
            <div className={textClass}>
              <h1 className="hero__title">{this.props.title}</h1>
              <div className="hero__subtitle">{this.props.subtitle}</div>
            </div>
          </div>
        </div>

        { this.cards.length ?
          <section className="call-to-action call-to-action-small">
            <div className="container ">
              <div className="panel-row">
                {
                  this.cards.map(function(card, index) {
                    return <HeroCard title={card.title} text={card.text} buttonText={card.buttonText} url={card.url} index={index} />
                  })
                }
              </div>
            </div>
          </section>
          : ""
        }
      </section>
    );
  }
}

export default Hero;