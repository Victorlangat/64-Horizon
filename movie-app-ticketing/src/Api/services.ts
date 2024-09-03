import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = "http://127.0.0.1:8000/";
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
    getAllMovies: builder.query({
      query: () => ({
        url: `movies/movies/all`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }),
    }),
    getSingleMovie: builder.mutation({
      query: (body:any) => ({
        url: `movies/movies/single`,
        method: "PATCH",
        body:body
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }),
    }),
  }),
});
export const { useGetUserDetailsQuery, useGetAllMoviesQuery, useGetSingleMovieMutation }: any = Auth;

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
