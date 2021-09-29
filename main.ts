// console.log( 'Coucou Webtech' );
// const prenoms = ['Jean', 'Robert', 'Michel', 'Romain']
// prenoms.map( ( elt ) => console.log( elt ) )

import Administrateur from "./Administrateur";
import Articles from "./Articles";
import { permissions } from './util'

const artOne = new Articles( 5 )
const artTwo = new Articles( 2 )
const artThree = new Articles( 3 )

const julien = new Administrateur( "Boyer", "Julien", "julien@taiwa.fr",
    "12334566", new Date( '1988-02-02' ), "Lyon", true, { longitude: 23.2222, latitude: 2233 },
    1, 1, 1, 1, [artOne, artTwo, artThree],
    [permissions.ecriture, permissions.lecture, permissions.execution, permissions.removing] )


console.log( julien.getAge() )


// alias 
// function printName ( obj: { first: string; last?: string } ) {
//     console.log( obj.first )
// }
// // Both OK
// printName( { first: "Bob" } );
// printName( { first: "Alice", last: "Alisson" } );


julien.modifyPerms( "j.boyer69003@gmail.com", [permissions.ecriture, permissions.lecture] )
console.log( julien )
console.log( `La moyenne est de ${ julien.getMoyenneArticles() } ` )

// console.log( julien )
// import Animal from "./Animal"


// const ages = [10, 22, 33, 44, 55];
// const tabAges = ages.filter( ( elt ) => elt > 22 )
// console.log( tabAges )


// // const moyenne = ages.reduce(
// //     ( preVal, currentVal ) => preVal + currentVal, 0 ) / ages.length
// // console.log( moyenne )

// // // es6 template syntaxique
// console.log( `La moyenne est de : ${ moyenne }` )

// // // REST Paremeter
// function foo ( ...bar ) {
//     console.log( bar ); // Logs 'I can haz teh arguments'
// }
// foo( 'I', 'can', 'haz', 'several', 'arguments' );


// // function message ( text, ...style ) {
// //     console.log( style )
// //     return `<p>${ text }</p>`
// // }

// // message( "Bonjour ! ", "green", "24px", "Verdana" )


// // // Spread Operator
// const notesOne = [12, 10, 17]
// const notesTwo = [15, 14]

// const resultatNotes = [...notesOne, ...notesTwo]

// console.log( resultatNotes )


// // // Destructuring

// const address = {
//     city: "Lyon",
//     state: "France",
//     zip: 69003
// };
// let { city, state, zip } = address;

// console.log( city )
// let phrase: String = "true"

// let newsletter: Boolean = true
// newsletter = false

// let age: number = 26
// age = 22.5
// console.log( newsletter, age )

// let ages: number[] = [12, 15, 18]

// ages.filter( ( elt ) => elt >= 15 ).map( ( e ) => e * e )

// //  Enum
// enum Color { Red = "#22aacc", Green = "#33bbac", Blue = "#223344" }
// let c: Color = Color.Red
// console.log( c )

// // anyway
// let notSure: any = 4
// notSure = 'maybe a string'
// notSure = false
// console.log( notSure )


// let anotherList: any[] = [1, true, 'free', new Date()] // Mix `any` with other types.
// console.log( anotherList )




// // Void. The absense of a type.
// function warnUser (): void {
//     alert( 'This is my warning message' )
// }
// warnUser()

// // Function Declaration with Types.
// function add ( a: number, b: number ): number {
//     // return 'some string' //=> Error: Type 'string' is not assignable to type 'number'.
//     return a + b
// }
// console.log( add( 2, 5 ) )

// // Créer une fonction carré

// function square ( nb: number = 10 ): number {
//     return nb * nb
// }

// console.log( square( 23 ) )
// console.log( square() )

// let chien = new Animal( 2, "vert" )
// console.log( chien )
// type alpha = {
//     content: string
// }

// function err ( message: alpha ): never {
//     throw new Error( message.content );
// }

// console.log( err( { content: "test" } ) )


// function reverse ( s: String ): String {
//     return s.split( "" ).reverse().join( "" );
// }

// reverse( "hello world" );

// function greeter ( fn: ( a: string ) => void ) {
//     fn( "Hello, World" );
// }

// function printToConsole ( s: string ) {
//     console.log( s );
// }

// greeter( printToConsole );



// function doSomething ( x: string | null ) {
//     if ( x === null ) {
//         // do nothing
//         console.log( "Hello" )
//     } else {
//         console.log( "Hello, " + x.toUpperCase() );
//     }
// }
// doSomething( "alpha" )
// doSomething( null )
// function compare (): "oui" | "non" {
//     return "oui"
// }


// console.log( compare() )
// function printText ( s: string, alignment: "left" | "right" | "center" ) {
//     console.log( alignment)
// }
// printText( "G'day, mate", "center");

// function printId ( id: number | string ) {
//     console.log( "Your ID is: " + id );
// }
// // OK
// printId( 101 );
// // OK
// printId( "202" );

// function printName ( obj: { first: string; last?: string } ) {
//     console.log( obj )
// }
// // Both OK
// printName( { first: "Bob" } );
// printName( { first: "Alice", last: "Alisson" } );


// function printId ( id: number | string ) {
//     console.log( "Your ID is: " + id );
// }
// // OK
// printId( 101 );
// // OK
// printId( "202" );