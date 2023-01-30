export const useProductApi = async (id: number | string) => {
    const { data, pending } = await useFetch(`https://fakestoreapi.com/products/${id}`, {key: id.toString()});

    if (!data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }

    return {
        data,
    }
}
