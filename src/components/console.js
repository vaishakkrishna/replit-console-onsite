import { useState } from "react"
import { Editor } from "./editor"
import { ObjectBrowser } from "./objectBrowser"


export function Console(props) {
    const sessionId = props.sessionId;
    const onEditorChange = () => {


    }


    return (
        <div className="Console">
            <ObjectBrowser />
            <label>
                Write your code here:
                <textarea name="code" onChange={onEditorChange}>

                </textarea>
            </label>


        </div>
    )
}