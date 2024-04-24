import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://parseapi.back4app.com/classes/',
    prepareHeaders: (headers) => {
      // Add necessary headers
      headers.set('X-Parse-Application-Id', 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3');
      headers.set('X-Parse-REST-API-Key', '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHotelById: builder.query({
      query: (id) => `hotel/bVonXoSUHK`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHotelByIdQuery } = hotelApi;
