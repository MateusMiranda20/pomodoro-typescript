export function secondToTime(seconds: number): string {
    const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0')

    const min = zeroLeft(seconds / 60) // Calcula os minutos corretamente
    const sec = zeroLeft(seconds % 60) // Calcula os segundos corretamente

    return `${min}:${sec}`
}
