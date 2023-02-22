export async function yotpoFetch(product_id) {
    const url = `https://api-cdn.yotpo.com/v1/widget/7DTLUDTEEN8jf5H5TWwLgyTY60lTruCBgm2HJk7s/products/${product_id}/reviews.json`
    //const app_key = process.env.YOTPO_APP_KEY;

    try {
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })

        return await result.json();
        
    } catch(error) {
        console.error('Error:', error)
        return {
            status: 500,
            error: 'Error receiving data'
        };
    }
}