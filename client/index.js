
const fetchResponse = async () => {
  console.log('Running fetchResponse')

  const backendResponse = await fetch('/api')
  console.log('backendResponse -->', backendResponse)

  const responseData = await backendResponse.json()
  console.log('responseData -->', responseData)

  const stringifiedData = JSON.stringify(responseData)
  console.log('stringifiedData -->', stringifiedData)

  const parentDiv = document.getElementById('parent')

  const childDiv = document.createElement('div')
  childDiv.append(`Backend responded with: ${stringifiedData}`)

  parentDiv.append(childDiv)
}

fetchResponse()
