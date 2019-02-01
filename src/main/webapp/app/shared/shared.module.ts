import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    JhipsterSampleApplicationGwAngularSharedLibsModule,
    JhipsterSampleApplicationGwAngularSharedCommonModule,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [JhipsterSampleApplicationGwAngularSharedLibsModule, JhipsterSampleApplicationGwAngularSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhipsterSampleApplicationGwAngularSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationGwAngularSharedModule {
    static forRoot() {
        return {
            ngModule: JhipsterSampleApplicationGwAngularSharedModule
        };
    }
}
