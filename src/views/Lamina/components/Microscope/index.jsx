import React, { useState, useEffect } from 'react';
import { Div } from './styles'

const loadMasks = (masks) => {
  return Promise.all((masks || []).map(({ vector }) => {
    return fetch(vector).then(res => res.text()).catch(err => console.log('Erro:', err));
  }));
};

const Microscope = ({ lamina }) => {
  const { mascaras } = lamina;

  const [svgs, setSvgs] = useState([]);

  useEffect(() => {
    loadMasks(mascaras)
      .then((svgs) => {
        setSvgs(svgs);
      });
  }, [mascaras]);

  const shouldRenderMasks = !!mascaras.length && !!svgs.length;

  return (
    <section id="microscope">
      {lamina && (
        <div id="microscope_imgs">
          <img alt="" src={lamina.imagem[0]} />
          {shouldRenderMasks && mascaras.map(({ color, id }, idx) => {
            const svg = svgs[idx];

            return svg ? (
              <Div
                key={id}
                dangerouslySetInnerHTML={{ __html: svg }}
                className="svg_mask"
                color={color}
              />
            ) : (
              <span>Carregando...</span>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Microscope;
