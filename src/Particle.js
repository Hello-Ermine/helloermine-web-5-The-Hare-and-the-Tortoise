import logo from './logo.svg';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const ParticleStyle = {
    position:'absolute ',
}
function Particle() {
  return (
      <Particles
    height="100vh"
    style={ParticleStyle}
    options={{
      fpsLimit: 60,
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            area: 800,
          }
        },
        move: {
          enable: true,
          speed: 0.1,
          direction: 'right',
        },
        size: {
          value: 2.5,
          random: {
            enable: true,
            minimumValue: .5
          }
        },
        opacity: {
          value: 1,
          animation: {
            enable: true,
            minimumValue: 0.2,
            speed: .5,
          }
        },
      },
    }} />
  );
}

export default Particle;