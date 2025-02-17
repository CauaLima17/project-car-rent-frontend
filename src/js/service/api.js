const fetchData = async (url, method='GET', body=null, headers={}) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: body
    })

    const data = await response.json()
    return data
}

export default fetchData;