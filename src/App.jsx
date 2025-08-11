import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      slideCount: 3,
    };

    this.autoSlide = this.autoSlide.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  autoSlide() {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % prevState.slideCount,
    }));
  }

  render() {
    const { index } = this.state;

    // Calculate the translateX value for sliding
    const translateXValue = `translateX(-${index * 100}%)`;

    return (
      <>
        <header>
          <div className='logo'>Sliding Page - Slide {index + 1}</div>
        </header>

        <section>
          <div className='slider'>
            <div
              className='slides'
              id='slideRef'
              style={{ transform: translateXValue, transition: 'transform 1s ease-in-out' }}
            >
              <div className='slide s1'></div>
              <div className='slide s2'></div>
              <div className='slide s3'></div>
            </div>
          </div>
        </section>

        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
