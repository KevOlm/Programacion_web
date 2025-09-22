import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Formulario de Datos Personales</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && (
        <div style={{ marginTop: '1rem', background: '#e0ffe0', padding: '1rem' }}>
          <h3>Datos enviados:</h3>
          <p><strong>Nombre:</strong> {form.nombre}</p>
          <p><strong>Apellido:</strong> {form.apellido}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Teléfono:</strong> {form.telefono}</p>
        </div>
      )}
    </div>
  );
}

export default App;