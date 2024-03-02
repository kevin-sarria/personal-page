export const localSpace = {
    get: (name = '') => localStorage.getItem(name),
    set: (name = '', data = '') => localStorage.setItem(name, data),
    removeItem: (name = '') => localStorage.removeItem(name),
    removeAll: () => localStorage.clear()
}