import React, { useState } from "react";

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addHog(formData);
    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
      image: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input name="specialty" placeholder="Specialty" onChange={(e) => setFormData({...formData, specialty: e.target.value})} />
      <input name="weight" placeholder="Weight" type="number" onChange={(e) => setFormData({...formData, weight: e.target.value})} />
      <label>
        Greased:
        <input type="checkbox" onChange={(e) => setFormData({...formData, greased: e.target.checked})} />
      </label>
      <input name="image" placeholder="Image URL" onChange={(e) => setFormData({...formData, image: e.target.value})} />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
