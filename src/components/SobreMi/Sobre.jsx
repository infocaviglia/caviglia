import React from "react";

const Sobre = () => {
  return (
    <div style={{textAlign:"-webkit-center"}}>
      <section className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-10 place-items-center">
        <h2 className="mb-4 text-3xl md:text-4xl text-center tracking-tight font-extrabold text-tertiary uppercase">nuestra historia</h2>
        <div className="px-10 py-1 mb-4 text-center bg-tertiary uppercase w-1/4"></div>
        <article className="flex gap-4">
          <div className="px-4 align-middle items-center text-start content-center">
            <p className="text-gray-700 mb-4">
              Fundada en <strong>1979</strong> en Mar del Plata, <strong>Repuestos Caviglia</strong> ha sido sinónimo de calidad y compromiso en el rubro de repuestos para camiones y maquinaria pesada.
            </p>
            <p className="text-gray-700 mb-4">
              Nos especializamos principalmente en las marcas <strong>Iveco</strong> y <strong>Fiat</strong>, ofreciendo repuestos originales y alternativos con un amplio stock y asesoramiento técnico personalizado.
            </p>
            <p className="text-gray-700 mb-4">
              A lo largo de más de <strong>40 años</strong>, construimos una relación de confianza con nuestros clientes, brindando atención experta, envíos a todo el país y soluciones concretas para el transporte pesado.
            </p>
            <p className="text-gray-700">
              Actualmente, estamos ubicados en <strong>Av. Champagnat 1167</strong>, Mar del Plata, y seguimos trabajando con la misma pasión de siempre, acompañando al sector en cada kilómetro.
            </p>
          </div>
          <div className=" rounded-md">
            <img src='/images/cavigliaPortada.webp' alt='foto del frente del local' title='foto del frente del local' className="w-full rounded-2xl shadow-md" />
          </div>
        </article>

      </section>
    </div>
  );
};

export default Sobre;
