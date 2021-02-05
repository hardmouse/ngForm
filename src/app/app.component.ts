import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  submittedSuccess: boolean = false;
  name = "Angular";
  fields = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: "^[a-zA-Z]+$",
          message: "Accept only text"
        }
      ]
    },
    {
      type: "password",
      label: "Password",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Password Required"
        }
      ]
    }
  ];
  dynamicForm: FormGroup;
  constructor() {
    const controls = {};
    this.fields.forEach(res => {
      const validationsArray = [];
      res.validations.forEach(val => {
        if (val.name === "required") {
          validationsArray.push(Validators.required);
        }
        if (val.name === "pattern") {
          validationsArray.push(Validators.pattern(val.validator));
        }
      });
      controls[res.label] = new FormControl("", validationsArray);
    });
    this.dynamicForm = new FormGroup(controls);
  }

  onSubmit() {
    console.log(this.dynamicForm.value, "test");
    this.submittedSuccess = true;
  }
}
