import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { DataService } from "./services/data.service";
import { QuestionsComponent } from "./components/questions/questions.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [AppComponent, QuestionsComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
