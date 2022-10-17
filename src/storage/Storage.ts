import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

const setMarker = (key: string, value: any) => {

    storage.set(key, value);

}

const getMarkers = (key: string) => {

    return storage.getString(key);

}

const contains = (key: string) => {

    return storage.contains(key);
}

export const mmkvStorage = {
    setMarker,
    getMarkers,
    contains
}