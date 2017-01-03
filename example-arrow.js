var names = ['Andrew', 'John', 'Saulo', 'Patricia'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => console.log('arrowFunc', name));
