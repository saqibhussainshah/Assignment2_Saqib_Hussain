export default function ListItem(props) {
    return (
        <div>
            <h1>List of Colors</h1>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index} style={{ color: props.colors[index] }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}