import { exposeMetafields } from './exposeMetafields'

export async function shopifyFetch({ query, variables }) {
    const endpoint = 'https://heyday-test-shop.myshopify.com/api/2023-01/graphql.json';
    const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key
        },
        body: { query, variables } && JSON.stringify({ query, variables })
      });
  
      return {
        status: result.status,
        body: await result.json()
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: 500,
        error: 'Error receiving data'
      };
    }
}

// Treatment Room Tip

shopifyFetch({
  query: `
    mutation {
      metafieldStorefrontVisibilityCreate(
        input: {
          namespace: "treatment_room_tip"
          key: "copy"
          ownerType: PRODUCT
        }
      ) {
        metafieldStorefrontVisibility {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `
})

// Short Description
shopifyFetch({
  query: `
    mutation {
      metafieldStorefrontVisibilityCreate(
        input: {
          namespace: "product"
          key: "short_description"
          ownerType: PRODUCT
        }
      ) {
        metafieldStorefrontVisibility {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `
})

// Key Ingredient One Name
shopifyFetch({
  query: `
    mutation {
      metafieldStorefrontVisibilityCreate(
        input: {
          namespace: "key_ingredient_one"
          key: "name"
          ownerType: PRODUCT
        }
      ) {
        metafieldStorefrontVisibility {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `
})

// Key Ingredient One Description
shopifyFetch({
  query: `
    mutation {
      metafieldStorefrontVisibilityCreate(
        input: {
          namespace: "key_ingredient_one"
          key: "info"
          ownerType: PRODUCT
        }
      ) {
        metafieldStorefrontVisibility {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `
})

export async function getProduct(handle) {
    return shopifyFetch({
      query: `
      query GetProductByHandle($handle: String!) {
        product(handle: $handle) {
          id
          title
          description
          vendor
          shortDescription: metafield(namespace: "product", key: "short_description") {
            value
            type
          }
          treatmentRoomCopy: metafield(namespace: "treatment_room_tip", key: "copy") {
            value
            type
          }
          keyIngOneName: metafield(namespace: "key_ingredient_one", key: "name") {
            value
            type
          }
          keyIngOneInfo: metafield(namespace: "key_ingredient_one", key: "name") {
            value
            type
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
          images (first: 10) {
            edges {
              node {
                id
                src
                altText
              }
            }
          }
          seo {
            title
            description
          }
        }
      }`, 
      variables: {
        handle: handle
      }
      });
}