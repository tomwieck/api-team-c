import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import cities from '../data/cities';

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
              cities.filter(f => f.name.includes(filter) || filter === '')
              .map(f => 
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