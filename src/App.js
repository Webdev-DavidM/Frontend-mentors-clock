import './App.scss';
import Media from 'react-media';
import React, { useRef } from 'react';

function App() {
  const data = useRef(null);

  const move = () => {
    console.log('clicked');
    console.log(data.current);
    data.current.classList.add('move-data-container');
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

        <div ref={data} className='data-container'>
          <section className='quote'>
            <p>
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              sunt eos quas assumenda voluptatum, similique voluptas, ipsa
              adipisci repellendus et quam inventore praesentium
            </p>
          </section>
          <button onClick={() => move()}>sssss</button>
        </div>
      </div>
    </>
  );
}

export default App;
