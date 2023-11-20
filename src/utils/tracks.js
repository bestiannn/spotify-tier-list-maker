async function generateToken() {
    const body = {
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
    }
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: new URLSearchParams(body),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    const data = await response.json();
    return data.access_token;
}

export async function getTracksByAlbumId(albumId) {
    const Bearer = await generateToken();
    const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
        headers: {
            "Authorization": `Bearer ${Bearer}`
        }
    })
    const data = await response.json();
    return data.items;
}