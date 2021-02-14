import Link from "next/link";
import styles from "../../styles/Id.module.css";

export default function Details({ user }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Name : {user.name}</h1>
      <p>ID : {user.id}</p>
      <p>Email : {user.email}</p>
      <p>Company : {user.company.name}</p>
      <Link href="/">
        <a className={styles.link}>Back to HomePage</a>
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
