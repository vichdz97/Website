import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+[\._-]?)+[a-zA-Z0-9]@(([a-zA-Z0-9]+[\._-]?)+[a-zA-Z0-9]\.)+[a-zA-Z]{2,4}$/)]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  confirmation: string = "";

  get nameControl() {
      return this.contactForm.get('name') as FormControl;
  }

  get emailControl() {
      return this.contactForm.get('email') as FormControl;
  }

  get subjectControl() {
      return this.contactForm.get('subject') as FormControl;
  }

  get messageControl() {
      return this.contactForm.get('message') as FormControl;
  }

  hasErrors(control: FormControl) {
      return control?.invalid && (control?.dirty || control?.touched);
  }

  sendAnotherMsg() {
      return this.contactForm.dirty || this.contactForm.touched;
  }

  async sendEmail() {
      emailjs.init("Vqf8AFqe4RaJTl5DB");
      await emailjs.send("service_b90itwn","template_kyxxx89",{
          to_name: "Victor",
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email?.toLowerCase(),
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message
      });
      this.contactForm.reset();
      this.confirmation = "Message sent successfully!";
  }

}