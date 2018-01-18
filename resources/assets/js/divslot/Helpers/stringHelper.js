export function capitalize(string) {
    return (string) ? string.charAt(0).toUpperCase() + string.slice(1) : console.warn(`String ${string} has problems`);
}