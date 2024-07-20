import { useState, useEffect } from "react";

export default function SelectedDetails({ fetchFunction, id }) {

    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchFunction(id);
                setFetchedData(data);
            } catch (error) {
                console.log(error)
                setError({ message: error.message || 'Could not fetch data' });
            }
            setIsFetching(false);
        }
        fetchData();

    }, [isFetching]);

    return <>
        {!isFetching && fetchedData !== undefined && (<div className="mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300 w-[100rem]">
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-3xl text-bold text-stone-600 mb-2">DETAILS</h1>
                </div>
            </header>
            <div className="text-ellipsis">
                <pre className="text-ellipsis">{JSON.stringify(fetchedData, null, 2)}</pre>
            </div>

        </div>)
        }
    </>
}