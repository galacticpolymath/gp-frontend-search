import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Link from 'next/link';

const searchClient = algoliasearch(
  'RY691ZY7L3',
  'b65a6fb8261474c9c2280c40360203de'
);

function Hit({ hit }) {
  return (
    <article>
      {hit.URL && 
      <Link key={hit.id + hit.locale} href={hit.URL} passHref>
        <a>{hit.Title} - {hit.Language}</a>
      </Link>}
    </article>
  );
}

const SearchPage = () => {
  return (
    <div>
      
      <InstantSearch
    indexName="search_index"
    searchClient={searchClient}
  >
    
    <SearchBox />
    <RefinementList attribute="Country" />
    <Hits hitComponent={Hit}/>
  </InstantSearch>

    </div>
  )}

export default SearchPage;