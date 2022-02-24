import { BaseControlParams, BaseControlState, BaseControl } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import React from "react";

export class SendByMailButtonParams extends BaseControlParams {
    standardCssClass?: string = "sendbymail-button";
}

export interface SendByMailButtonState extends BaseControlState, SendByMailButtonParams {

}

export class SendByMailButton extends BaseControl<SendByMailButtonParams, SendByMailButtonState> {

    async onClick(){

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