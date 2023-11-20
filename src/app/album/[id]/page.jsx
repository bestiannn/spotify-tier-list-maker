import List from "@/components/List";
import { getTracksByAlbumId } from "@/utils/tracks";

export default async function Home ({ params }) {
    const { id } = params;
    const data = await getTracksByAlbumId(id);
    //const data = await getTracksByAlbumId("5PkM4N7mjgbYQaZlZODdS3");

    return (
        <div>
            <h1>Tracks de {id}</h1>
            <div>
                <List data={data} />
            </div>
        </div>
    )
}