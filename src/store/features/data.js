import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../unit/api';


export const searchSlice = createSlice({
    name: 'search', 
    initialState: {
        data: [],
        value: '',
        isLoading: true
    },
    reducers: {
        setData (state, { payload }) {
            console.log('setData', payload.product_trends);
            state.isLoading = false
            state.data = payload.product_trends;
        },
        setValue (state, { value }) {
            state.value = value;
        },
    },
});

export const { setData, setValue } = searchSlice.actions;
export const asyncGetData = createAsyncThunk('search/data', async (str, action) => {
    // 异步
    const res = await http.post('/keyword_search', {
        "login_token":"INTERVIEW_SIMPLY2021",  //# required(str): login token
        "search_phrase": str,               // # required(str):
    })
    console.log(222,res, res.data.product_trends)
    if(res.status === 'OK') {
        action.dispatch(setData(res.data));
    }
});

export default searchSlice.reducer; // 导出reducer，在创建store时使用到
