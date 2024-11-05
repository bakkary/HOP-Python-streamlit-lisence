async function fetchGreeting(name: string): Promise<void> {
    try {
        const response = await fetch(`http://127.0.0.1:8000/greet/${name}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error("Failed to fetch greeting:", error);
    }
}

fetchGreeting("TypeScript User");