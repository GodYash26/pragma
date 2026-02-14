import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const CosmicBackground = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesConfig = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#ff69b4', '#ff1493', '#ff6ec7', '#ffb6e1', '#ffc0cb', '#ffb7d5'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 6 },
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.1,
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: {
          default: 'bounce' as const,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.08,
          opacity: 1,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.3,
          },
        },
        push: {
          quantity: 5,
        },
      },
    },
    detectRetina: true,
  } as any), []);

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      className="fixed inset-0 -z-10"
    />
  );
};

export default CosmicBackground;
