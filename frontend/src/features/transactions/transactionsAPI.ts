import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Transaction {
  id: number;
  accountId: number;
  amount: number;
  category: string;
  merchant: string;
  date: string;
}

type TransactionResponse = Transaction[];

export const transactionsApi = createApi({
  reducerPath: "transactions",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BOSS_API_HOST as string,
  }),
  tagTypes: ["Transactions"],
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionResponse, void>({
      query: () => "/api/transactions",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApi;
