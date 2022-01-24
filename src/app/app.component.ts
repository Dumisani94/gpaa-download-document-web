import { Component, forwardRef, Inject } from '@angular/core';
import { CommunicationService } from './data/services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpaa-download-document-web';
  success = false;
  constructor(@Inject(forwardRef(() => CommunicationService)) public communicationService: CommunicationService) {
  }

  downloadLetter(){
    this.communicationService.downloadMedicalAidSubsidyLetter();
    this.success = true;
    console.log("TAU");
  }
}
