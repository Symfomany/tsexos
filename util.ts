export const verifPerm = ( thePrem: number[] ): boolean => {
    if ( thePrem.length !== 4 ) {
        throw new Error( 'Number of permission invalide' );
    }
    //TODO: Fix ); innatendue 
    // thePrem.map( ( elt ) => !( elt == 0 || elt == 1 ) throw new Error( 'Permission invalide. It shoold be 0 or 1' ) )
    for ( let i = 0; i < 4; i++ ) {
        if ( !( thePrem[i] == 0 || thePrem[i] == 1 ) ) {
            throw new Error( 'Permission invalide. It shoold be 0 or 1' );
        }
    }

    return true;
}

export enum permissions { lecture = 1, ecriture = 1, execution = 1, removing = 1 }



