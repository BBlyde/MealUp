export interface Meal {
    _id: string;
    title: string;
    text: string;
    vouch: number;
    imageUrl: string;
    vouchedBy: Array<string>;
    owner: string;
}