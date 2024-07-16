import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, AppThunk } from '../..';
import { AndressDTO } from '../../../interfaces/andress';
import { AndressState } from './types';

const initialState: AndressState = {
    andressDTO: undefined
};


export const slice = createSlice({
    name: 'andressSlice',
    initialState,
    reducers: {

        setAndress(state: AndressState, action: PayloadAction<AndressDTO | undefined>) {
            state.andressDTO = action.payload;
        }
    },
});

export const fetchAndressAsync = (url: string): AppThunk => {
    return async (dispatch: AppDispatch) => {
            const {data} = await axios.get(url);
            dispatch(setAndress(data))
    }
}

export const {
    setAndress
    
} = slice.actions;

export default slice.reducer;