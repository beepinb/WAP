export class Account {
    #patientId;
    #firstName;
    #middleInitial;
    #lastName;
    #dob;
    #department;
    #opd;
  
    constructor(id, name, mi, lastName, dob, dept, opd) {
      this.#department = dept;
      this.#patientId = id;
      this.#firstName = name;
      this.#middleInitial = mi;
      this.#lastName = lastName;
      this.#dob = dob;
      this.#opd = opd;
    }
  
    getDepartment() {
      return this.#department;
    }
  
    getFirstName() {
      return this.#firstName;
    }
  
    getMiddleInitial() {
      return this.#middleInitial;
    }
  
    getLastName() {
      return this.#lastName;
    }
  
    getDOB() {
      return this.#dob;
    }
  
    getOPD() {
      return this.#opd;
    }
  }