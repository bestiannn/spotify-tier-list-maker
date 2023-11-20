'use client';
import { Reorder } from "framer-motion"
import { useState } from "react"

function List({ data }) {
    const [tracksNames, setTracksNames] = useState([...data.map((track) => track.name)])

    return(
        <Reorder.Group axis="y" values={tracksNames} onReorder={setTracksNames}>
            {tracksNames.map((trackName) => (
                <Reorder.Item value={trackName} key={trackName} className="bg-red-500">
                    {trackName}
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
  
}

export default List;