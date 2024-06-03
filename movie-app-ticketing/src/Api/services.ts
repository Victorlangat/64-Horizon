import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URI;
export const Auth = createApi({
  reducerPath: "Auth",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (token: string) => ({
        url: `user/current`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const { useGetUserDetailsQuery }: any = Auth;

export const Billing = createApi({
  reducerPath: "Billing",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    plans: builder.query({
      query: () => "/plans",
    })
  }),
});

export const {
  usePlansQuery,
}: any = Billing;
