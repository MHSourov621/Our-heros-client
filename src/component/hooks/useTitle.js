import { useEffect } from "react"

const useTitle = (title) => {
    useEffect( () => {
        document.title = `Our Heros / ${title}`;
    },[title])
}

export default useTitle;