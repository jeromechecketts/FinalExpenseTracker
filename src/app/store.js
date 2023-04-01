import { configureStore } from '@reduxjs/toolkit';
import { companiesReducer } from '../features/companies/CompanySlice';

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});
