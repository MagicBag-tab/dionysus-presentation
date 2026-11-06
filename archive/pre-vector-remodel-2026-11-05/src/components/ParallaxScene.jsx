import React from 'react';

export default function ParallaxScene({ layers, parallax }) {
  return <div className="parallax-scene" aria-hidden="true">
    {layers.map((layer) => <img
      key={layer.src}
      className="parallax-layer"
      src={layer.src}
      alt=""
      loading={layer.priority ? 'eager' : 'lazy'}
      style={{
        zIndex: layer.zIndex ?? 1,
        opacity: layer.opacity ?? 1,
        transform: `translate3d(${parallax.x * (layer.depth ?? 0)}px, ${parallax.y * (layer.verticalDepth ?? (layer.depth ?? 0) * .5)}px, 0) scale(${layer.scale ?? 1})`,
        objectPosition: layer.position ?? 'center'
      }}
    />)}
  </div>;
}
