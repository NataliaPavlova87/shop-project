export const useProductsApi = async () => {
    const {data, pending} = await useFetch('https://fakestoreapi.com/products');

    if (!data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }

    return {
        data,
        pending,
    }
}
