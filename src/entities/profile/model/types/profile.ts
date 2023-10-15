import { Country, Currency } from 'shared/const/common';

export type ProfileType = {
    first: string;
    lastname: string;
    age: 22,
    currency: Currency,
    country: Country;
    city: string,
    username: string;
    avatar: string;
}

export type ProfileSchema = {
    data?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
