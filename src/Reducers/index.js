const initialState = {
    books: [
        {id:1, title:"Fourth Way",author: "Uspenskiy P.D"},
        {id:2, title:"In search of the miraculous",author: "Uspenskiy P.D"}
      ]
}


const reducer = ( state = initialState, action )=>{
    switch( action.type ){
        case 'BOOKS_LOADED':
            return{
                books: action.payload
            }
        default:
            return state
    }
}

export default reducer