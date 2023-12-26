const catRandomEndpoint = 'https://catfact.ninja/fact'

export async function getFact(){
    const res = await fetch(catRandomEndpoint)
    const data = await res.json()
    const { fact } = data
    return fact
}