import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color";

registerElement("AR", () => require("nativescript-ar").AR);

@Component({
  selector: "ar",
  moduleId: module.id,
  template: `
<ActionBar title="NativeScript AR"></ActionBar>

<GridLayout class="page">
  <AR *ngIf="loaded"
    debugLevel="FEATURE_POINTS"
    detectPlanes="true"
    [planeMaterial]="planeMaterial"
    (planeTapped)="onPlaneTapped($event)">
  </AR>
</GridLayout>
`
})
export class HomeComponent {
  loaded = false;
  changeModel = false;
  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 1000);
  }

  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

  onPlaneTapped(args: ARPlaneTappedEventData): void {
    const ar: AR = args.object;
    if (this.changeModel) {
      ar.addBox({
        position: {
          x: args.position.x,
          y: args.position.y,
          z: args.position.z
        },
        dimensions: {
          x: 0.1,
          y: 0.1,
          z: 0.1
        },
        mass: 20,
        materials: [new Color("blue")]
      });
    } else {
      ar.addModel({
        name: "Models.scnassets/Tree.dae",
        position: {
          x: args.position.x,
          y: args.position.y,
          z: args.position.z
        },
        scale: 0.05,
        mass: 20
      });
    }
    this.changeModel = !this.changeModel;
  }
}