/**
 * Created by Administrator on 10/18/2016.
 */
import {Component} from '@angular/core';
import { Input } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : "html-editor",
    templateUrl : "htmlEditor.component.html"
})

export class HtmlEditorComponent {
    userInput = "Enter HTML here";
}
