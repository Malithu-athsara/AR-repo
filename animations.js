document.querySelector('a-scene').addEventListener('loaded', () => {
    // Rotation: turntable spins
    document.getElementById('turntable').setAttribute('animation', {
        property: 'rotation', to: '0 360 0',
        dur: 10000, easing: 'linear', loop: true
    });

    // Position: ball bounces
    document.getElementById('ball').setAttribute('animation', {
        property: 'position', to: '-0.75 0.5 0',
        dir: 'alternate', dur: 800, easing: 'easeInOutQuad', loop: true
    });
});