import { Country, Currency } from 'shared/const/common';

export type ProfileType = {
    first?: string;
    lastname?: string;
    age?: string,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export type ProfileSchema = {
    data?: ProfileType;
    form?: ProfileType
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
