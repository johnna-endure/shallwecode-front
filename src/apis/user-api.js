const api = 'http://localhost:8080'

export async function requestLogin (data) {
    const res = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
        })
    return res
}