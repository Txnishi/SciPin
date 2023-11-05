import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultPage = () => {
  const { state } = useLocation();
  const results = state.results || [];
  const jsresults = results[0];
  if(jsresults === undefined) {
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
            <li>
              <div>
                <h3>No Results Found</h3>
              </div>
            </li>
        </ul>
      </div>
    );
  }
  // console.log(jsresults);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
          <li key={index}>
            <div>
              <h3>{jsresults.title}</h3>
              <p>{jsresults.authors.name}</p>
              <p>{jsresults.abstract}</p>
              {jsresults.keywords.map((keyword, index) => (
                <p key={index}>{keyword}</p>
              ))}
            </div>
          </li>
      </ul>
    </div>
  );
};

export default SearchResultPage;
