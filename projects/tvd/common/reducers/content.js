const initialState = {
  
};

export default function content (state = initialState, action) {
 switch(action.type) {
   case 'ADD_DATA':
     return state;
   case 'DELETE_DATA':
     return state;
   default:
     return state;
 }
}
