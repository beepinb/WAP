import { Account } from "./model/account.js";

$(document).ready(function () {
    const accounts = [];
  
    $("#form").on("submit", function (event) {
      event.preventDefault();
      const id = $("#patientIdNumber").val();
      const firstName = $("#firstName").val();
      const middleInitial = $("#middleInitials").val();
      const lastName = $("#lastName").val();
      const dept = $("#ddlDepartment").val();
      const opd = $("input[name='radioIsOutPatient']:checked").val();
      const dob = $("#dateOfBirth").val();
  
      const account = new Account(id,firstName, middleInitial,lastName,dob,dept, opd
      );
  
      addAccount(account);
      tableRefresh();
      this.reset();
    });
  
    function addAccount(account) {
      accounts.push(account);
    }
  
    function getAccounts() {
      return accounts;
    }
  
    function tableRefresh() {
      const accounts = getAccounts();
      tableReset();
      showInTable(accounts);
    }
  
    function tableReset() {
      $("#patientsTable tbody tr").empty();
    }
  
    function showInTable(accounts) {
      accounts.forEach((account) => {
        let id = accounts.indexOf(account) + 1;
  
        $("#tbodyPatientsList").append(`<tr>
            <td>${id}</td>
            <td>${account.getFirstName()}</td>
            <td>${account.getMiddleInitial()}</td>
            <td>${account.getLastName()}</td>
            <td>${account.getDOB()}</td>
            <td>${account.getDepartment()}</td>
            <td>${account.getOPD()}</td></tr>`);
      });
    }
  
    $("#chkShowOutPatients").click(function () {
      tableReset();
      if ($(this).is(":checked")) {
        const elders = accounts.filter((account) => account.getOPD() === "Yes");
        showInTable(elders);
      } else {
        tableRefresh();
      }
    });
  
    $("#chkElderlyPatients").change(function () {
      tableReset();
      if ($(this).is(":checked")) {
        const today = new Date().getFullYear();
        const elders = accounts.filter((account) => {
          const dateOfBirth = new Date(account.getDOB()).getFullYear();
          return today - dateOfBirth > 65 ? account : null;
        });
        showInTable(elders);
      } else {
        tableRefresh();
      }
    });
  });