// TODO:
// Make a fetch request to the backend server
// GET http://localhost:1337/api

const fetchResponse = async () => {

  console.log('Hola! Running fetchResponse!')

  const backendResponse = await fetch('http://localhost:1337/api')
  const data = await backendResponse.json()

  console.log('backendResponse -->', data)

  const parentDiv = document.getElementById('parent')

  const childDiv = document.createElement('div')

  childDiv.append(`Backend responded with: ${data}`)

  parentDiv.append(childDiv)
}

fetchResponse()
