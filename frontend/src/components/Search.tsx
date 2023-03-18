import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { citiesData } from "../dummy/dummy_cities_data";

import { City } from "../types/city.types";


function Search() {
  const [filter, setFilter] = useState('');

    return (
      <div>
        <div className="Search">
          <Form.Control
            type="search"
            id="search"
            placeholder='Search...'
            value={filter}
            onChange={event => setFilter(event.target.value)}
          />
        </div>
        <div>
          <ul>
            {
              citiesData.filter((f: City) => f.longName.includes(filter) || filter === '')
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