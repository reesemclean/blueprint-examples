export default class {
  constructor($log) {
    'ngInject';

    Object.assign(this, { $log });
  }

  $onInit() {
    this.$log.info('{{kebabCase name}} $onInit');
  }
}
