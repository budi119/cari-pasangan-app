import React from 'react'

const SearchPage = ({
    params,
}: {
    params: { searchQuery: string };
}) => {
    return (
        <div>SearchPage{params.searchQuery}</div>
    )
}

export default SearchPage