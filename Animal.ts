

class Animal {
    /**
     * @number nbPattes
     */
    nbPattes: number = 4


    ilVole: boolean = false

    couleursYeux: string = 'noir'

    constructor ( nbPattes: number, couleursYeux: string ) {
        this.nbPattes = nbPattes
        this.couleursYeux = couleursYeux
    }
    /**
     * Permet a un animal de manger
     * @param nourriture: String  
     * @returns String
     */
    manger ( nourriture: string = "croquettes" ): string {
        return `je mange des ${ nourriture }`
    }
    dormir ( nbHeure: number = 5 ): string {
        return `je dors  ${ nbHeure } heures`
    }
}

export default Animal