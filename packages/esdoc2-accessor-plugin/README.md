# esdoc2 Accessor Plugin
## Install
```bash
npm install esdoc2-accessor-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdoc2-accessor-plugin", "option": {"access": ["public", "protected", "private"], "autoPrivate": true}}
  ]
}
```

- `access` is default `["public", "protected", "private"]`
- `autoPrivate` is default `true`

## LICENSE
MIT

## Author
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)
