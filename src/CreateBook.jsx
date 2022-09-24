import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      bookName: "",
      authorName: "",
      isbnCode: "",
      status: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.bookName === "") errors.bookName = "please enter book name";
      if (values.authorName === "") errors.authorName = "please enter author name";
      if (values.isbnCode === "") errors.isbnCode = "please enter isbn code";
      if (values.status === "") errors.status = "please enter status";
      return errors;
    },
    onSubmit: async (values) => {
      let product = await axios.post(
        "https://6290209e665ea71fe12da309.mockapi.io/library",
        values
      );
      alert("book created");
      navigate("/books");
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Book Name</label>
              <input
                className={`form-control ${
                  formik.errors.bookName ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.bookName}
                onChange={formik.handleChange}
                name="bookName"
              />
              <span style={{ color: "red" }}>{formik.errors.bookName}</span>
            </div>
            <div className="col-lg-6">
              <label>Author Name</label>
              <input
                className={`form-control ${
                  formik.errors.authorName ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.authorName}
                onChange={formik.handleChange}
                name="authorName"
              />
              <span style={{ color: "red" }}>{formik.errors.authorName}</span>
            </div>
            <div className="col-lg-6">
              <label>ISBN Code</label>
              <input
                className={`form-control ${
                  formik.errors.isbnCode ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.isbnCode}
                onChange={formik.handleChange}
                name="isbnCode"
              />
              <span style={{ color: "red" }}>{formik.errors.isbnCode}</span>
            </div>
            <div className="col-lg-6">
              <label>Status</label>
              <input
                className={`form-control ${
                  formik.errors.status ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.status}
                onChange={formik.handleChange}
                name="status"
              />
              <span style={{ color: "red" }}>{formik.errors.status}</span>
            </div>
            <div className="col-lg-6">
              <input
                className="btn btn-primary mt-2"
                type={"submit"}
                value="Submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBook;
