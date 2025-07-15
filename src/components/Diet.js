import React from 'react';
import './Diet.css';

function Diet() {
  return (
    <div className="diet-container">
      <h2>Diet Plan</h2>
      <div className="diet-table-wrapper">
        <table className="diet-table">
          <thead>
            <tr>
              <th>Meal</th>
              <th>Time</th>
              <th>Food Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Early Morning</td>
              <td>6:30 – 7:00 AM</td>
              <td>1 glass warm water with lemon or soaked almonds (5-6 nos.)</td>
            </tr>
            <tr>
              <td>Breakfast</td>
              <td>8:00 – 9:00 AM</td>
              <td>
                Vegetable upma / poha / oats porridge / whole wheat toast with peanut butter
                <br />+ 1 cup milk or tea/coffee without sugar
              </td>
            </tr>
            <tr>
              <td>Mid-Morning Snack</td>
              <td>11:00 AM</td>
              <td>
                1 seasonal fruit (apple, banana, papaya, etc.)
                <br />or buttermilk
              </td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>1:00 – 2:00 PM</td>
              <td>
                1-2 chapatis + 1 cup rice + dal or rajma or chole + 1 bowl vegetable + curd
              </td>
            </tr>
            <tr>
              <td>Evening Snack</td>
              <td>4:30 – 5:00 PM</td>
              <td>
                Green tea or lemon tea + roasted chana or murmura or sprouts salad
              </td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>7:30 – 8:30 PM</td>
              <td>
                1-2 chapatis + light sabzi + soup or salad
              </td>
            </tr>
            <tr>
              <td>Post-Dinner <span className="optional">(Optional)</span></td>
              <td>9:00 – 9:30 PM</td>
              <td>
                1 cup warm milk (optional, if not lactose intolerant)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="diet-guidelines">
        <h3>✅ Guidelines for a Balanced Diet</h3>
        <ul>
          <li><strong>Carbs:</strong> 50–60% (whole grains, rice, roti, oats)</li>
          <li><strong>Protein:</strong> 15–20% (dal, pulses, milk, eggs, paneer)</li>
          <li><strong>Fats:</strong> 20–25% (nuts, ghee, oil in moderation)</li>
          <li><strong>Fruits &amp; Vegetables:</strong> 4–5 servings a day</li>
          <li><strong>Water:</strong> 8–10 glasses per day</li>
        </ul>
        <h3>🥩 Optional Non-Vegetarian Substitutes</h3>
        <ul>
          <li>Eggs instead of paneer</li>
          <li>Chicken breast or grilled fish for lunch or dinner</li>
          <li>Boiled egg or tuna sandwich for breakfast/snack</li>
        </ul>
      </div>
    </div>
  );
}

export default Diet;