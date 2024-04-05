// store.js
import { configureStore } from '@reduxjs/toolkit';
import contactSlice  from '../Components/contactSlice'; // Import your contact reducer

// // Other imports and configuration

// const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     // Other reducers if any
//   },
//   // Other store configurations if any
// });

// export default store;


const reducer = {
    contacts:contactSlice,
};

const store = configureStore({
    reducer:reducer,
    devTools:true,
});

export default store