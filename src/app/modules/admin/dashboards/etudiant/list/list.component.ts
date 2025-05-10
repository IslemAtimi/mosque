import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { filter, fromEvent, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Contact, Country } from 'app/modules/admin/apps/contacts/contacts.types';
import { ContactsService } from 'app/modules/admin/apps/contacts/contacts.service';
import { EtudiantsDto, Pagedresult } from 'app/models/models';
import { EtudiantsService } from 'app/services/etudiants.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;

  contacts: EtudiantsDto[]=[]

  contactsCount: number = 0;
  contactsTableColumns: string[] = ['name', 'email', 'phoneNumber', 'job'];
  countries: Country[];
  drawerMode: 'side' | 'over';
  searchInputControl: FormControl = new FormControl();
  selectedContact: EtudiantsDto;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _changeDetectorRef: ChangeDetectorRef,
      private _contactsService: ContactsService,
      private _etudiantsService : EtudiantsService,
      @Inject(DOCUMENT) private _document: any,
      private _router: Router,
      private _fuseMediaWatcherService: FuseMediaWatcherService
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
    this.getEtudiants()

      // Get the contact
      this._contactsService.contact$
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((contact: EtudiantsDto) => {

              // Update the selected contact
              this.selectedContact = contact;

              // Mark for check
              this._changeDetectorRef.markForCheck();
          });

     

      // Subscribe to search input field value changes
      this.searchInputControl.valueChanges
          .pipe(
              takeUntil(this._unsubscribeAll),
              switchMap(query =>
                
                  // Search
                  this._etudiantsService.searchEtudiants(query)
              )
          )
          .subscribe(result=>{
              this.contacts=result.items
              this.contactsCount = result.totalCount;
              // Mark for check
              this._changeDetectorRef.markForCheck();
          });

          
      // Subscribe to MatDrawer opened change
      // this.matDrawer.openedChange.subscribe((opened) => {
      //     if ( !opened )
      //     {
      //         // Remove the selected contact when drawer closed
      //         this.selectedContact = null;

      //         // Mark for check
      //         this._changeDetectorRef.markForCheck();
      //     }
      // });

      // Subscribe to media changes
      // this._fuseMediaWatcherService.onMediaChange$
      //     .pipe(takeUntil(this._unsubscribeAll))
      //     .subscribe(({matchingAliases}) => {

      //         // Set the drawerMode if the given breakpoint is active
      //         if ( matchingAliases.includes('lg') )
      //         {
      //             this.drawerMode = 'side';
      //         }
      //         else
      //         {
      //             this.drawerMode = 'over';
      //         }

      //         // Mark for check
      //         this._changeDetectorRef.markForCheck();
      //     });

          
     

          
  }
  getEtudiants(){
    this._etudiantsService.getEtudiants()
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((result: Pagedresult<EtudiantsDto[]>) => {

              // Update the counts
              this.contactsCount = result.totalCount;
              this.contacts=result.items
              // Mark for check
              this._changeDetectorRef.markForCheck();
          });
  }

  ViewEtudiant(id:string){
    this._router.navigate(['public',id]);
  }

  deleteEtudiant(id:string){
    var value=confirm('هل أنت متأكد من حذف هذا الطالب؟ لا يمكن التراجع عن هذا الإجراء!')
    if(value==true)
    this._etudiantsService.deleteEtudiant(id).subscribe(x=>{
      this.getEtudiants()
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On backdrop clicked
   */
  onBackdropClicked(): void
  {
      // Go back to the list
      this._router.navigate(['./'], {relativeTo: this._activatedRoute});

      // Mark for check
      this._changeDetectorRef.markForCheck();
  }

  /**
   * Create contact
   */
  createContact(): void
  {
      this._router.navigate(['public']);
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }
}
