import { createSlice } from "@reduxjs/toolkit";
import { FE_COMPANIES } from "../../app/shared/FE_COMPANIES";

const initialState = {
    companiesArray: FE_COMPANIES
};

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
});

export const companiesReducer = companiesSlice.reducer;

export const selectAllCompanies = (state) => {
    return state.companies.companiesArray;
};