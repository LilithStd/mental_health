'use client'
import { SEARCH_REQUEST_TYPE } from "@/app/globalConsts/globalEnum";
import { searchElementsInArray } from "@/app/helpers/helpersFunctions";
import { useState } from "react";
import SearchArrowIcon from "@/public/icons/ArrowRightCircle.svg";

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
        <div className="flex justify-center">
            <form
                onSubmit={handleSearchSubmit}
                className="relative w-full max-w-md"
            >
                <input
                type="text"
                placeholder="Search"
                value={searchRequest}
                onChange={handleSearchChange}
                className="
                    w-full
                    rounded-large
                    border border-primary-color/30
                    bg-buttonContainer/20
                    p-2
                    pr-10
                    focus:border-primary-color/50
                "
                />
                <button
                type="submit"
                className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    cursor-pointer
                ">
                <SearchArrowIcon
                    className={`w-5 h-5 ${
                    isSearchActive
                        ? 'text-primary-color'
                        : 'text-primary-color/50'
                    }`}
                />
                </button>
            </form>
            </div>
    )
}
