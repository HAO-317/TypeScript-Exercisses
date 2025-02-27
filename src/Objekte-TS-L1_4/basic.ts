type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  const unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);
  
const hundeNamen = unsereHaustiere[1].namen;
console.log("Alle Hundenamen:", hundeNamen);

unsereHaustiere[1].namen[2] = 'Snoppy'; 
unsereHaustiere[0].namen[2] = 'Pinky';

console.log(...unsereHaustiere);

const neuesHaustier: Pet = {
    tiertyp: 'Hamster',
    namen: ['Jerry', 'Micky']
};

unsereHaustiere.push(neuesHaustier)

console.log("updated Haustiere", unsereHaustiere);
