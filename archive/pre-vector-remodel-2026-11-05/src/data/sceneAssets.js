export const sceneAssets = {
  hero: [
    { src: '/assets/backgrounds/hero/hero_background.png', depth: 4, zIndex: 1, opacity: 1, priority: true },
    { src: '/assets/foreground/clouds/far_clouds.png', depth: 4, zIndex: 2, opacity: .25, position: 'center top' },
    { src: '/assets/characters/dionysus/hero_dionysus_bust.png', depth: 14, zIndex: 3, opacity: 1, position: 'center bottom', scale: .9, priority: true },
    { src: '/assets/atmosphere/fog/hero_fog.png', depth: 24, zIndex: 4, opacity: .13, position: 'center bottom' },
    { src: '/assets/foreground/grapes/hero_grapes.png', depth: 18, zIndex: 2, opacity: .8, position: 'center 38%', scale: .68 },
    { src: '/assets/foreground/ivy/hero_vine_foreground.png', depth: 30, zIndex: 6, opacity: .8, position: 'center bottom', scale: 1 }
  ]
};

// The approved cover is the only scene that still uses photographic layers.
export const sceneForSlide = () => sceneAssets.hero;
