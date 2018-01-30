
const initialState ={
    books: [0,1,2,3],
    cover:"https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
    title:"First React Tutorial",
    author:"SKR"
}


function BookApp (state=initialState,action){
    return state
}
// ./src/reducers/bookReducers.js
// export default (state = [], action) => {
//     switch (action.type){
//       // Check if action dispatched is
//       // CREATE_BOOK and act on that
//       case 'CREATE_BOOK':
//           state.push(action.book);
//       default:
//             return state;
//     }
//   };

export default BookApp