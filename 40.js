function make_album(artist, title, tracks = 0) {
  album = {
    artist: artist,
    title: title,
  };
  if (tracks !== 0) {
    album["tracks"] = tracks;
  }

  return album;
}

console.log(make_album("Mashood", "ride the Hourse"));

console.log(make_album("Asad", "Biking"));

console.log(make_album("Maarok", "stranger", (tracks = 5)));
