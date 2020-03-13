import React from "react";
import TextInput from "./common/TextInput";

const CourseForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        error={props.errors.title}
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Alien</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        error={props.errors.category}
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
