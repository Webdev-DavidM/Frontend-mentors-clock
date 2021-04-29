import './App.scss';
import Media from 'react-media';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const data = useRef();
  const [time, setTime] = useState();
  const [quote, setQuote] = useState();
  const [geoLocation, setGeoLocation] = useState();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      (async function timeAPI() {
        let timeData = await axios('http://worldtimeapi.org/api/ip');
        setTime(timeData.data);
        console.log(timeData);
      })();

      (async function geoLocationAPI() {
        let geoLocation = await axios('https://freegeoip.app/json/');
        console.log(geoLocation.data);
        setGeoLocation(geoLocation.data);
      })();

      (async function quoteAPI() {
        let randomQuote = await axios('http://api.quotable.io/random');
        setQuote(randomQuote.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const move = () => {
    data.current.classList.toggle('move-data-container');
    document
      .querySelector('.arrow-image-container')
      .classList.toggle('arrow-move');
    setExpanded((prevBool) => !prevBool);
  };

  const refreshQuote = async () => {
    (async function quoteAPI() {
      let randomQuote = await axios('http://api.quotable.io/random');
      setQuote(randomQuote.data);
    })();
  };

  return (
    <>
      <div className='image-container'>
        <div className='opacity-layer'> </div>
        <Media
          queries={{
            small: '(max-width: 768px)',
            medium: '(min-width: 769px) and (max-width: 1440px)',
            large: '(min-width: 1440px)',
          }}>
          {(matches) => (
            <>
              {matches.small && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile-daytime-375x667.jpg`}
                  alt=''
                />
              )}
              {matches.medium && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/tablet-daytime-768x1024.jpg`}
                  alt=''
                />
              )}
              {matches.large && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/desktop-daytime-1440-800.jpg`}
                  alt=''
                />
              )}
            </>
          )}
        </Media>
        {/* The data container is absolute so it can move up and down, I have created another full size container within
        so I can use flex and display the quote at the top and time at the bottom */}
        <div ref={data} className='data-container'>
          <div className='info-flex-container'>
            <section className='quote'>
              <p> {quote && quote.content}</p>
              <button
                className='refresh-svg-container'
                onClick={() => refreshQuote()}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/icon-refresh.svg`}
                  alt=''
                />
              </button>
              <p className='author'>{quote && quote.author}</p>
            </section>

            <section className='time'>
              <div className='intro'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icons/icon-sun.svg`}
                  alt=''
                />
                <span className='time-of-day'>&nbsp;GOOD MORNING</span>
              </div>

              <div className='main-time'>
                <h1>11:39</h1> <span className='time-zone'>BST</span>
              </div>
              <div className='place'>
                {' '}
                <span>
                  {' '}
                  IN {geoLocation && geoLocation.city.toUpperCase()},{' '}
                  {geoLocation && geoLocation.country_name.toUpperCase()}
                </span>
                <button className='expand-btn' onClick={() => move()}>
                  {!expanded ? <span>MORE</span> : <span>LESS</span>}
                  <div className='arrow-image-container'>
                    {' '}
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/icon-arrow-up.svg`}
                      alt=''
                    />{' '}
                  </div>
                </button>
              </div>
            </section>
          </div>
          <section className='timezone-expand-info'>
            <div className='timezone'>
              <span>CURRENT TIMEZONE</span>
              <span>Europe/London</span>
            </div>
            <div className='day-of-the-year'>
              <span>DAY OF THE YEAR</span>
              <span>295</span>
            </div>
            <div className='day-of-the-week'>
              <span>DAY OF THE WEEK</span>
              <span>5</span>
            </div>
            <div className='week-number'>
              <span>WEEK NUMBER</span>
              <span>42</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
