import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi<TransactionType>({
  reducerPath: "transactions",
  baseQuery: fetchBaseQuery<TransactionType>({
    baseUrl: process.env.REACT_APP_BOSS_API_HOST as string,
  }),
});
