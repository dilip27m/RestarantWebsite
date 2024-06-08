import React from 'react';
import './outer.css';
import breakfast1 from './breakfast1.jpg';
import breakfast2 from './breakfast2.jpg';
import breakfast3 from './breakfast3.jpg';
import lunch1 from './lunch1.jpg';
import lunch2 from './lunch2.jpg';
import lunch3 from './lunch3.jpg';
import dinner1 from './dinner1.jpg';
import dinner2 from './dinner2.jpg';
import dinner3 from './dinner3.jpg';

function Menu() {
  return (
    <div id="menu">
      <h1 id="section">Menu</h1>
      <div id="menu_row">
        <div id="menu_col">
          <h2>Breakfast</h2>
          <div className="box">
            <div id="image">
              <img src={breakfast1} alt="Bread Omelette" />
            </div>
            <div>
              <h3>Bread Omelette</h3>
              <h4>Rs.119</h4>
            </div>
          </div>
          <div className="box">
            <div id="image">
              <img src={breakfast2} alt="Aloo Parantha" />
            </div>
            <div>
              <h3>Aloo Parantha</h3>
              <h4>Rs.89</h4>
            </div>
          </div>
          <div className="box">
            <div id="image">
              <img src={breakfast3} alt="Chapathi with mixed veg curry" />
            </div>
            <div>
              <h3>Chapathi with mixed veg curry</h3>
              <h4>Rs.109</h4>
            </div>
          </div>
        </div>
        <div id="menu_col">
          <h2>Lunch</h2>
          <div className="box">
            <div id="image">
              <img src={lunch1} alt="Chicken Biryani" />
            </div>
            <div>
              <h3>Chicken Biryani</h3>
              <h4>Rs.269</h4>
            </div>
          </div>
          <div className="box">
            <div id="image">
              <img src={lunch2} alt="Fish" />
            </div>
            <div>
              <h3>Fish</h3>
              <h4>Rs.649</h4>
            </div>
          </div>
          <div className="box">
            <div id="image">
              <img src={lunch3} alt="North Indian Meal" />
            </div>
            <div>
              <h3>North Indian Meal</h3>
              <h4>Rs.319</h4>
            </div>
          </div>
        </div>
        <div id="menu_col">
          <h2>Dinner</h2>
          <div className="box">
            <div id="image">
              <img src={dinner1} alt="Grilled Chicken" />
            </div>
            <div>
              <h3>Grilled Chicken</h3>
              <h4>Rs.599</h4>
            </div>
          </div>
          <div className="box">
            <div id="image">
              <img src={dinner2} alt="Palak Chicken" />
            </div>
            <div>
              <h3>Palak Chicken</h3>
              <h4>Rs.299</h4>
            </div>
          </div>
          <div className="box">
            <div id="image">
              <img src={dinner3} alt="Shahi Paneer" />
            </div>
            <div>
              <h3>Shahi Paneer</h3>
              <h4>Rs.289</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
