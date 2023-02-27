import React from 'react'
import { builder } from "@builder.io/react"
import { useRouter } from 'next/router'

export default function LocationTemplate(location) {

  const router = useRouter()
  if (!router.isFallback && !location) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>This is a location</div>
  )
}

export async function getStaticProps({ params }) {
    const location = await builder.get('locations', {
        query: {
            'data.slug': `${params.handle}`
        }
    }).toPromise()

    return {
        props: {
            location: location || null,
        }
    }
}

export async function getStaticPaths() {
    const locations = await builder.getAll('locations')
    const slugs = locations.map(location => {
        return location.data.slug
    })
    return {
        paths: slugs.map(slug => `/locations/${slug}`),
        fallback: false,
    }
}