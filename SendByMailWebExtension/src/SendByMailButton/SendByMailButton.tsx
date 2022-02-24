import { BaseControlParams, BaseControlState, BaseControl, LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import React from "react";

export class SendByMailButtonParams extends BaseControlParams {
    standardCssClass?: string = "sendbymail-button";
}

export interface SendByMailButtonState extends BaseControlState, SendByMailButtonParams {

}

export class SendByMailButton extends BaseControl<SendByMailButtonParams, SendByMailButtonState> {

    async onClick(){
        SendByMailButton_onClick;
    }

    protected createParams(): SendByMailButtonParams {
        return new SendByMailButtonParams();
    }

    protected createImpl() {
        return new ControlImpl(this.props, this.state, this.renderControl.bind(this));
    }

    renderControl() {
        return (
            <div>
                <a href="mailto:mail@htmlacademy.ru&body=привет">SendByMail</a>
            </div>
        );
    }
}

export function SendByMailButton_onClick(sender: LayoutControl, e: IEventArgs){
    let controls = sender.layout.controls;
    let cardInfo = sender.layout.cardInfo;
    console.log(controls);
    console.log(cardInfo);
    
    
}