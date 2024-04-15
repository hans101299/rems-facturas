// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    {edificio: "TORRE SIGLO XXI", correo: "Bruno.Rossi@rems.pe"},
{edificio: "TORRE PARQUE MAR", correo: "Patricia.Morel@rems.pe"},
{edificio: "EDIFICIO NACIONAL", correo: "Marani.Rios@rems.pe"},
{edificio: "CENTRO EJECUTIVO CHACARILLA", correo: "Jacson.Estrada@rems.pe"},
{edificio: "EDIFICIO AENZA", correo: "Kevin.Rivera@rems.pe"},
{edificio: "EDIFICIO SANTO TORIBIO", correo: "Luis.Ancajima@rems.pe"},
{edificio: "EDIFICIO VICTOR ANDRES BELAUNDE", correo: "Richard.Almeida@rems.pe"},
{edificio: "ESTACIONAMIENTOS  JW MARRIOTT - TPM", correo: "Patricia.Morel@rems.pe"},
{edificio: "EDIFICIO CAPITAL", correo: "Virginia.Aravena@rems.pe"},
{edificio: "CENTRO EMPRESARIAL POLO HUNT II", correo: "Martin.Alva@rems.pe"},
{edificio: "CENTRO EMPRESARIAL REDUCTO", correo: "Ricardo.Porras@rems.pe"},
{edificio: "EDIFICIO LARCO", correo: "Wilson.Romero@rems.pe"},
{edificio: "EDIFICIO FUNDACION", correo: "Zenobio.Meneses@rems.pe"},
{edificio: "CENTRO COMERCIAL SANTA MARIA", correo: "Miguel.Escobedo@rems.pe"},
{edificio: "CENTRO EMPRESARIAL TORRE PINAR", correo: "Jacson.Estrada@rems.pe"},
{edificio: "EDIFICIO METROPOLIS ", correo: "Rino.Calderon@rems.pe"},
{edificio: "EDIFICIO CORPORATIVO QUBO", correo: "Luis.Perez@rems.pe"},
{edificio: "EDIFICIO LA HABANA", correo: "Ricardo.Porras@rems.pe"},
{edificio: "CENTRO EMPRESARIAL SAN ISIDRO", correo: "Charlets.Cespedes@rems.pe"},
{edificio: "LAS TORRES SAN ISIDRO", correo: "JoseLuis.Pacherres@rems.pe"},
{edificio: "EDIFICIO MIRACORP", correo: "Ricardo.Porras@rems.pe"},
{edificio: "MACROS EDIFICIO EMPRESARIAL", correo: "Andrea.Bazo@rems.pe"},
{edificio: "TORRE AMERICA", correo: "Marani.Rios@rems.pe"},
{edificio: "CENTRO EMPRESARIAL JUAN DE ARONA", correo: "Romel.Elias@rems.pe"},
{edificio: "EDIFICIO PARDO Y ALIAGA", correo: "Manuel.Paulino@rems.pe"},
{edificio: "REDUCTO BUSINESS CENTER", correo: "Bruno.Rossi@rems.pe"},
{edificio: "EDIFICIO GERENS", correo: "Martin.Alva@rems.pe"},
{edificio: "EDIFICIO CHOCAVENTO", correo: "Antonio.Forno@rems.pe"},
{edificio: "EDIFICIO EMPRESARIAL OMEGA", correo: "Lorena.Contreras@rems.pe"},
{edificio: "LINK TOWER", correo: "Danny.Trigoso@rems.pe"},
{edificio: "ONYX BUSINESS CENTER", correo: "Carlos.Goitizolo@rems.pe"},
{edificio: "EDIFICIO 991", correo: "Gabriel.Rivera@rems.pe"},
{edificio: "EDIFICIO EMPRESARIAL GRAU", correo: "Kevin.Rivera@rems.pe"},
{edificio: "CENTRO EMPRESARIAL QUATTRO", correo: "Bruno.Rossi@rems.pe"},
{edificio: "EDIFICIO BASADRE 233", correo: "Adrian.Quino@rems.pe"},
{edificio: "EDIFICIO CORPORATIVO AENZA", correo: "Kevin.Rivera@rems.pe"},
{edificio: "EDIFICIO SANTA CRUZ", correo: "Ricardo.Porras@rems.pe"},
{edificio: "CENTRO EMPRESARIAL LEURO", correo: "Hugo.Garcia@rems.pe"},
{edificio: "CENTRO EMPRESARIAL TANGÜIS", correo: "Mario.Caspani@rems.pe"},
{edificio: "EDIFICIO LIBERTADORES", correo: "Jesus.Enriquez@rems.pe"},
{edificio: "CENTRO EMPRESARIAL LA MOLINA", correo: "Jaime.Chavez@rems.pe"},
{edificio: "EDIFICIO VITRA", correo: "Rino.Calderon@rems.pe"},
{edificio: "EDIFICIO CORPORATIVO ROOSEVELT", correo: "AnaMaria.Caceres@rems.pe"},
{edificio: "TORRE BARLOVENTO", correo: "Luis.Ancajima@rems.pe"},
{edificio: "EDIFICIO TORRE ORQUIDEAS", correo: "David.Campos@rems.pe"},
{edificio: "TORRE NAVARRETE", correo: "Nadia.Aspiazu@rems.pe"},
{edificio: "PANORAMA CENTRO EMPRESARIAL", correo: "Giancarlo.Bertarelli@rems.pe"},
{edificio: "EDIFICIO ALBERTO DEL CAMPO 409", correo: "Juan.Idrogo@rems.pe"},
{edificio: "JUNTA DE PROPIETARIOS DE LA TORRE 1", correo: "Daniel.Garces@rems.pe"},
{edificio: "EDIFICIO PARQUE LAS LOMAS", correo: "Dolores.Visconti@rems.pe"},
{edificio: "PRISMA BUSINESS TOWER", correo: "Patricia.Valdivia@rems.pe"},
{edificio: "EDIFICIO BASADRE 607", correo: "Liset.Severino@rems.pe"},
{edificio: "CENTRO EMPRESARIAL ABRIL", correo: "Ricardo.Porras@rems.pe"},
{edificio: "PRIME TOWER", correo: "Diego.Mendoza@rems.pe"},
{edificio: "OFIS TOWER", correo: "Diana.Sosa@rems.pe"},
{edificio: "ICHMA EDIFICIO CORPORATIVO", correo: "Vidal.Alvitres@rems.pe"},
{edificio: "EDIFICIO TRILLIUM TOWER", correo: "Wilson.Romero@rems.pe"},
{edificio: "CENTRO EMPRESARIAL VOLTERRA", correo: "Manuel.Paulino@rems.pe"},
{edificio: "TORRE WIESE", correo: "Gino.Poggi@rems.pe"},
{edificio: "EDIFICIO ALIAGA 360", correo: "Rafael.Bejarano@rems.pe"},
{edificio: "EDIFICIO T-TOWER", correo: "Felipe.Pena@rems.pe"},
{edificio: "TORRE TEKTON", correo: "Armando.Flores@rems.pe"},
{edificio: "TORRE FORUM", correo: "Juan.Chanta@rems.pe"},
{edificio: "PATIO ABTAO", correo: "Jenny.Reyes@rems.pe"},
{edificio: "PATIO CENTRIC", correo: "Gladys.Heredia@rems.pe"},
{edificio: "LIT ONE", correo: "Ninoska.Rojas@rems.pe"},
{edificio: "FIBRA PASEO DEL BOSQUE", correo: "Rolando.Turpo@rems.pe"},
{edificio: "CENTRO EMPRESARIAL BASADRE (ESTAC.)", correo: "Gladys.Heredia@rems.pe"},
{edificio: "TORRE PANAMÁ", correo: "William.Espinoza@rems.pe"},
{edificio: "EDIFICIO DEAN VALDIVIA N° 1 (China Railway)", correo: "AnaMaria.Caceres@rems.pe"},
{edificio: "PATIO CAMELIAS", correo: "Carola.Montezuma@rems.pe"},
{edificio: "EDIFICIO CREDISCOTIA", correo: "Darwin.Tafur@rems.pe"},
{edificio: "TORRE SANTA LUISA", correo: "William.Espinoza@rems.pe"},
{edificio: "EDIFICIO PERSHING TOWER", correo: "Karina Pareja@rems.pe"},
{edificio: "EDIFICIO EMPRESARIAL ESQUILACHE", correo: "Darwin.Zapata@rems.pe | Luis.Saavedra@rems.pe"},
{edificio: "CENTRO DE CONVENCIONES Y OFICINAS CAMINO REAL", correo: "Darwin.Zapata@rems.pe | Luis.Saavedra@rems.pe"},
{edificio: "EDIFICIO TORRE 28", correo: "dallyn.carrasco@rems.pe"}
]; // Lista de opciones

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('option', selectedOption);
  
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
  
      // Aquí puedes manejar la respuesta de la API
      const responseData = await response.json();
      console.log('Respuesta de la API:', responseData);
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            Selecciona un archivo:
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="select" className="block text-gray-700 font-bold mb-2">
            Selecciona una opción:
          </label>
          <select
            id="select"
            name="select"
            value={selectedOption}
            onChange={handleSelectChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una opción...</option>
            {options.map((option, index) => (
              <option key={index} value={option.correo}>
                {option.edificio}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
