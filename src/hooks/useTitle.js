import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - WE Sell`;
    }, [title])
}

export default useTitle;