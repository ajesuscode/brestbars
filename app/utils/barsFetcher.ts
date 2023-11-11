import { BarTypes } from "@/app/types/types";

export async function getAllBars(): Promise<BarTypes[]> {
    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/items/bars"
    );
    const data = await response.json();
    return data.data;
}
