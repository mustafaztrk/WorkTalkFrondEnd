import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom'
function PreLoader1() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
   
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (

        
        <ReactLoading
        
          type={"bars"}
          color={"#03fc4e"}
          height={100}
          width={100}
        />
      ) : (
        
        <ul>
             <Link to={`/users`}>  
          {data.map((post) => (
            <li key={post.id}>{post.title} </li>
           
          ))}
          </Link>
        </ul>
      )}
    </>
  );
}

export default PreLoader1;