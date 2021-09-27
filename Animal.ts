

class Animal {
    nbPattes: number = 4
    ilVole: boolean = false
    couleursYeux = 'noir'

    constructor ( nbPattes: number, couleursYeux: string ) {
        this.nbPattes = nbPattes
        this.couleursYeux = couleursYeux
    }
    manger ( nourriture: string = "croquettes" ): string {
        return `je mange des ${ nourriture }`
    }
    dormir ( nbHeure: number = 5 ): string {
        return `je dors  ${ nbHeure } heures`
    }
}

export default Animal