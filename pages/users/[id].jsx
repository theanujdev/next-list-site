import Link from "next/link";

export default function Details({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>ID : {user.id}</h3>
      <h6>{user.email}</h6>
      <p>Campany : {user.company.name}</p>
      <Link href="/">
        <a>Back to HomePage</a>
      </Link>
    </div>
  );
}

export const getStaticProps = async ({ params: { id } }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();
  return {
    props: { user },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // map data to an array of path objects with params username
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
