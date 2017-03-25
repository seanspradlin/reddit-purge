# reddit-purge

This is a simple script to purge your Reddit comment history.

Why do you need this? Reddit is 11-years-old now. It's not hard to trawl through your comment
history and piece together who you are. Besides, do you really want your username to be
associated with the questions you asked as a 13-year-old on the Dead or Alive 4 board?

## How do I use it?

[Read here](https://github.com/reddit/reddit/wiki/OAuth2) on create a Reddit app script

You'll get an app ID and secret. Now, make a `config.json` file as follows:

```
{
  "username": "wonderbread",
  "password": "hunter2",
  "platform": "ubuntu",
  "id": "JsuhDIISnswaxw",
  "secret": "Y-m__FI9acuHuaErncsSokf"
}
```

Now just `npm install` and `node index.js` and get some coffee. Your comments will be overwritten
with 'foo' before being deleted to prevent any archiving from fetching your actual text.

