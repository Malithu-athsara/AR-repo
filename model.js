AFRAME.registerComponent('auto-fit', {
    schema: { size: { default: 0.7 } },
    init: function () {
        this.el.addEventListener('model-loaded', () => {
            console.log('auto-fit: model loaded');
        });
    }
});