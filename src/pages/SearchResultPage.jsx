import React from 'react';

const SearchResultPage = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <div>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultPage;
