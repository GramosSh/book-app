import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Container, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';



function CreateBook(props) {
  const { onCreate } = props;

  const [book, setBook] = useState({
    title: "",
    description: ""
  });

  const handleChnage = (e) => {
    console.log(e.target.name, e.target.value);
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(book)
    onCreate(book);
    console.log(e);
  };

  return (

    



    // <form onSubmit={onSubmit}>
    //   <label>
    //     Title:
    //     <input
    //       name="title"
    //       type="text"
    //       value={book.title}
    //       onChange={(e) => handleChnage(e)}
    //     />
    //   </label>
    //   <label>
    //     Description:
    //     <input
    //       name="description"
    //       type="text"
    //       value={book.description}
    //       onChange={(e) => handleChnage(e)}
    //     />
    //   </label>
    //   <button type="submit" value="Submit">
    //     Save
    //   </button>
    // </form>


    <Container>

<Form onSubmit={onSubmit}>
       
      <Form.Group className="md-4" controlId="formBasicEmail">
        <Form.Label><b>Title</b></Form.Label>
        <Form.Control size="sm" name="title" type="text" placeholder="Enter title" value={book.title} onChange={(e) => handleChnage(e)} />
      </Form.Group>

      <Form.Group className="md-4" controlId="formBasicPassword">
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control size ="sm" name="description" type="text" placeholder="Description" value={book.description} onChange={(e) => handleChnage(e)}   />
      </Form.Group>
{/* 
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>   */}
    
      <Button className="float-end" size="sm" style={{margin:'5px 0px 5px ' }}  variant="primary" type="submit" value="Submit">
        Add new book
      </Button>

      
    </Form>
    </Container>







  );
}

export default CreateBook;
