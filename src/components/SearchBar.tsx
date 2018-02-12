import * as React from 'react';

/**
 * 検索バーコンポーネントのprops
 */
interface SearchBarProps {
    onFilterChange(e: any): void;
    value: string;
}

/**
 * 検索バーコンポーネント
 * @param props 
 */
const SearchBar: React.StatelessComponent<SearchBarProps> = (props) => {
    return(
        <input type="text" placeholder="Input City" value ={props.value} onChange={props.onFilterChange} />
    );
}

export default SearchBar;