'use client'
import { SEARCH_REQUEST_TYPE } from "@/app/globalConsts/globalEnum";
import { extractStrings, searchElementsInArray } from "@/app/helpers/helpersFunctions";
import { useState } from "react";
import SearchArrowIcon from "@/public/icons/ArrowRightCircle.svg";

interface SearchProps<T extends Record<string, unknown>> {
    requestType:SEARCH_REQUEST_TYPE;
    query: string;
    callBackResultAfterSearch: (results: T[]) => void;
    arrayForSearch: T[];
    setResultsFound: (found: boolean) => void;
    locale: string;
}

export default function Search<T extends Record<string, unknown>>({ requestType, query, callBackResultAfterSearch, arrayForSearch, locale, setResultsFound }: SearchProps<T>) {
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
        const filteredResults = searchElementsInArray(arrayForSearch, searchRequest, item => extractStrings(item));
        console.log(filteredResults[0]);
        callBackResultAfterSearch(filteredResults);
        setIsSearchActive(searchRequest.length > 0);
        setResultsFound(filteredResults.length > 0);
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
                disabled={!isSearchActive}
                className={`
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    ${isSearchActive ? 'cursor-pointer' : 'cursor-not-allowed'}
                `}>
                <SearchArrowIcon
                    className={`w-8 h-8 ${
                    isSearchActive
                        ? 'text-buttonContainer'
                        : 'text-buttonContainer/50'
                    }`}
                />
                </button>
            </form>
            </div>
    )
}
