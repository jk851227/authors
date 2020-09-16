import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/authors')
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to='/new'>Add an author</Link>
      {loaded ? (
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, idx) => {
              return (
                <tr key={idx}>
                  <td>{author.name}</td>
                  <td>
                    <Link to={`/${author._id}/edit`}>
                      <button>Edit</button>
                    </Link>{' '}
                    | Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Main;
