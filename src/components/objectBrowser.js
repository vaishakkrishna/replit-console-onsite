import { ObjectInstance } from "./objectInstance";

export function ObjectBrowser(props) {
    const root = props.root;
    const objectMap = props.objectMap;
    return (
        <div>
            <ObjectInstance type={objectMap[root].type} value/>
        </div>
    )
}