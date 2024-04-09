import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const server = import.meta.env.VITE_SERVER;



export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/user` }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: "/register",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }),
            invalidatesTags: ["User"],
        }),

        getUser: builder.query({
            query: () => ({
                url: "/getuser",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["User"],
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
                credentials: "include",
            }),
            invalidatesTags: ["User"],
        }),

    })
});

export const { useRegisterMutation, useLoginMutation, useGetUserQuery, useLogoutMutation } = userApi;
