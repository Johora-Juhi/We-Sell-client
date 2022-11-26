import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Cake Boutique`;
    }, [title])
}

export default useTitle;