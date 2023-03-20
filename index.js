function run() {
  const emojiMap = {
    /* moving emoji name: static emoji name */
    partyparrot: {
      name: 'parrot',
      url: 'static/emoji/1f99c.png'
    },
    ultraparrot: {
      name: 'parrot',
      url: 'static/emoji/1f99c.png'
    },
    woot: {
      name: 'parrot',
      url: 'static/emoji/1f99c.png'
    },
    alert: {
      name: 'alarm_clock',
      url: 'static/emoji/23f0.png'
    }
  };

  Object.entries(emojiMap).forEach(([movingEmoji, staticEmoji]) => {
    document.querySelectorAll(`span[data-emoticon=${movingEmoji}] > span`).forEach(n => {
      n.style = `background-image: url("${document.location.origin}/${staticEmoji.url}")`;
    });
    document.querySelectorAll(`span[data-emoticon=${movingEmoji}]`).forEach(n => {
      const hasImg = n.style["background-image"];
      if(hasImg) {
       n.style = `background-image: url("${document.location.origin}/${staticEmoji.url}")`;        
      }
    });
    document.querySelectorAll(`button[id$="-${movingEmoji}"] span.Reaction__emoji.emoticon`).forEach(n => {
      n.style = `background-image: url("${document.location.origin}/${staticEmoji.url}")`;
    });   
    document.querySelectorAll(`button[id$="-${movingEmoji}"] img.Reaction__emoji.emoticon`).forEach(n => {
      n.src = `${document.location.origin}/${staticEmoji.url}`;
    });
  });
}

document.querySelectorAll('li.SidebarChannel').forEach(n => n.addEventListener('click', (ev) => setTimeout(run, 800)));

run();
