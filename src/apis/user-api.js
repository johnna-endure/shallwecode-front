const BACKEND_API = 'http://localhost:8080'


const SHALLWECODE_ACCESS_TOKEN = "shallwecode_access_token"
export async function postUserLogin(data) {
  const res = await fetch(`${BACKEND_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })

  if(res?.ok) {
    const {user, token} = await res.json()
    sessionStorage.removeItem(SHALLWECODE_ACCESS_TOKEN)
    sessionStorage.setItem(SHALLWECODE_ACCESS_TOKEN, token)
    return user
  }

  return null
}
