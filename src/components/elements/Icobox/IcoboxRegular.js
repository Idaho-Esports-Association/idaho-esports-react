export default function IcoboxRegular(props) {
    return (
        <>
        <div className="icobox icobox--center">
                <div className="icobox__icon icobox__icon--border icobox__icon--lg icobox__icon--circle">
                    <i className={props.IconImage} />
                </div>
                <div className="icobox__content">
                    <h3 className="icobox__title icobox__title--lg">{props.Title}</h3>
                    <p className="icobox__description">{props.Text}</p>
                </div>
            </div>
        </>
    )
}