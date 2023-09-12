export const load = async ({ params }) => {
  try {
    const path = `/data/retroPGF2-dataset/each_project/${params.slug}/info.json`
    const response = await fetch(path)
    const data = await response.json()
    console.log(data)
    return { detail: data }
  } catch (err) {
    console.log(err)
  }
}
