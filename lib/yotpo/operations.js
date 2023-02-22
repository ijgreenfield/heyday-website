import { yotpoFetch } from "./index"

export async function getProductReviews(id) {
    return await yotpoFetch(id);
}