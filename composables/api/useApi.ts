export const useApi = () => {
  const baseURL = 'https://tansaz.liara.run/api/v1'

  const makeRequest = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  const get = async <T>(endpoint: string): Promise<T> => {
    return makeRequest<T>(endpoint, { method: 'GET' })
  }

  const post = async <T>(endpoint: string, data: any): Promise<T> => {
    return makeRequest<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  const put = async <T>(endpoint: string, data: any): Promise<T> => {
    return makeRequest<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  const del = async <T>(endpoint: string): Promise<T> => {
    return makeRequest<T>(endpoint, { method: 'DELETE' })
  }

  return {
    get,
    post,
    put,
    delete: del,
  }
}