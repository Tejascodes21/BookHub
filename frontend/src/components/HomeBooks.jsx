import React from "react";
import { homeBooksStyles as styles } from "../assets/dummystyles";
import { useCart } from "../CartContext/CartContext";
import { hBooks } from "../assets/dummydata";
import { Star } from "lucide-react"; // for star icons

const HomeBooks = () => {
  const { cart, dispatch } = useCart();

  const inCart = (id) => cart?.items?.some((item) => item.id === id);

  const handleAdd = (book) =>
    dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1 } });
  const handleInc = (id) => dispatch({ type: "INCREMENT", payload: { id } });
  const handleDec = (id) => dispatch({ type: "DECREMENT", payload: { id } });

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className="text-center mb-12">
            <h2 className={styles.heading}>Bookseller Favorites</h2>
            <div className={styles.headingLine} />
          </div>

          <div className={styles.grid}>
            {hBooks.map((book) => {
              const item = inCart(book.id);
              return (
                <div key={book.id} className={styles.bookCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={book.image}
                      alt={book.title}
                      className={styles.image}
                    />
                    <div className={styles.rating}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < book.rating
                              ? "text-[#43C6AC] fill-[#43C6AC]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className={styles.title}>{book.title}</h3>
                  <p className={styles.author}>{book.author} Best author in this week</p>

                  <span className={styles.actualPrice}>₹{book.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBooks;
