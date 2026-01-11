export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key, defaultValue = null) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item): defaultValue; 
}
export const removeItem = (key) => {
    localStorage.removeItem(key)
}