import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initalState = [{
    uuid: uuidv4(),
    name: 'Refrigerador'
},
{
    uuid: uuidv4(),
    name: 'Armario'
},
{
    uuid: uuidv4(),
    name: 'Carro'
},
]

export const listSlice = createSlice({
    name: 'list',
    initialState: initalState,
    reducers: {
    addObject: ( state, {payload} ) => {
            state.push({uuid: uuidv4(), name: payload});
        },
    sortArray: (state) => {
             state.sort((a,b) => {
                
                const wordA = a.name.toLowerCase();
                const wordB = b.name.toLowerCase();
                
                if(wordA > wordB)return 1;
                if(wordA < wordB)return -1;

                return 0;

             });
             
    },
    
    deleteObject: (state,{payload}) => {
            return state.filter(object => object.uuid !== payload);
    }
    }
});


// Action creators are generated for each case reducer function
export const { addObject, sortArray, deleteObject } = listSlice.actions;