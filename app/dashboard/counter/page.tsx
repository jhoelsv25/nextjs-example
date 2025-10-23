import { CartCounter } from "@/app/shopping-cart/components";
import { Metadata } from "next";

export const metadata :Metadata= {
    title: 'Counter - Dash8',
    description: 'Manage your counters effectively with Dash8.',
  };

export default function Counter() {

    return (
        <div className="p-6 min-h-screen h-screen flex flex-col justify-center items-center">
            <h1>Counter</h1>
            <strong>Manage your counters effectively</strong>

           <CartCounter initialValue={4} />
        </div>
    );
}


