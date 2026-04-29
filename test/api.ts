import artistSearch from "./data/artists-search.json";

export async function getApi(filename: string) {
    try {
    } catch(err:unknown) {
        if (err instanceof Error) {
            console.debug("getApi()", err.message);
            return Promise.reject(err);
        }
        console.debug("getApi()", err);
        return Promise.reject(new Error('Error in getApi()'));
    }
}
