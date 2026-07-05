'use client'
import { SEARCH_REQUEST_TYPE } from "@/app/globalConsts/globalEnum";
import { searchElementsInArray } from "@/app/helpers/helpersFunctions";
import { useState } from "react";

interface SearchProps<T extends Record<string, unknown>> {
    requestType:SEARCH_REQUEST_TYPE;
    query: string;
    callBackResultAfterSearch: (results: T[]) => void;
    arrayForSearch: T[];
}

export default function Search<T extends Record<string, unknown>>({ requestType, query, callBackResultAfterSearch, arrayForSearch, }: SearchProps<T>) {
    // stores

    // 

    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchRequest, setSearchRequest] = useState('')
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSearchActive(e.target.value.length > 0);
        const query = e.target.value;
        setSearchRequest(query);
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filteredResults = searchElementsInArray(arrayForSearch, searchRequest, Object.keys(arrayForSearch[0] || {}).map(key => (item: T) => String(item[key])));
        callBackResultAfterSearch(filteredResults);
        setIsSearchActive(searchRequest.length > 0);
    }

    return (
        <div className={` flex  text-center items-center justify-center`}>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search" className={`bg-buttonContainer/20  border border-primary-color/30 focus:border-primary-color/50   p-1 rounded-large w-full text-center`} value={searchRequest} onChange={handleSearchChange} />
            </form>


        </div>
    )
}
