import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

const setMarker = (key: string, value: any) => {
    
console.log("🚀 ~ file: Storage.ts ~ line 6 ~ setMarker ~ value", value)

    storage.set(key, value);

}

const getMarkers = (key: string) => {

    return JSON.parse(storage.getString(key)??"");

}

const contains = (key: string) => {

    return storage.contains(key);
}

export const mmkvStorage = {
    setMarker,
    getMarkers,
    contains
}