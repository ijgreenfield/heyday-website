export async function productSearch({ query }) {
    const url = `https://0kv4yw.a.searchspring.io/api/search/search.json?siteId=0kv4yw&resultsFormat=json&q=${query}&redirectResponse=minimal&page=1&resultsPerPage=24`;
  
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return {
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