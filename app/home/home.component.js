"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var color_1 = require("tns-core-modules/color");
element_registry_1.registerElement("AR", function () { return require("nativescript-ar").AR; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.loaded = false;
        this.changeModel = false;
        this.planeMaterial = {
            diffuse: new color_1.Color("white"),
            transparency: 0.2
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.loaded = true; }, 1000);
    };
    HomeComponent.prototype.onPlaneTapped = function (args) {
        var ar = args.object;
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
                materials: [new color_1.Color("blue")]
            });
        }
        else {
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ar",
            moduleId: module.id,
            template: "\n<ActionBar title=\"NativeScript AR\"></ActionBar>\n\n<GridLayout class=\"page\">\n  <AR *ngIf=\"loaded\"\n    debugLevel=\"FEATURE_POINTS\"\n    detectPlanes=\"true\"\n    [planeMaterial]=\"planeMaterial\"\n    (planeTapped)=\"onPlaneTapped($event)\">\n  </AR>\n</GridLayout>\n"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwRUFBd0U7QUFFeEUsZ0RBQStDO0FBRS9DLGtDQUFlLENBQUMsSUFBSSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEVBQTdCLENBQTZCLENBQUMsQ0FBQztBQWtCM0Q7SUFoQkE7UUFpQkUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBS3BCLGtCQUFhLEdBQWU7WUFDMUIsT0FBTyxFQUFFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQixZQUFZLEVBQUUsR0FBRztTQUNsQixDQUFDO0lBaUNKLENBQUM7SUF4Q0MsZ0NBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREMsVUFBVSxDQUFDLGNBQVEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU9ELHFDQUFhLEdBQWIsVUFBYyxJQUE0QjtRQUN4QyxJQUFNLEVBQUUsR0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ1IsUUFBUSxFQUFFO29CQUNSLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25CO2dCQUNELFVBQVUsRUFBRTtvQkFDVixDQUFDLEVBQUUsR0FBRztvQkFDTixDQUFDLEVBQUUsR0FBRztvQkFDTixDQUFDLEVBQUUsR0FBRztpQkFDUDtnQkFDRCxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsQ0FBQyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNWLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLFFBQVEsRUFBRTtvQkFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNuQjtnQkFDRCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsRUFBRTthQUNULENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBMUNVLGFBQWE7UUFoQnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseVJBV1g7U0FDQSxDQUFDO09BQ1csYUFBYSxDQTJDekI7SUFBRCxvQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBBUiwgQVJNYXRlcmlhbCwgQVJQbGFuZVRhcHBlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiQVJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hclwiKS5BUik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhclwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGU6IGBcclxuPEFjdGlvbkJhciB0aXRsZT1cIk5hdGl2ZVNjcmlwdCBBUlwiPjwvQWN0aW9uQmFyPlxyXG5cclxuPEdyaWRMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XHJcbiAgPEFSICpuZ0lmPVwibG9hZGVkXCJcclxuICAgIGRlYnVnTGV2ZWw9XCJGRUFUVVJFX1BPSU5UU1wiXHJcbiAgICBkZXRlY3RQbGFuZXM9XCJ0cnVlXCJcclxuICAgIFtwbGFuZU1hdGVyaWFsXT1cInBsYW5lTWF0ZXJpYWxcIlxyXG4gICAgKHBsYW5lVGFwcGVkKT1cIm9uUGxhbmVUYXBwZWQoJGV2ZW50KVwiPlxyXG4gIDwvQVI+XHJcbjwvR3JpZExheW91dD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgbG9hZGVkID0gZmFsc2U7XHJcbiAgY2hhbmdlTW9kZWwgPSBmYWxzZTtcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvYWRlZCA9IHRydWU7IH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcGxhbmVNYXRlcmlhbCA9IDxBUk1hdGVyaWFsPntcclxuICAgIGRpZmZ1c2U6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxyXG4gICAgdHJhbnNwYXJlbmN5OiAwLjJcclxuICB9O1xyXG5cclxuICBvblBsYW5lVGFwcGVkKGFyZ3M6IEFSUGxhbmVUYXBwZWRFdmVudERhdGEpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFyOiBBUiA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgaWYgKHRoaXMuY2hhbmdlTW9kZWwpIHtcclxuICAgICAgYXIuYWRkQm94KHtcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgeDogYXJncy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTogYXJncy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgejogYXJncy5wb3NpdGlvbi56XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaW1lbnNpb25zOiB7XHJcbiAgICAgICAgICB4OiAwLjEsXHJcbiAgICAgICAgICB5OiAwLjEsXHJcbiAgICAgICAgICB6OiAwLjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc3M6IDIwLFxyXG4gICAgICAgIG1hdGVyaWFsczogW25ldyBDb2xvcihcImJsdWVcIildXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXIuYWRkTW9kZWwoe1xyXG4gICAgICAgIG5hbWU6IFwiTW9kZWxzLnNjbmFzc2V0cy9UcmVlLmRhZVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICB4OiBhcmdzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiBhcmdzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlOiAwLjA1LFxyXG4gICAgICAgIG1hc3M6IDIwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2VNb2RlbCA9ICF0aGlzLmNoYW5nZU1vZGVsO1xyXG4gIH1cclxufSJdfQ==