import { configApi } from "./configApi"

export const callApi = {
    get: async(url) => await configApi.get(url),
    post: async(url, data = {}) => await configApi.post(url, data)
}