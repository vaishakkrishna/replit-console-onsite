export function PrimitiveInstance(props) {
    return (
        <div>
            <p>
                {"\t".repeat(props.level)} + str(props)
            </p>
        </div>
    )
}