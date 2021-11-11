import React from 'react';

const musicData = [
  { artist: 'Adele', name: '25', sales: 1731000 },
  { artist: 'Drake', name: 'Views', sales: 1608000 },
  { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
  { artist: 'Rihanna', name: 'Anti', sales: 603000 },
  { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];


//export const element = React.createElement('ol', {}, musicData.map((obj,index) => React.createElement('li',{key:index},obj.artist)));

export const element = React.createElement('ol', {}, musicData.map((obj,index) => <li key={index}>{obj.name}</li>));
