const initialState = {
  isMobile: false,
  height: null,
  width: null,
};

export default function cdnUrl (state = initialState, action) {
 switch(action.type) {
   case 'ADD_DATA':
     return state;
   case 'DELETE_DATA':
     return state;
   default:
     return state;
 }
}
