import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Link href="/news">ir a noticias</Link>
        </nav>
      </header>
      <main>
        <h1>Portal</h1>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
