import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import{Container,Row,Col} from 'reactstrap';


export default class App extends Component {
  state={currenCategory:"",products:[]};


  componentDidMount(){
    this.getProducts();
  }
  
 
 
   changeCategory = category =>{
    this.setState({currenCategory:category.categoryName});
    console.log(category);
    this.getProducts(category.id);
 };


 getProducts=categoryId => {

let url="http://localhost:3000/products";
if(categoryId){
  url+="?categoryId="+categoryId;
}

  fetch(url)
  .then(response=>response.json())
  .then(data=>this.setState({products:data}));
}


 
  render() {
    let productInfo = {title:"ProductList",baskaBisey:"bisey"}
    let categoryInfo = {title:"CategortyList"}


    return (
      <div>
        <Container> 
        <Navi /> 
        
        <Row>
        <Col xs="3">
        <CategoryList  changeCategory={this.changeCategory} info={categoryInfo}/>
        </Col>
        <Col xs="9">
        <ProductList 
        products={this.state.products}
        currenCategory={this.state.currenCategory} 
        info={productInfo}
        />
        </Col>
      
        </Row>
        </Container>
        
      
      
      </div>
    );
  }



}

