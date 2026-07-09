'use client'
import { SEARCH_REQUEST_TYPE } from "@/app/globalConsts/globalEnum";
import { extractStrings, searchElementsInArray } from "@/app/helpers/helpersFunctions";
import { useState } from "react";
import SearchArrowIcon from "@/public/icons/ArrowRightCircle.svg";
import CancelSearchIcon from "@/public/icons/PlusCircle.svg";

interface SearchProps<T extends Record<string, unknown>> {
    requestType:SEARCH_REQUEST_TYPE;
    query: string;
    callBackResultAfterSearch: (results: T[]) => void;
    arrayForSearch: T[];
    setResultsFound: (found: boolean | null) => void;
    locale: string;
}

export default function Search<T extends Record<string, unknown>>({ requestType, query, callBackResultAfterSearch, arrayForSearch, locale, setResultsFound }: SearchProps<T>) {
    // stores

    // 

    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchRequest, setSearchRequest] = useState('')

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setIsSearchActive(e.target.value.length > 0);
        const query = e.target.value;
        if(query.length === 0) {
            setIsSearchActive(false);
            setResultsFound(null);
            setSearchRequest('');
        }
        setSearchRequest(query);
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filteredResults = searchElementsInArray(arrayForSearch, searchRequest, item => extractStrings(item));
        callBackResultAfterSearch(filteredResults);
        setIsSearchActive(searchRequest.length > 0);
        setResultsFound(filteredResults.length > 0);
    }
    console.log(isSearchActive, );
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
                className={`
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    ${searchRequest.length > 0 ? 'cursor-pointer' : ''}
                `}>
                {isSearchActive ? <CancelSearchIcon className={`w-8 h-8 ${searchRequest.length > 0 ? 'text-buttonContainer' : 'text-buttonContainer/50'} rotate-45`} onClick={() => (setIsSearchActive(false), setSearchRequest(''))} /> 
                : <SearchArrowIcon
                    className={`w-8 h-8 ${
                    searchRequest.length > 0
                        ? 'text-buttonContainer'
                        : 'text-buttonContainer/50'
                    }`}
                />}
                </button>
            </form>
            </div>
    )
}
