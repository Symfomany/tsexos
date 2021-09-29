import Articles from "./Articles"
import { verifPerm, permissions } from './util'

type _geoloc = { longitude: number; latitude: number }

class Administrateur {

    private _nom: string
    private _prenom: string
    private _email: string
    private _password: string
    private _naissance: Date
    private _ville: string
    private _zipcode: number
    private _estSuperAdmin: boolean
    private _geoloc: { longitude: number; latitude: number }
    private _loisir: string[]
    private _permLecture: permissions.lecture
    private _permEcriture: permissions.ecriture
    private _permExecution: permissions.execution
    private _permRemoving: permissions.removing
    private _article: Articles[]
    private _perm: permissions[]


    constructor ( _nom: string, _prenom: string, _email: string, _password: string, _naissance: Date, _ville: string, _estSuperAdmin: boolean, _geoloc: { longitude: number; latitude: number }, _permLecture: number, _permEcriture: number, _permExecution: number, _permRemoving: number, _article: Articles[], _perm: permissions[], _zipcode: number = 69002, _loisir?: string[] ) {
        this._nom = _nom
        this._prenom = _prenom
        this._email = _email
        this._password = _password
        this._naissance = _naissance
        this._ville = _ville
        this._zipcode = _zipcode
        this._estSuperAdmin = _estSuperAdmin
        this._geoloc = _geoloc
        if ( _loisir )
            this._loisir = _loisir

        this._permLecture = _permLecture
        this._permEcriture = _permEcriture
        this._permExecution = _permExecution
        this._permRemoving = _permRemoving
        this._article = _article

        try {
            verifPerm( _perm )
            this._perm = _perm
            //TODO: Another things...
        } catch ( error ) {
            console.log( error )

        }
    }

    modifyPerms ( email: string, perm: permissions[] ): void {
        this._email = email
        this._perm = perm
    }

    get nom (): string {
        return this._nom
    }
    set nom ( val: string ) {
        this._nom = val
    }

    /**
     * Calcul l'age d'un administrateur
     * @returns Age
     */
    getAge (): number {
        let birth = this._naissance
        let timeDiff = Math.abs( Date.now() - birth.getTime() );
        let age = Math.floor( ( timeDiff / ( 1000 * 3600 * 24 ) ) / 365.25 );
        return age
    }

    getMoyenneArticles (): number | boolean {
        let sum: number = 0;
        if ( !this._article.length )
            return false
        sum = this._article.reduce( ( acc, val ) => acc + val.note, 0 )
        return Math.floor( sum / this._article.length )
    }





}


export default Administrateur;