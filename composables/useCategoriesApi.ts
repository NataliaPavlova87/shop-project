export const useCategoriesApi = async () => {
    const { data } = await useFetch('https://fakestoreapi.com/products/categories');

    if (!data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }

    return {
        data,
    }
}
