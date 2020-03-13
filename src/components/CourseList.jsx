import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

function CourseList(props) {
  return (
    <div>
      <Table>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => (
            <tr>
              <th scope="row">·</th>
              <td>
                <Link to={`/course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CourseList;
