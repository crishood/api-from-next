import Link from "next/link";
const CharacterId = ({ data }) => {
  return (
    <div>
      <h2>{`Hello ${data.name}`}</h2>
      <Link href="/home">
        <a>Volver al home</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.characterId}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  // Pass data to the page via props
  console.log(data);
  return { props: { data } };
}

export default CharacterId;
