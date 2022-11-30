export default function () {
  async function fetchWithHandler(requestHandler, config, responseHandler) {
    const request = requestHandler()
    const response = await fetch(request, config)
    responseHandler(response)

    return response
  }
}
