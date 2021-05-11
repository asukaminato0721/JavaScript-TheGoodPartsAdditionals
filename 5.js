{
  class o {
    constructor() {
      this.a = 1;
    }
  }
  let oo = new o();
  console.log(oo.a);
  class ooo extends o {
    constructor() {
      super();
      this.b = 2;
    }
  }
  let oooo = new ooo();
  console.log([oooo.a, oooo.b]);
}
{
  class Pri {
    #pri = 3;
    constructor() {
      this.pri = 4;
    }
    getpri() {
      return this.#pri;
    }
    #getpri() {
      return 1;
    }
    getgetpri() {
      return this.#getpri();
    }
  }
  const p = new Pri();
  console.log([p.pri, p.getpri(), p.getgetpri()]);
}
