// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { BASE_URL } from "../../untils/constants";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   tagTypes: ["Product"],
//   endpoints: (builder) => ({
//     getProduct: builder.query({
//       query: ({ id }) => `/product/${id}`,
//       providesTags: ["Product"],
//     }),
//   }),
// });
// export const { useGetProductQuery } = apiSlice;
