import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Favorite Authors</h1>
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
                  <td>Edit | Delete</td>
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
