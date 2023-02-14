import { useStore } from '../composable/store';
import NotificationElement from '../types/notification-element';
import { GeocityEvent } from '../utils/geocity-event';
import NotificationBoxControl from './notification/notification';
import wtk from 'wkt';

/* 
    ZOOM_CONSTRAINT 1
    AREA_CONSTRAINT 2
    PROXIMITY_INFORMATION 3
    MAX_SELECTION 4
*/

export default class NotificationManager {
    validZoomConstraint: boolean = true;
    validAreaConstraint: boolean = true;

    constructor() {
        const options = useStore().getOptions();
        switch (options.mode.type) {
            case 'target': this.setupTargetMode(); break;
            case 'select': this.setupSelectMode(); break;
            case 'create': this.setupCreateMode(); break;
            default: useStore().getMap().addControl(new NotificationBoxControl({
                type: "error",
                message: "Veuillez sélectionner un mode de fonctionnement valide.",
                rule: {
                    type: "NOT_VALID_MODE"
                }
            } as NotificationElement, 4))
        }    
        this.setup(options.notifications)
    }

    setupTargetMode() {
        window.addEventListener('current-center-position', ((event: CustomEvent) => {
            if (this.validZoomConstraint && this.validAreaConstraint) {
                const geometry = {
                    type: "Point",
                    coordinates: event.detail
                  };
                GeocityEvent.sendEvent('position-selected', {geometry: wtk.stringify(geometry)});
            }
        }) as EventListener)
    }

    setupSelectMode() {
        window.addEventListener('icon-clicked', (() => {
            const feature = useStore().getSelectedFeature();
            if (this.validZoomConstraint && feature) {
                // If the element is already selected. That means that we unselect it. In this case, we send undefined to inform the state. Otherwise, we select the element and send the coordinate
                if (feature.get('isClick')) {
                    GeocityEvent.sendEvent('position-selected', undefined);
                } else {
                    const geometry = {
                        type: "Point",
                        coordinates: feature.get('geometry').getCoordinates()
                      };
                    GeocityEvent.sendEvent('position-selected', {
                        id: feature.get('name'),
                        geometry: wtk.stringify(geometry)
                    });
                }
                
                GeocityEvent.sendEvent('authorize-clicked', undefined);
            }
        }) as EventListener)
    }

    setupCreateMode() {
        window.addEventListener('icon-created', () => {
            const feature = useStore().getSelectedFeature();
            if (this.validZoomConstraint && feature) {
                const geometry = {
                    type: "Point",
                    coordinates: feature.get('geometry').getCoordinates()
                  };
                GeocityEvent.sendEvent('position-selected', {
                    id: feature.get('name'),
                    geometry: wtk.stringify(geometry)
                });
            } else {
                useStore().setSelectedFeature(undefined);
                GeocityEvent.sendEvent('position-selected', undefined);
            }
            GeocityEvent.sendEvent('authorize-created', undefined);
        })

        window.addEventListener('icon-removed', () => {
            GeocityEvent.sendEvent('position-selected', undefined);
            GeocityEvent.sendEvent('remove-created-icon', undefined);
        })
    }

    setup(notifications: Array<NotificationElement>) {
        notifications.forEach((notification: NotificationElement) => {
            if (notification.rule.type === 'ZOOM_CONSTRAINT') this.setupZoomContraint(notification)
            if (notification.rule.type === 'AREA_CONSTRAINT') this.setupInclusionAreaConstraint(notification)
            if (notification.type === 'info') useStore().getMap().addControl(new NotificationBoxControl(notification, 1))
        })
    }

    setupZoomContraint(rule: NotificationElement) {
        if (this.hasValidZoom(rule)) {
            useStore().getMap().addControl(new NotificationBoxControl(rule, 3))
            this.validZoomConstraint = false;
        } 
        
        useStore().getMap().getView().on('change:resolution', () => {
            this.checkZoomConstraint(rule)
        })
    }

    setupInclusionAreaConstraint(rule: NotificationElement) {
        window.addEventListener('inclusion-area-included', ((event: CustomEvent) => {
            this.checkInclusionAreaConstraint(rule, event.detail)
        }) as EventListener);
    }

    hasValidZoom(rule: NotificationElement) {
        const currentZoom = useStore().getMap().getView().getZoom()
        return currentZoom && rule.rule.minZoom && currentZoom < rule.rule.minZoom
    }

    checkZoomConstraint(rule: NotificationElement) {
        if (!this.hasValidZoom(rule)) {
            useStore().getMap().getControls().forEach((control) => {
                if (control instanceof NotificationBoxControl && control.ruleType === 'ZOOM_CONSTRAINT') {
                    useStore().getMap().removeControl(control);
                    this.validZoomConstraint = true;
                }
            });
        }
        else {
            if (useStore().getMap().getControls().getArray().find((control) => control instanceof NotificationBoxControl && control.ruleType === 'ZOOM_CONSTRAINT') === undefined) {
                useStore().getMap().addControl(new NotificationBoxControl(rule, 3))
                this.validZoomConstraint = false;
                GeocityEvent.sendEvent('position-selected', undefined);
            }   
        }
    }

    checkInclusionAreaConstraint(rule: NotificationElement, isInInclusionArea: boolean) {
        if (isInInclusionArea) {
            useStore().getMap().getControls().forEach((control) => {
                if (control instanceof NotificationBoxControl && control.ruleType === 'AREA_CONSTRAINT') {
                    useStore().getMap().removeControl(control);
                    this.validAreaConstraint = true;
                }
            });
        }
        else {
            if (useStore().getMap().getControls().getArray().find((control) => control instanceof NotificationBoxControl && control.ruleType === 'AREA_CONSTRAINT') === undefined) {
                useStore().getMap().addControl(new NotificationBoxControl(rule, 2))
                this.validAreaConstraint = false;
                GeocityEvent.sendEvent('position-selected', undefined);
            }   
        }
    }
}