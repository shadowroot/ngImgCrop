'use strict';

/**
 * Storing center points.
 */

crop.service('cropDataService', function () {
    this._settuped = false;
    this._center = null;

    this.store = function (_centerPoint) {
        this._center = _centerPoint;
        this._settuped = true;
        console.log("Crop stored", this._center);
    };

    this.load = function () {
        if(!this._settuped){
            return null;
        }
        //console.log("Crop loaded", this._center);
        return this._center;
    };

    this.hasStored = function(){
        return this._settuped;
    };

    this.clear = function () {
        this._settuped = false;
    };

});