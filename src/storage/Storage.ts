import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

const setMarker = (key: string, value: any) => {

    storage.set(key, value);

}

const getMarkers = (key: string) => {

    return JSON.parse(storage.getString(key)??"");

}

const contains = (key: string) => {

    return storage.contains(key);
}

const deleteKeys = () => {

    const markerKeys = storage.getAllKeys();
    markerKeys.map((key) => {
        storage.delete(key);
    })
}


export const mmkvStorage = {
    setMarker,
    getMarkers,
    contains,
    deleteKeys
}