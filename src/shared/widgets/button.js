function WidgetButtonComponent({ label, name, className, onClick }) {
    return (
        <button className={'btn ' + className} name={name} onClick={onClick}>
            <label>{label}</label>
        </button>
    );
}

export default WidgetButtonComponent;