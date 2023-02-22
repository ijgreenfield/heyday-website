import { shopifyFetch } from "./index";

export default function exposeMetafields() {
    return (
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
    )

}

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