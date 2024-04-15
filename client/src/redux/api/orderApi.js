import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { server } from "./userApi";

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/api/order`,
    }),
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/create",
                method: "POST",
                body: data,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Order"],
        }),

        getOrderByUser: builder.query({
            query: () => ({
                url: "/my",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Order"],
        }),
        
        getAllOrders: builder.query({
            query: () => ({
                url: "/all",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Order"],
        })
    }),
})

export const { useCreateOrderMutation, useGetOrderByUserQuery, useGetAllOrdersQuery } = orderApi