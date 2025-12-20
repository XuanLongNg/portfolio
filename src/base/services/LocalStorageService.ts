class LocalStorageService {
    public static set<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static get<T>(key: string, defaultValue?: T): T {
        const value = defaultValue ?? ''
        const item = localStorage.getItem(key) ?? JSON.stringify(value);
        return JSON.parse(item);
    }

    public static remove(key: string) {
        localStorage.removeItem(key);
    }

    public static clear() {
        localStorage.clear();
    }
}

export default LocalStorageService;
