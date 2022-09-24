import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let book = await axios.get(
      "https://6290209e665ea71fe12da309.mockapi.io/library"
    );
    setBooks(book.data);
    setLoading(false);
  };

  let bookDelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure? Do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://6290209e665ea71fe12da309.mockapi.io/library/${id}`
        );
        loadData();
      }
    } catch (error) {}
  };

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Books</h1>
        <Link
          to="/create-book"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create Book
        </Link>
      </div>
      {isLoading ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Book's Data in Table
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
                style={{ textAlign: "center" }}
              >
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Book Name</th>
                    <th>Author Name</th>
                    <th>ISBN Code</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.bookName}</td>
                        <td>{book.authorName}</td>
                        <td>{book.isbnCode}</td>
                        <td>{book.status}</td>
                        <td>
                          <Link to={`/books/${book.id}`} className="btn btn-sm btn-warning mr-2">
                            VIEW
                          </Link>
                          <Link to={`/books/edit/${book.id}`} className="btn btn-sm btn-primary mr-2">
                            EDIT
                          </Link>
                          <button onClick={()=>bookDelete(book.id)} className="btn btn-sm btn-danger mr-2">
                            DELETE
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
