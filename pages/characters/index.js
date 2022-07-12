import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import Link from "next/link";

const Characters = ({ data }) => {
  const [info, setInfo] = useState(data);
  //   useEffect(() => {
  //     // Fetch data from external API
  //     const res = axios
  //       .get(`https://rickandmortyapi.com/api/character`)
  //       .then((res) => {
  //         setInfo(res.data.results);
  //         console.log(res.data.results);
  //       });
  //   }, []);

  return (
    <div>
      <h1> Rick n Morty Again Madafacas</h1>
      <div className={styles.grid}>
        {info.results.map((item) => {
          return (
            <div key={item.id} className="card">
              <p>{item.name}</p>
              <img src={item.image} />
              <Link href={`/characters/${item.id}`}>
                <a>Visitar</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(props) {
  console.log(props);
  // Fetch data from external API
  const res = await fetch(`https://rickandmortyapi.com/api/character`, {
    method: "GET",
  });
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Characters;
