import { createContext, useState } from "react";


export const AppContext = createContext();



export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);

    // data filling
    async function fetchBlogsPosts(page = 1) {
        setLoading(true);
        let url = `https://api.unsplash.com/search/photos?page=${page}&query=all&client_id=GWBM0Iz1Sm8mf5w6uYK2tuyIa9V2ZWIVnRgiIgyriEI`
        try {
            const result = await fetch(url)
            const data = await result.json();
            console.log(data)
            setPage(data.page)
            setPosts(data.posts)
        }
        catch (er) {
            console.log("Error in fetching data")
            setPage(1);
            setPosts([]);
        }
        setLoading(false)
    }

    function handlePageChange(page) {
        fetchBlogsPosts(page);
    }
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        fetchBlogsPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

