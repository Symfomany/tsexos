"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Administrateur = /** @class */ (function () {
    function Administrateur(_nom, _prenom, _email, _password, _naissance, _ville, _estSuperAdmin, _geoloc, _permLecture, _permEcriture, _permExecution, _permRemoving, _article, _perm, _zipcode, _loisir) {
        if (_zipcode === void 0) { _zipcode = 69002; }
        this._nom = _nom;
        this._prenom = _prenom;
        this._email = _email;
        this._password = _password;
        this._naissance = _naissance;
        this._ville = _ville;
        this._zipcode = _zipcode;
        this._estSuperAdmin = _estSuperAdmin;
        this._geoloc = _geoloc;
        if (_loisir)
            this._loisir = _loisir;
        this._permLecture = _permLecture;
        this._permEcriture = _permEcriture;
        this._permExecution = _permExecution;
        this._permRemoving = _permRemoving;
        this._article = _article;
        try {
            (0, util_1.verifPerm)(_perm);
            this._perm = _perm;
            //TODO: Another things...
        }
        catch (error) {
            console.log(error);
        }
    }
    Administrateur.prototype.modifyPerms = function (email, perm) {
        this._email = email;
        this._perm = perm;
    };
    Object.defineProperty(Administrateur.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (val) {
            this._nom = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calcul l'age d'un administrateur
     * @returns Age
     */
    Administrateur.prototype.getAge = function () {
        var birth = this._naissance;
        var timeDiff = Math.abs(Date.now() - birth.getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        return age;
    };
    Administrateur.prototype.getMoyenneArticles = function () {
        var sum = 0;
        if (!this._article.length)
            return false;
        sum = this._article.reduce(function (acc, val) { return acc + val.note; }, 0);
        return Math.floor(sum / this._article.length);
    };
    return Administrateur;
}());
exports.default = Administrateur;
