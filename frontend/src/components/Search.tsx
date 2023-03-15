import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import initialData from '../data/initialData';


function Search() {
  const [filter, setFilter] = useState('');

    return (
      <div>
        <div className="Search">
          <Form.Control
            type="search"
            id="search"
            value={filter}
            onChange={event => setFilter(event.target.value)}
          />
        </div>
        <div>
          <ul>
            {
              initialData.filter(f => f.city.includes(filter) || filter === '')
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