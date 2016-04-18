import Ember from 'ember';

const { A } = Ember;

// From https://github.com/miguelcobain/ember-leaflet/blob/master/addon/mixins/container.js
export default Ember.Mixin.create({
  _childLayers: null,

  init() {
    this._super(...arguments);
    this.set('_childLayers', new A());
  },

  registerChild(childLayer) {
    this._childLayers.addObject(childLayer);

    // If container already setup setup child immediatly
    if (this._layer) {
      childLayer.layerSetup();
    }
  },

  unregisterChild(childLayer) {
    this._childLayers.removeObject(childLayer);

    // If container already setup teardown child immediatly
    if (this._layer) {
      childLayer.layerTeardown();
    }
  }
});
