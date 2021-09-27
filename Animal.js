"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(nbPattes, couleursYeux) {
        this.nbPattes = 4;
        this.ilVole = false;
        this.couleursYeux = 'noir';
        this.nbPattes = nbPattes;
        this.couleursYeux = couleursYeux;
    }
    Animal.prototype.manger = function (nourriture) {
        if (nourriture === void 0) { nourriture = "croquettes"; }
        return "je mange des " + nourriture;
    };
    Animal.prototype.dormir = function (nbHeure) {
        if (nbHeure === void 0) { nbHeure = 5; }
        return "je dors  " + nbHeure + " heures";
    };
    return Animal;
}());
exports["default"] = Animal;
