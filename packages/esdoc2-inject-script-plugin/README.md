# esdoc2 Inject Script Plugin
## Install
```bash
npm install esdoc2-inject-script-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdoc2-inject-script-plugin", "option": {"enable": true, "scripts": ["./foo.js"]}}
  ]
}
```

`enable` is default `true`.

## LICENSE
MIT

## Author
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)
