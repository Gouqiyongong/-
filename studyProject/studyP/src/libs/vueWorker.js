import SimpleWebWorker from '@zz-vc/simple-web-worker'

export default {
  install: function(Vue, name) {
    name = name || '$worker'
    Object.defineProperty(Vue.prototype, name, { value: SimpleWebWorker })
  }
}
