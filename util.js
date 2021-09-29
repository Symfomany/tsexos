"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.verifPerm = void 0;
var verifPerm = function (thePrem) {
    if (thePrem.length !== 4) {
        throw new Error('Number of permission invalide');
    }
    //TODO: Fix ); innatendue 
    // thePrem.map( ( elt ) => !( elt == 0 || elt == 1 ) throw new Error( 'Permission invalide. It shoold be 0 or 1' ) )
    for (var i = 0; i < 4; i++) {
        if (!(thePrem[i] == 0 || thePrem[i] == 1)) {
            throw new Error('Permission invalide. It shoold be 0 or 1');
        }
    }
    return true;
};
exports.verifPerm = verifPerm;
var permissions;
(function (permissions) {
    permissions[permissions["lecture"] = 1] = "lecture";
    permissions[permissions["ecriture"] = 1] = "ecriture";
    permissions[permissions["execution"] = 1] = "execution";
    permissions[permissions["removing"] = 1] = "removing";
})(permissions = exports.permissions || (exports.permissions = {}));
