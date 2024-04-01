// popup.service.ts
import { Injectable } from '@angular/core';
import {PopupComponent} from "../popup/popup.component";
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

import { TransactionPopupComponent } from '../transaction-popup/transaction-popup.component';

import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddBankAccountComponent } from '../add-bank-account/add-bank-account.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { VerificationPaymentPopupComponent } from '../verification-payment-popup/verification-payment-popup.component';
import { CreatePaymentRequest } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }

  openPopup(message: string, text: string): void {
    this.dialog.open(PopupComponent, {
      width: '250px',
      data: { message, text }
    });
  }

  openAddUserPopup(): void {
    this.dialog.open(AddUserComponent, {
    });
  }

  openUpdateUserPopup(): void {
    this.dialog.open(UpdateUserComponent, {
    });
  }


  openTransactionPopup(): void {
    this.dialog.open(TransactionPopupComponent, {});}

  openAddCustomerPopup(): void {
    this.dialog.open(AddCustomerComponent, {
    });
  }

  openVerifyPaymentPopup(payment: CreatePaymentRequest): void {
    this.dialog.open(VerificationPaymentPopupComponent, {
      data: {payment}
    });
  }

  openAddBankAccountPopup(): void {
    this.dialog.open(AddBankAccountComponent, {
    });
  }

  openUpdateCustomerPopup(): void {
    this.dialog.open(EditCustomerComponent, {

    });
  }
}
