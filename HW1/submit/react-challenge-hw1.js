class ObjectUtilities {
  constructor(objA, objB) {
    this.objA = objA;
    this.objB = objB;
  }

  mergeObjects = (objA, objB) => ({ ...objA, ...objB });

  removePassword = () => objA;

  freezeObj() {
    Object.freeze(objA);
    return objA;
  }

  getOnlyValues = () => Object.values(objA);

  getOnlyProperties = () => Object.keys(objA);
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi"
};

const objB = {
  password: "12345"
};

let objectUtil = new ObjectUtilities();

const user = objectUtil.mergeObjects(objA, objB);
console.log(user);

const cleanUser = objectUtil.removePassword(user);
console.log(cleanUser);

const frozenUser = objectUtil.freezeObj(cleanUser);

const onlyValues = objectUtil.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = objectUtil.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
