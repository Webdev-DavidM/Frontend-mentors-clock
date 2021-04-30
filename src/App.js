import './App.scss';
import Media from 'react-media';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const data = useRef();
  const [time, setTime] = useState();
  const [quote, setQuote] = useState();
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [geoLocation, setGeoLocation] = useState();
  const [expanded, setExpanded] = useState(false);
  const [yearData, setYearData] = useState();

  useEffect(() => {
    try {
      (async function timeAPI() {
        let timeData = await axios('http://worldtimeapi.org/api/ip');
        console.log(timeData);
        let formattedTime = timeData.data.datetime.split('T')[1].substr(0, 5);
        setTime(formattedTime);
        setYearData(timeData.data);
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
    setExpanded((prevBool) => !prevBool);
  };

  const refreshQuote = async () => {
    setQuoteLoading(true);
    (async function quoteAPI() {
      let randomQuote = await axios('http://api.quotable.io/random');
      setQuote(randomQuote.data);
    })();
    setTimeout(() => {
      setQuoteLoading(false);
    }, 1000);
  };

  setTimeout(async () => {
    (async function timeAPI() {
      let timeData = await axios('http://worldtimeapi.org/api/ip');
      console.log(timeData);
      let formattedTime = timeData.data.datetime.split('T')[1].substr(0, 5);
      setTime(formattedTime);
    })();
  }, 1000);

  return (
    <>
      <div className='image-container'>
        <div className='opacity-layer'> </div>
        <Media
          queries={{
            small: '(max-width: 768px)',
            medium: '(min-width: 769px) and (max-width: 1024px)',
            large: '(min-width: 1024px)',
          }}>
          {(matches) => (
            <>
              {matches.small && time ? (
                time.split(':')[0] > 5 && time.split(':')[0] < 18 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/mobile-daytime-375x667.jpg`}
                    alt=''
                  />
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/mobile-nighttime-375x667.jpg`}
                    alt=''
                  />
                )
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile-daytime-375x667.jpg`}
                  alt=''
                />
              )}
              {matches.medium &&
                (time ? (
                  time.split(':')[0] > 5 && time.split(':')[0] < 18 ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/tablet-daytime-375x667.jpg`}
                      alt=''
                    />
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/tablet-nighttime-375x667.jpg`}
                      alt=''
                    />
                  )
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/tablet-daytime-375x667.jpg`}
                    alt=''
                  />
                ))}
              {matches.large &&
                (time ? (
                  time.split(':')[0] > 5 && time.split(':')[0] < 18 ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/desktop-daytime-375x667.jpg`}
                      alt=''
                    />
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/desktop-nighttime-375x667.jpg`}
                      alt=''
                    />
                  )
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/desktop-daytime-375x667.jpg`}
                    alt=''
                  />
                ))}
            </>
          )}
        </Media>
        {/* The data container is absolute so it can move up and down, I have created another full size container within
        so I can use flex and display the quote at the top and time at the bottom */}
        <div
          className={`${
            !expanded ? 'data-container' : 'data-container move-data-container'
          }`}>
          <div className='info-flex-container'>
            <section className='quote'>
              <p> {quote && quote.content}</p>
              <button
                className={`${
                  quoteLoading
                    ? 'refresh-svg-container refresh-rotate'
                    : 'refresh-svg-container'
                } `}
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
                {time && time.split(':')[0] > 5 && time.split(':')[0] < 18 ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icons/icon-sun.svg`}
                    alt=''
                  />
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icons/icon-moon.svg`}
                    alt=''
                  />
                )}

                <span className='time-of-day'>
                  &nbsp;
                  {time && time.split(':')[0] > 5 && time.split(':')[0] < 12 ? (
                    <span>GOOD MORNING</span>
                  ) : time &&
                    time.split(':')[0] > 12 &&
                    time.split(':')[0] < 18 ? (
                    <span>GOOD AFTERNOON</span>
                  ) : (
                    <span>GOOD EVENING</span>
                  )}
                </span>
              </div>

              <div className='main-time'>
                <h1>{time && time}</h1> <span className='time-zone'>BST</span>
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
                  <div
                    className={`${
                      !expanded
                        ? 'arrow-image-container'
                        : 'arrow-image-container arrow-move'
                    }`}>
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
              <span>{yearData && yearData.timezone}</span>
            </div>
            <div className='day-of-the-year'>
              <span>DAY OF THE YEAR</span>
              <span>{yearData && yearData.day_of_year}</span>
            </div>
            <div className='day-of-the-week'>
              <span>DAY OF THE WEEK</span>
              <span>{yearData && yearData.day_of_week}</span>
            </div>
            <div className='week-number'>
              <span>WEEK NUMBER</span>
              <span>{yearData && yearData.week_number}</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
