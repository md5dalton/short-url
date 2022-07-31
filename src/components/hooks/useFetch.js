import { useState, useCallback, useEffect } from "react"

export default async url => {

    const [fetchedData, setFetchedData] = useState({
        data: {},
        isLoading: true,
        error: false
    })

    const fetchData = useCallback(async() => {

        fetch(url, {
                method: "GET",
                mode: "no-cors"
            })
            .then(res => res.json())
            .then(data => setFetchedData({
                    data: data.results ? data.results : data,
                    isLoading: false,
                    error: false
                })
            ).catch(err => setFetchedData({
                data: {},
                isLoading: false,
                error: true
            }))

    }, [url])

    useEffect(() => {

        fetchData()

    }, [url, fetchData])

    const { data, isLoading, error } = fetchedData

    return { data, isLoading, error }

}