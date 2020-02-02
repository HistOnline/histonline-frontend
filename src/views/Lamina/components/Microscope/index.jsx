import React, { useState, useEffect, useContext } from 'react';
import { Div } from './styles'
import LaminaContext from '../../context'

const loadMasks = (masks) => {
  return Promise.all((masks || []).map(({ vector }) => {
    return fetch(vector).then(res => res.text()).catch(err => console.log('Erro:', err));
  }));
};

const Microscope = () => {
  
  const context = useContext(LaminaContext)
  const lamina = context.lamina,
  { mascaras } = lamina;

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
          {shouldRenderMasks && mascaras.map(({ color, id, alias }, idx) => {
            const svg = svgs[idx];

            return svg ? (
              <Div
                key={alias}
                status={context.masksByAlias[alias].status}
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
