"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { decrement, increment, initCounterState, setValue } from "@/app/store/counter/counterSilice";
import { useEffect } from "react";

interface Props {
    initialValue: number;
}

export const CartCounter = ({ initialValue }: Props) => {
     const count = useAppSelector((state) => state.counter.value);
     const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initCounterState(initialValue));
    }, [initialValue, dispatch]);

     return (
         <div>
             <h2>Shopping Cart</h2>
             <p>Items in Cart: {count}</p>
             <footer className="mt-6 flex space-x-4">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition" onClick={() => dispatch(increment())}>Add Item</button>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition" onClick={() => dispatch(decrement())}>Remove Item</button>
            </footer>
        </div>
    );
};
