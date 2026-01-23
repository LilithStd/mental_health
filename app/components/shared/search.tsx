'use client'
import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { searchElementsInArray } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useState } from "react";

interface SearchProps<T extends Record<string, unknown>> {
    callBackResultAfterSearch(results: T[]): void
    isSearchActive: (status: boolean) => void
    arrayForSearch: T[]
}

export default function Search<T extends Record<string, unknown>>({ callBackResultAfterSearch, arrayForSearch, isSearchActive }: SearchProps<T>) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 

    const [searchRequest, setSearchRequest] = useState('')
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        isSearchActive(e.target.value.length > 0);
        const query = e.target.value;
        setSearchRequest(query);
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filteredResults = searchElementsInArray(arrayForSearch, searchRequest, Object.keys(arrayForSearch[0] || {}).map(key => (item: T) => String(item[key])));
        callBackResultAfterSearch(filteredResults);
        isSearchActive(searchRequest.length > 0);
    }

    return (
        <div className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} flex  rounded-md w-1/7 text-center items-center justify-center`}>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search" className={`${THEME_COLOR_SCHEME[currentTheme].input}
             p-1 rounded-md w-full text-center`} value={searchRequest} onChange={handleSearchChange} />
            </form>


        </div>
    )
}
