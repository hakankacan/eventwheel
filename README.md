# Eventwheel

  Mouse wheel event shim

## Instalation

  UMD:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/eventwheel/0.2.1/eventwheel.min.js"></script>
```

  Component(1):

```sh
$ component install andrepolischuk/eventwheel
```

  Npm:

```sh
$ npm install eventwheel
```

## API

### eventwheel.bind(element, fn[, capture])

  Bind event `mousewheel` handler

```js
eventwheel.bind(element, function(e) {

});
```

### eventwheel(element, fn[, capture])

  `eventwheel.bind` alias

### eventwheel.unbind(element, fn[, capture])

  Unbind event `mousewheel` handler

## License

  MIT
