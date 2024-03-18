import {FC, ReactNode, useState } from 'react';
import SearchButton from './components/SearchButton';
import SearchDataFetch from './components/SearchDataFetch';
import SearchBar from './components/SearchBar';
import PlagiarismChecker from './components/PlagiarismChecker';
import './styles/App.css'
import Container from './components/Container';
import LiteratureReview from './components/literature_review';



const App:FC = ()=>{
  const [searchRes,setSearchRes] = useState<unknown>(null)
  const [query, getQuery] = useState('');
  const [Searching, setSearchState] = useState<boolean>(false)
  const [engine, setEngine] = useState('semantic')
  // This function get the query from the search bar
  const handleSearchInputChange = (e) => {
    getQuery(e.target.value);
    setSearchState(false)
    
  };
  // This function set the Research results output
  const handleSearchButtonClick = (e) => {
    setEngine(e.target.value)
    getQuery(query);
    setSearchState(true)
  };
  return (
    <main>
    <Container>
      <h1>Search tools</h1> 
      <SearchBar value={query} onChange={handleSearchInputChange} />
      <div className='search-buttons'>
        <SearchButton label="arxiv" onClick={handleSearchButtonClick} />
        <SearchButton label="archive" onClick={handleSearchButtonClick} />
        <SearchButton label="semantic" onClick={handleSearchButtonClick} />
      </div>
      <SearchDataFetch searchEngine={engine}  isSearching={Searching} query={query} onFetch={setSearchRes} />
    </Container>

    
    <Container>
    {(searchRes as ReactNode) && (
     <LiteratureReview query={query} />
    )}
    </Container>
    <Container>
    <PlagiarismChecker />
    </Container>
    </main>
  );
}

export default App;
