export default function filterType(data) {
  const types = {}
  data.forEach(item=>{
    const old = types[item.type] || []
    types[item.type] = [...old, item]
  })
  return types;
}