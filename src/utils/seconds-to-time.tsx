export function secondToTime(seconds: number): string {
    const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '00')
    const min = zeroLeft((seconds / 6) % 60)
    const max = zeroLeft((seconds % 60) % 60)
    return `${min}:${max}`
}