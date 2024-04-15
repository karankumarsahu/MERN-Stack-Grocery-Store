import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";
import { server } from "./userApi";

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({baseUrl: `${server}/api/dashboard`}),
    endpoints: builder => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: '/stats',
                method: 'GET',
                credentials: 'include'
            }),
            providesTags: ['Dashboard']
        })
    })
})

export const { useGetDashboardStatsQuery } = adminApi