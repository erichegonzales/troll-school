import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import { Canvas } from "./Canvas"

export function ArtCourse({ user }) {

    return(
        <Canvas user={user}/>
    )

}

