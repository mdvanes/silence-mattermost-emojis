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

  Object.entries(emojiMap).forEach(([movingEmoji, staticEmoji]) => {
    document.querySelectorAll(`span[data-emoticon=${movingEmoji}] > span`).forEach(n => {
      n.style = `background-image: url("${document.location.origin}/${staticEmoji.url}")`;
    });
    document.querySelectorAll(`button[id$="-${movingEmoji}"] span.Reaction__emoji.emoticon`).forEach(n => {
      n.style = `background-image: url("${document.location.origin}/${staticEmoji.url}")`;
    });    
  });
}

run();
