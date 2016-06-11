'use strict';

/**
 * Storing center points.
 */

crop.service('cropDataService', [function () {
    this._settuped = false;
    this._center = null;


    this.store = function (_centerPoint) {
        this._center = _centerPoint;
        this._settuped = true;
    };

    this.load = function () {
        if(!this._settuped){
            return null;
        }
        return this._center;
    };

    this.hasStored = function(){
        return this._settuped;
    };

    this.cleanup = function () {
        this._settuped = false;
    };

}]);