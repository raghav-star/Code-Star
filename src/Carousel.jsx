import React from "react";

function Carousel(){
      return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1000">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://openthread.google.cn/images/ot-contrib-google.png" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2019/06/OYO_Rooms_logo-992x680.png" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/01/paypal.png?fit=1000%2C600&ssl=1" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658__340.png" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFopnFlNFLKsRKLcwLXyUDnsxIfFQv3yz8g&usqp=CAU" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      );
}

export default Carousel;