# silence-mattermost-emojis
Replace moving mattermost emojis by static emojis

## Bookmarklet

Created with: https://mrcoles.com/bookmarklet/


```
javascript:(function()%7Bfunction%20run()%20%7Bconst%20emojiMap%20%3D%20%7B%2F*%20moving%20emoji%20name%3A%20static%20emoji%20name%20*%2Fpartyparrot%3A%20%7Bname%3A%20'parrot'%2Curl%3A%20'static%2Femoji%2F1f99c.png'%7D%2Calert%3A%20%7Bname%3A%20'alarm_clock'%2Curl%3A%20'static%2Femoji%2F23f0.png'%7D%7D%3BObject.entries(emojiMap).forEach((%5BmovingEmoji%2C%20staticEmoji%5D)%20%3D%3E%20%7Bdocument.querySelectorAll(%60span%5Bdata-emoticon%3D%24%7BmovingEmoji%7D%5D%20%3E%20span%60).forEach(n%20%3D%3E%20%7Bn.style%20%3D%20%60background-image%3A%20url(%22%24%7Bdocument.location.origin%7D%2F%24%7BstaticEmoji.url%7D%22)%60%3B%7D)%3Bdocument.querySelectorAll(%60button%5Bid%24%3D%22-%24%7BmovingEmoji%7D%22%5D%20span.Reaction__emoji.emoticon%60).forEach(n%20%3D%3E%20%7Bn.style%20%3D%20%60background-image%3A%20url(%22%24%7Bdocument.location.origin%7D%2F%24%7BstaticEmoji.url%7D%22)%60%3B%7D)%3B%7D)%3B%7Drun()%7D)()
```

Suggested bookmark name: 🤫
