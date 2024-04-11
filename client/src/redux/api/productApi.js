import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";
import { server } from "./userApi";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: `${server}/api/product`}),
    endpoints: (builder) => ({
        getLatestProducts: builder.query({
            query: () => ({
                url: "/latest",
                method: "GET",
            }),
            providesTags: ["Products"],
        }),
        getAllProducts: builder.query({
            query: () => ({
                url: "/all",
                method: "GET",
            }),
            providesTags: ["Products"],
        }),

        getProductById: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                
            }),
            providesTags: ["Products"],
        }),

        getProductsByCategory: builder.query({
            query: (category) => ({
                url: `/category/${category}`,
                method: "GET",
            }),
        })
        
    })
})

export const {useGetLatestProductsQuery, useGetAllProductsQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery} = productApi