export default function NewsLayout({ children }) {
  return (
    <>
      <header>
        <nav>navbar</nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
