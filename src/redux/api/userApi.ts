import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "include",
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (params) => {
        return {
          url: `users`,
          method: "GET",
          params,
        };
      },
      providesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: (params) => {
        return {
          url: `user`,
          method: "GET",
          params,
        };
      },
      providesTags: ["user"],
    }),
    getAllUserCandidate: builder.query({
      query: (params) => {
        return {
          url: `user/candidate`,
          method: "GET",
          params,
        };
      },
      providesTags: ["user"],
    }),
    getUserById: builder.query({
      query: (id) => {
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateUserCandidate: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/user/update/candidate/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/user/update/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    addUser: builder.mutation({
      query: (obj) => {
        return {
          url: `user/register`,
          method: "POST",
          body: obj,
        };
      },
      invalidatesTags: ["user"],
    }),

    deleteUserCandidate: builder.mutation({
      query: (id) => {
        return {
          url: `/user/candidate/${id}`,
          method: "DELETE",
          body: id,
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/user/delete/${id}`,
          method: "DELETE",
          body: id,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useGetAllUserQuery,
  useGetAllUserCandidateQuery,
  useUpdateUserCandidateMutation,
  useDeleteUserCandidateMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersAPI;
