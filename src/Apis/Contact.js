export default async function CreateContact(data, token) {
    try {
        const req = await fetch('https://backend-gules-six-47.vercel.app/api/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!req.ok) {
            throw new Error(`Error: ${req.status}`);
        }

        const responseData = await req.json();
        console.log("Response:", responseData);
        return responseData;
    } catch (error) {
        console.error("Request failed:", error.message);
        return null;
    }
}
