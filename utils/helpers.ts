export function greetIfMorningOrAfternoonOrEvening(): string {
    const dateToCheck = new Date();
    const greeting = ["Good Morning", "Good Afternoon", "Good Evening"];
    const hour = dateToCheck.getHours();

    const result = greeting[hour >= 6 && hour < 12 ? 0 : hour >= 12 && hour < 18 ? 1 : 2];

    return result;
}

export function truncateString(str: string, n: number): string {
    if (!str) return str;
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
}

export function useConvertToSmallCase(str: string) {
    return str.toLowerCase();
}
