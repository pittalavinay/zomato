import React from 'react'
import './App.css'
const Card = () => {
  return (
    <div><div className='car'>
   <div className='car1'><div className="card" >
      <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Cardimage" width='300'/>
      <div class="card-body">
        <h5>Order Online</h5>
        <p>Stay home and order to your desktop</p>
      </div></div>
    </div>
   <div className='car2'> <div className="card" >
      <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Cardimage" />
      <div class="card-body">
       <h5>Dining</h5> 
       <p>View the cite's favourite venues</p>
      </div></div>
    </div>
    <div class="card" >
      <img class="card-img-top" src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Cardimage" />
      <div class="card-body">
      <h4>Nightlife and clubs</h4> 
      <p>Explore the city's top nightlife outlets</p>
      </div>
    </div>
    </div>
    <div className='coll'>
      <h1>Collections</h1>
      <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
</p><div className='image'>
<img src='https://b.zmtcdn.com/data/collections/cc14f75f52283ef9e9e09d3bf80ae19c_1534945146.jpg?output-format=webp' width='250px' height='300px'/>
<img src='https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708807.jpg?output-format=webp' width='250px' height='300px'/>
<img src='https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg?output-format=webp' width='250px' height='300px'/>
<img src='https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040548.png?output-format=webp' width='250px' height='300px'/>
</div> </div>
    </div>
  )
}

export default Card