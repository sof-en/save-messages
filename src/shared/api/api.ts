import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IData {
  id: number | string | null;
  authorName: string;
  title: string;
}
export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ['Messages'], // Определяем теги
  endpoints: (builder) => ({
    getMessages: builder.query<IData[], void>({
      query: () => ({
        url: "/messageData",
      }),
      providesTags: ['Messages'], // Добавляем теги к запросу
    }),
    createMessages: builder.mutation({
      query: (data) => ({
        url: "/messageData",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Messages'], // Инвалидируем теги после мутации
    }),
  }),
});

export const { useGetMessagesQuery, useCreateMessagesMutation } = api;
