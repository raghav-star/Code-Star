import React from "react";
import Card from "./Card.jsx";

function Cards(){
    return(
        <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Array" link="https://media.geeksforgeeks.org/img-practice/array_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Linked List" link="https://media.geeksforgeeks.org/img-practice/linked_list_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Stack" link="https://media.geeksforgeeks.org/img-practice/stack_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Queue" link="https://media.geeksforgeeks.org/img-practice/queue_55.png"/>
       </div>
       </div>

       <div className="row ">
        <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Tree" link="https://media.geeksforgeeks.org/img-practice/tree_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="BST" link="https://media.geeksforgeeks.org/img-practice/bst_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Matrix" link="https://media.geeksforgeeks.org/img-practice/matrix_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Hashing" link="https://media.geeksforgeeks.org/img-practice/hashing_55.png"/>
       </div>
       </div>

       <div className="row ">
        <div className="col-lg-3 col-md-6 pt-4">
        <Card text="Heap" link="https://media.geeksforgeeks.org/img-practice/heap_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Graph" link="https://media.geeksforgeeks.org/img-practice/graph_55.png"/>
       </div>
       </div>


       </div>
    )
}

export default Cards;