function run() {
  const emojiMap = {
    /* moving emoji name: static emoji name */
    partyparrot: {
      name: 'parrot',
      url: 'static/emoji/1f99c.png'
    }
  }

  for( let em in emojiMap ) {
    document.querySelectorAll('button[id$="-partyparrot"] span.Reaction__emoji.emoticon').forEach(n => {
      n.style = 'color: white;'
      n.style = `background-image: url("${document.location.origin}/${emojiMap[em].url}")`;
      n.innerHTML = emojiMap[em].name;
    });
  }
}

run();
