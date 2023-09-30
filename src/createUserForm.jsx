import React, { useState } from 'react';

function CreateUserForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor para crear un nuevo usuario
    console.log('Datos del usuario:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Correo electrónico:
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Crear Usuario</button>
    </form>
  );
}

export default CreateUserForm;
