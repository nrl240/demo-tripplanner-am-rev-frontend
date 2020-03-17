// TODO:
// Make a fetch request to the backend server
// GET http://localhost:1337/api

const fetchResponse = async () => {
  console.log('Hola! Running fetchResponse!')

  try {
    // Send request to backend server
    const backendResponse = await fetch('http://localhost:1337/api')
    const data = await backendResponse.json()
    console.log('backendResponse -->', data)

    // Create div with response data and append to parent div
    const childDiv = document.createElement('div')
    childDiv.append(`Backend responded with: ${data}`)
    const parentDiv = document.getElementById('parent')
    parentDiv.append(childDiv)
  } catch(err) {
    console.err(`Error retrieving data from backend server: ${err}`)
  }
}

fetchResponse()
