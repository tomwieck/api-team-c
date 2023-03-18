import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { citiesData } from "../dummy/dummy_cities_data";

import { City } from "../types/city.types";


function Search() {
  const [filterText, setFilterText] = useState('');

    return (
      <div>
        <div className="Search">
          <Form.Control
            type="search"
            id="search"
            placeholder='Search...'
            value={filterText.toLowerCase()}
            onChange={event => setFilterText(event.target.value.toLowerCase())}
          />
        </div>
        <div>
          <ul>
            {
              citiesData.filter((f: City) => f.longName.toLowerCase().includes(filterText.toLowerCase()) || filterText === '')
              .map((f: City) => 
                <li key={JSON.stringify(f)}>
                  {JSON.stringify(f)}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
  
  export default Search;