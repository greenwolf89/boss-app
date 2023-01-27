import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { BaseQueryFn, createApi, EndpointDefinitions, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";

export const transactionsApi = createApi({
  reducerPath: "transactions",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BOSS_API_HOST as string,
  }),
  endpoints: function (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "transactions">): EndpointDefinitions {
    throw new Error("Function not implemented.");
  }
});
