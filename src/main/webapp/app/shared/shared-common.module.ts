import { NgModule } from '@angular/core';

import { MoojansaleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MoojansaleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MoojansaleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MoojansaleSharedCommonModule {}
