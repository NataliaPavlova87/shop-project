export const useProductApi = async (id: number | string) => {
    const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`, {key: id.toString()});

    return {
        data,
    }
}
