export interface BarLocationType {
    type: string;
    coordinates: number[];
}

export interface BarTypes {
    id: number;
    name: string;
    location: BarLocationType;
    place_id: string;
    rating: string;
    address: string;
    status: string;
    formatted_phone_number: string;
    international_phone_number: string;
    maps_url: string;
    user_ratings_total: number;
    opening_hours: string;
    website: string;
    category: number[];
    type: number[];
}
