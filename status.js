AFRAME.registerComponent('marker-status', {
    init: function () {
        const banner = document.getElementById('status');
        this.el.addEventListener('markerFound', () => {
            banner.textContent = 'Marker found!';
            banner.classList.add('found');
        });
        this.el.addEventListener('markerLost', () => {
            banner.textContent = 'Marker lost: point at the Hiro marker';
            banner.classList.remove('found');
        });
    }
});