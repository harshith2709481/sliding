// Import necessary tools from React
import React, { Component } from 'react';

// Import the styling from App.css
import './App.css';

// Create a React component named App
class App extends Component {
  constructor() {
    super(); // Call the parent constructor

    // Define the initial state of the app
    this.state = {
      index: 0,         // current slide index (starts at slide 0)
      slideCount: 3     // total number of slides
    };

    // Bind the method so it can access `this`
    this.autoSlide = this.autoSlide.bind(this);
  }

  // React lifecycle method: runs automatically after the component is loaded
  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Prevent memory leaks
  }

  // Function to slide to the next image
  autoSlide() {
    let nextIndex = (this.state.index + 1) % this.state.slideCount;
    this.setState({ index: nextIndex });
  }

  // Render method to show content on the screen
  render() {
    const { index } = this.state;

    return (
      <>
        {/* Top header section */}
        <header>
          <div className='logo'>Sliding Page - Slide {index + 1}</div>
        </header>

        {/* Middle section containing the image slider */}
        <section>
          <div className='slider'>
            <div
              className='slides'
              id="slideRef"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              <img src="1.png" alt="Slide 1" className='slide s1' />
              <img src="2.png" alt="Slide 2" className='slide s2' />
              <img src="3.png" alt="Slide 3" className='slide s3' />
            </div>
          </div>
        </section>

        {/* Footer at the bottom */}
        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </>
    );
  }
}

// Export the App component so it can be used in main.jsx
export default App;
