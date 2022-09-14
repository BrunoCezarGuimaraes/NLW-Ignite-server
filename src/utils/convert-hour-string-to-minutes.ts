export function convertHourStringToMinute (hourSring: string) {
    const [hours, minutes] = hourSring.split(':').map(Number)

    const minutesAmount = (hours *60) + minutes

    return minutesAmount
}