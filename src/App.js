
import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';

function App() {
  let product = {title: "Product List"};
  let category = {title: "Category List"};
  return (
    <div>
      <Container>
        <Row><Navi/></Row>
        <Row>
          <Col xs="3"><CategoryList info={category}/></Col>
          <Col xs="9"><ProductList info={product}/></Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
