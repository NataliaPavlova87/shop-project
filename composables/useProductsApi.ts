export const useProductsApi = async () => {
    const {data} = await useFetch('https://fakestoreapi.com/products');

    return {
        data,
    }
}
