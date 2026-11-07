// Workshop interaction: ball cycles colour on tap
AFRAME.registerComponent('color-change', {
    init: function () {
        const colors = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#8e24aa'];
        let i = 0;
        this.el.addEventListener('click', () => {
            i = (i + 1) % colors.length;
            this.el.setAttribute('material', 'color', colors[i]);
        });
    }
});

// New interaction: box grows / shrinks on tap
AFRAME.registerComponent('grow-toggle', {
    schema: { big: { default: 2 } },
    init: function () {
        let isBig = false;
        this.el.addEventListener('click', () => {
            isBig = !isBig;
            const s = isBig ? this.data.big : 1;
            this.el.setAttribute('animation__grow', {
                property: 'scale', to: `${s} ${s} ${s}`,
                dur: 300, easing: 'easeOutBack'
            });
        });
    }
});