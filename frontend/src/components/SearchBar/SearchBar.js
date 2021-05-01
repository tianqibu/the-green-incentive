import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='ecosia-search'>
            <form action="https://www.ecosia.org/search" className="search-form" method="get" name="searchform" target="_blank">
                <input name="sitesearch" type="hidden" value=""/>
                <input autocomplete="on" class="form-control search" name="q" placeholder="Search in Ecosia and plant some trees!" required="required"  type="text"/>
                <button className="search-button" type="submit"><FaSearch /></button>
            </form>
        </div>
    )
}

export default SearchBar
