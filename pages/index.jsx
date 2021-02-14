import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function index({ users }) {
  return (
    <main className={styles.container}>
      <h1>List Of Users</h1>
      <div className={styles.list}>
        {users.map((user) => (
          <Link href={"/users/" + user.id} key={user.id}>
            <a className={styles.listItem}>
              <span className={styles.bullet}>{"=>"}</span>
              {user.name}
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
};
