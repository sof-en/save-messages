import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IData {
  id: id;
  authorName: string;
  title: string;
}
type id = number | string | null;
export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://save-db.onrender.com" }),
  tagTypes: ["Messages"],
  endpoints: (builder) => ({
    getMessages: builder.query<IData[], void>({
      query: () => ({
        url: "/messageData",
      }),
      providesTags: ["Messages"],
    }),
    createMessages: builder.mutation({
      query: (data) => ({
        url: "/messageData",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Messages"],
    }),
    deleteMessage: builder.mutation({
      query: (id: id) => ({
        url: `/messageData/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useCreateMessagesMutation,
  useDeleteMessageMutation,
} = api;

