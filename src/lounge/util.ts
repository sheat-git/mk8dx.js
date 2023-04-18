export const convertToDate = (text: string): Date => {
    return new Date(text)
}

export const convertToString = (date: Date): string => {
    return date.toISOString()
}
