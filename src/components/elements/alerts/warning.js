export default function WarningBox(props){
    let NavButton;
    let AlertDismissable;
    let AlertDismissableCloseButton;
    if (props.AlertDismissable === true){
        AlertDismissable = "alert-dismissable";
        AlertDismissableCloseButton = <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    }
    else {
        AlertDismissable = "";
        AlertDismissableCloseButton = "";
    }
    if (props.NavButton !== undefined){
        NavButton = <button type="button" className="btn btn-xs btn-default alert-btn-right">{NavButtonText}</button>
    }
    else {
        NavButton = "";
    }
    return (
        <>
        <div className={"alert alert-warning alert--rounded " + AlertDismissable}>
            {AlertDismissableCloseButton}
            {NavButton}
					{props.AlertText}
				</div>
        </>
    )
}