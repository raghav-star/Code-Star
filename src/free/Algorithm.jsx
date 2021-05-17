import React from 'react';
import Card from "./Card.jsx"


function Algorithm(){
    return(
        <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Search" link="https://media.geeksforgeeks.org/img-practice/search_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Sorting" link="https://media.geeksforgeeks.org/img-practice/sorting_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Recursion" link="https://media.geeksforgeeks.org/img-practice/recursion_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Greedy" link="https://media.geeksforgeeks.org/img-practice/greedy_55.png"/>
       </div>
       </div>

       <div className="row ">
        <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Dynamic Programming" link="https://media.geeksforgeeks.org/img-practice/dynamic_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Backtracking" link="https://media.geeksforgeeks.org/img-practice/backtracking_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Mathematical" link="https://media.geeksforgeeks.org/img-practice/mathematical_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Bit Algorithms" link="https://media.geeksforgeeks.org/img-practice/bit_55.png"/>
       </div>
       </div>

       <div className="row ">
        <div className="col-lg-3 col-md-6 pt-4">
        <Card text="Prime Number" link="https://media.geeksforgeeks.org/img-practice/prime_55.png"/>
       </div>
       <div className="col-lg-3 col-md-6 pt-4">
       <Card text="Combinatorics" link="https://media.geeksforgeeks.org/img-practice/combinatorics_55.png"/>
       </div>
       </div>


       </div>
    );
}

export default Algorithm;