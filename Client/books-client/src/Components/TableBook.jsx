import { Button } from "bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function TableBook(props) {
  const { books, onDelete, onUpdate } = props;

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        {/* <Link to={`add`} className="button is-success">
        Add New
      </Link> */}
        <Container>
          {/* <Table> 
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <DescriptionForm book={book} onUpdate={onUpdate} />
              
                  <button onClick={() => onDelete(book._id)}>Delete</button>
                
              </tr>
            ))}
          </tbody>

          </Table> */}

          <Card>
            <Card.Header as="h5">Books</Card.Header>

            {books.map((book, index) => (
              <ListGroup variant="flush" >
                <ListGroup.Item variant="dark">
                  <b>Title:</b> {book.title}
                </ListGroup.Item>
                <ListGroup.Item variant="light" >
                  <b>Description:</b>{" "}
                  
                  {<DescriptionForm book={book} onUpdate={onUpdate} />}
                  
                </ListGroup.Item>
                <ListGroup.Item>
                  {<button onClick={() => onDelete(book._id)}>Delete</button>}
                </ListGroup.Item>
              </ListGroup>
              
            ))}
          </Card>
        </Container>
        
      </div>
    </div>
  );
}

function DescriptionForm(props) {
  const { book, onUpdate, onDelete } = props;

  const [description, setDescription] = useState(book.description);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <td>
        <input
          type="text"
          value={description}
          onChange={(event) => handleChange(event)}
        ></input>
      </td>
      <td>
        <button
          onClick={() => onUpdate({ _id: book._id, description: description })}
        >
          Update
        </button>
      </td>
    </div>
  );
}

export default TableBook;
