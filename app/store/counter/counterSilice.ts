import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    isReady: boolean;
}

const initialState: CounterState = {
    value: 0,
    isReady: false,
};

 const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        initCounterState:(state, action: PayloadAction<number>) => {
            if (state.isReady) return;
            state.value = action.payload;
            state.isReady = true;
        },
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            if (state.value === 0) return;
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },

        setValue : (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    },
});

export const { increment, decrement, incrementByAmount, reset, setValue, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;
