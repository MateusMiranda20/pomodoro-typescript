import { zeroLeft } from "./zero-left"

export function secondToTime(seconds: number): string {
    const hours = zeroLeft(seconds / 3600);
    const min = zeroLeft(seconds / 60) // Calcula os minutos corretamente
    const sec = zeroLeft(seconds % 60) // Calcula os segundos corretamente

    return `${hours}:${min}:${sec}`
}
