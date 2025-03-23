<template>
  <div>
    <h4>Books with ISBN > 1000:</h4>
    <ul>
      <li v-for="book in books" :key="book.id">
        <p>
          <strong>ISBN:</strong> {{ book.isbn }} <br />
          <strong>Name:</strong> {{ book.name }}
        </p>
        <button @click="editBook(book)">Edit</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

export default {
  setup() {
    const books = ref([])

    const fetchBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1000),
          orderBy('isbn', 'asc'),
          limit(3),
        )
        const querySnapshot = await getDocs(q)
        const booksArray = []

        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })

        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books: ', error)
      }
    }

    const editBook = async (book) => {
      const newName = prompt('Enter new name for the book:', book.name)
      if (newName && newName !== book.name) {
        try {
          const bookRef = doc(db, 'books', book.id)
          await updateDoc(bookRef, {
            name: newName,
          })
          fetchBooks()
          alert('Book updated successfully!')
        } catch (error) {
          console.error('Error updating book: ', error)
        }
      }
    }

    const deleteBook = async (bookId) => {
      const confirmation = confirm('Are you sure you want to delete this book?')
      if (confirmation) {
        try {
          const bookRef = doc(db, 'books', bookId)
          await deleteDoc(bookRef)
          fetchBooks()
          alert('Book deleted successfully!')
        } catch (error) {
          console.error('Error deleting book: ', error)
        }
      }
    }

    onMounted(() => {
      fetchBooks()
    })

    return {
      books,
      editBook,
      deleteBook,
    }
  },
}
</script>

<style scoped>
h4 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li p {
  text-align: left;
}

button {
  margin-top: 5px;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
