class Animal {
    constructor(nbPattes, couleursYeux) {
        /**
         * @number nbPattes
         */
        this.nbPattes = 4;
        this.ilVole = false;
        this.couleursYeux = 'noir';
        this.nbPattes = nbPattes;
        this.couleursYeux = couleursYeux;
    }
    /**
     * Permet a un animal de manger
     * @param nourriture: String
     * @returns String
     */
    manger(nourriture = "croquettes") {
        return `je mange des ${nourriture}`;
    }
    dormir(nbHeure = 5) {
        return `je dors  ${nbHeure} heures`;
    }
}
export default Animal;
