import { useEffect } from 'react';

function Image() {
  useEffect(() => {
    console.log('IMAGE WAS MOUNTED / CREATED!');

    let intervalId = setInterval(() => {
      console.log('HELLO FROM THE INTERVAL');
    }, 1000);

    // disposal function!
    return () => {
      console.log('COMPONENT IS BEING UNMOUNTED / DESTROYED!');
      clearInterval(intervalId);
    };
  }, []);
  return (
    <img style={{ height: '50px' }} src="https://media2.giphy.com/media/rFMUFv6IS0VPQOlwvx/giphy.gif"></img>
  );
}

export default Image;
