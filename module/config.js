import { RACES } from './constants/races.js'
import { ATTACK_TYPES } from './constants/attackTypes.js'
import { WEAPON_CONDITIONS } from './constants/weaponConditions.js'

// Globally available variables for the system, available in all templates with "falloutpnp."
export const falloutpnp = {
  weapons: {
    "Pistola": {
      damage: "1d6",
      weight: 3,
      range: 5,
      description: "Una pistola básica.",
    },
    "Rifle": {
      damage: "1d8",
      weight: 5,
      range: 10,
      description: "Un rifle de cerrojo.",
    },
  "Etor": {
    damage: "2d100",
    weight: 5,
    range: 100,
    description: "etor arma"
  }
    // ... otras armas
  },
};
