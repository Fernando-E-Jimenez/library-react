import { useAppContext } from "../store/store";
import Book from "../components/book";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layout style={booksContainer}>
      {store.items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Layout>
  );
}
