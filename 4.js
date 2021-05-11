//@ts-check
{
  const add = (/** @type {number} */ a, /** @type {number} */ b) => a + b;
  {
    let myObject = {
      value: 0,
      /**
       * @param {any} inc
       */
      increment(inc) {
        this.value += typeof inc === "number" ? inc : 1;
      },
    };
    myObject.increment();
    console.log(myObject.value);
    myObject.increment(2);
    console.log(myObject.value);

    myObject.double = function () {
      const that = this;
      const helper = function () {
        that.value = add(that.value, that.value);
      };
      helper();
    };
    myObject.double();
    console.log(myObject.value);
  }
  {
    const Quo = function (/** @type {any} */ string) {
      this.status = string;
    };
    Quo.prototype.get_status = function () {
      return this.status;
    };
    const myQuo = new Quo("confused");
    console.log(myQuo.get_status());

    const array = [3, 4];
    {
      const sum = add.apply(null, array);
      console.log(sum);
    }
    {
      const statusObject = {
        status: "A-OK",
      };
      const status = Quo.prototype.get_status.apply(statusObject);
      // 相当于 statusObject.get_status()
      const f = Quo.prototype.get_status.bind(statusObject);
      console.log(status);
      console.log(f());
    }
  }
}
{
  {
    const sum = (/** @type {number[]} */ ...args) => {
      let sum = 0;
      for (let i = 0; i < args.length; i++) {
        sum += args[i];
      }
      return sum;
    };
    console.log(sum(4, 8, 15, 16, 23, 42));
  }
  {
    const sum = (/** @type {number[]} */ ...args) => {
      let sum = 0;
      for (const i of args) {
        sum += i;
      }
      return sum;
    };
    console.log(sum(4, 8, 15, 16, 23, 42));
  }
  {
    const sum = (/** @type {number[]} */ ...args) =>
      args.reduce((a, b) => a + b);

    console.log(sum(4, 8, 15, 16, 23, 42));
  }
}
{
  function O() {
    this.a = 2;
    return {
      a: 3,
    };
  }
  const o = new O();
  console.log(o.a);
}
{
  console.log(`"${"  neat   ".trim()}"`);
}
{
  const myObject = (() => {
    let value = 0;
    return {
      /**
       * @param {any} inc
       */
      increment(inc) {
        value += typeof inc === "number" ? inc : 1;
      },
      getValue() {
        return value;
      },
    };
  })();
  console.log(myObject.getValue());
  myObject.increment(4);
  console.log(myObject.getValue());
}
{
  const prepare_the_request = async (
    /** @type {(arg0: number) => void} */ resolve
  ) => setTimeout(() => resolve(444), 1000);
  // {
  //   const send_request_synchronously = (a) => {};
  //   const request = prepare_the_request();
  //   const response = send_request_synchronously(request);
  //   display(response);
  // }
  // {
  //   const request = prepare_the_request();
  //   send_request_asynchronously(request, (response) => {
  //     display(response);
  //   });
  // }
  {
    const promise = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise"), 1000);
      }).then(console.log);
    };
    promise();
  }
  {
    const promise = async () => {
      const message = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise"), 1000);
      });
      return console.log(message);
    };
    promise();
  }
}
{
  String.prototype.deentityify = (() => {
    const entity = {
      quot: '"',
      lt: "<",
      gt: ">",
    };
    return function () {
      return this.replace(
        /&([^&;]+);/g,
        (/** @type {any} */ a, /** @type {string | number} */ b) => {
          const r = entity[b];
          return typeof r === "string" ? r : a;
        }
      );
    };
  })();
  console.log("&lt;&quot;&gt;".deentityify());
}
{
  const add = (/** @type {any} */ a, /** @type {any} */ b) => a + b;
  Function.prototype.curry = function (/** @type {any[]} */ ...args) {
    const that = this;
    return (/** @type {any[]} */ ...args1) =>
      that.apply(null, args.concat(args1));
  };
  const add1 = add.curry(1);
  console.log(add1(5));
}
