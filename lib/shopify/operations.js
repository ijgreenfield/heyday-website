// Need to refactor this code.
import Client from 'shopify-buy'

const fastClone = (obj) =>JSON.parse(JSON.stringify(obj));

const client = Client.buildClient({
    domain: 'heyday-test-shop.myshopify.com',
    storefrontAccessToken: '6b469dd5e30977cf5ef79fa304b6e916'
});

export async function getProduct(handle) {
    if (handle) {
      return fastClone(await client.product.fetchByHandle(handle))
    }
    //if (!options.id) {
      //throw new Error('A product ID or handle is required')
    //}
    //return fastClone(await client.product.fetch(options.id))
  }

export async function getAllProductPaths() {
    const products = await client.product.fetchAll()
    return products.map((val) => val.handle)
}