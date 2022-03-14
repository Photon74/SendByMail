import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { $UrlResolver} from '@docsvision/webclient/System/$UrlResolver';
import { BaseControlParams, BaseControlState, BaseControl } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { $CardInfo } from "@docsvision/webclient/System/LayoutServices";
import { TextBox } from "@docsvision/webclient/Platform/TextBox";
import { rw } from "@docsvision/webclient/System/Readwrite";
import React from "react";

export class SendByMailButtonParams extends BaseControlParams {
    standardCssClass?: string = "sendbymail-button";
    @rw services?: $RequestManager & $UrlResolver & $CardInfo;
}

export interface SendByMailButtonState extends BaseControlState, SendByMailButtonParams {
    description: any;

}
declare var WebClient: any;
export class SendByMailButton extends BaseControl<SendByMailButtonParams, SendByMailButtonState> {

    protected createParams(): SendByMailButtonParams {
        return new SendByMailButtonParams();
    }

    protected createImpl() {
        return new ControlImpl(this.props, this.state, this.renderControl.bind(this));
    }

    renderControl() {
        
        this.state.description = this.layout.controls.get<TextBox>("documentName").value; 
        let url = this.state.services.urlResolver.resolveApiUrl('GetEmail','Email') + '?cardId=' + this.layout.cardInfo.id;
        let answer = this.state.services.requestManager.get<string>(url).then(
            (e) => {
                let attr = document.createAttribute('href');
                attr.value = "mailto:{0}&body={1}".format(e,  this.state.description);
                document.getElementById('sendemailbuttonlink').attributes.setNamedItem(attr);
                return "";
            });
    
        return (
            <div>
                <a id='sendemailbuttonlink' href="">SendByMail</a>
            </div>
        );
    }
}