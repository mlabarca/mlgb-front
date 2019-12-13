import React, { useState, useEffect }  from "react";

const jobsStatic = [
  "Get On Board",
  "Archdaily",
  "4talent",
  "ZimplePr",
  "LatamTicket",
  "Spanish Safari",
  "Ibericana",
  "Metaenergy"
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = jobsStatic.filter(person =>
      person.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Jobs"
        value={searchQuery}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
