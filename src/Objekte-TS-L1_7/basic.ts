type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
  };
  
  const myTopFour: Music[] = [
    {
      artist: 'The Beatles',
      title: 'Abbey Road',
      release_year: 1969,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      artist: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_year: 1978,
      medium: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_year: 1971,
      medium: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_year: 1983,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

  myTopFour.forEach((song: Music) => {
    console.log("Künstler:", song.artist);
    console.log("Titel:", song.title);
    console.log("Formate:", song.medium.join(", "));
    console.log("---");
});

const output = document.getElementById('output') as HTMLDivElement;

myTopFour.forEach((song: Music) => {
    const entry = document.createElement('div');
    entry.innerHTML = `
    <p><strong>Künstler:</strong> ${song.artist}</p>
    <p><strong>Titel:</strong> ${song.title}</p>
    <p><strong>Formate:</strong> ${song.medium.join(', ')}</p>
    <hr>
    `;
    output.appendChild(entry);
});


const output2 = document.getElementById('output2') as HTMLDivElement;

myTopFour.filter((song: Music) => song.release_year < 1975).forEach((song: Music) => {
  const entry = document.createElement('div');
  entry.innerHTML = `
    <p><strong>Künstler:</strong> ${song.artist}</p>
    <p><strong>Titel:</strong> ${song.title}</p>
    <p><strong>Formate:</strong> ${song.medium.join(', ')}</p>
    <hr>              
    `;
output2.appendChild(entry);
});