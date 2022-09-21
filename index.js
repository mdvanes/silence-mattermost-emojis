function run() {
  const emojiMap = {
    /* moving emoji name: static emoji name */
    partyparrot: {
      name: 'parrot',
      url: 'static/emoji/1f99c.png'
    },
    alert: {
      name: 'alarm_clock',
      url: 'static/emoji/23f0.png'
    }
  }

  for( let em in emojiMap ) {
    document.querySelectorAll('span[data-emoticon=partyparrot] > span').forEach(n => {
      n.style = `background-image: url("${document.location.origin}/${emojiMap[em].url}")`;
    });
    document.querySelectorAll('button[id$="-partyparrot"] span.Reaction__emoji.emoticon').forEach(n => {
      n.style = `background-image: url("${document.location.origin}/${emojiMap[em].url}")`;
    });
  }
}

run();
