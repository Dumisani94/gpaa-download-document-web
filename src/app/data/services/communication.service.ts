import { Injectable, forwardRef, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private baseURLMedicalAidSubsidy = 'http://127.0.0.1:9797/Gpaa-Business-Service/medical-aid-subsidy/api/v1/';

  constructor(@Inject(forwardRef(() => HttpClient)) public httpClient : HttpClient) {
  }

  downloadMedicalAidSubsidyLetter() {
    return this.httpClient.get<any>(this.baseURLMedicalAidSubsidy + '/medical/aid/subsidy/download/10601');
  }
}
