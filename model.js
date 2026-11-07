AFRAME.registerComponent('auto-fit', {
    schema: { size: { default: 0.7 } },
    init: function () {
        this.el.addEventListener('model-loaded', () => {
            const obj = this.el.getObject3D('mesh');

            
            this.el.object3D.scale.set(1, 1, 1);
            this.el.object3D.position.set(0, 0, 0);
            this.el.object3D.updateMatrixWorld(true);

            
            const box = new THREE.Box3().setFromObject(obj);
            const size = box.getSize(new THREE.Vector3());
            console.log('Model size:', size);
        });
    }
});