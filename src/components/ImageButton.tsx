export function ImageButton(props: { image: string, onClick: () => void }) {
    return (
        <button className={"imageButton"} onClick={props.onClick}>
            <img className={"imgSize"} src={props.image} alt="Button" />
        </button>
    );
}
