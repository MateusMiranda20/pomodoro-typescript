import { zeroLeft } from "./zero-left"

export function secondToMinutes(seconds: number): string {

    const min = zeroLeft(seconds / 60) // Calcula os minutos corretamente
    const sec = zeroLeft(seconds % 60) // Calcula os segundos corretamente

    return `${min}:${sec}`
}
