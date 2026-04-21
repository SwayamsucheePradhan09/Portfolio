"use client"

import Particles from "react-tsparticles"

export default function ParticlesBG() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1 },
          links: {
            enable: true,
            color: "#6366f1"
          }
        }
      }}
    />
  )
}