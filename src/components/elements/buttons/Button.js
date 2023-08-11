import PropTypes from 'prop-types';

export default function Button(props) {
  let buttonSize;
  switch (props.ButtonSize) {
    case "xs":
      buttonSize = " btn-xs";
      break;
    case "sm":
      buttonSize = " btn-sm";
      break;
    case "md":
      buttonSize = "";
      break;
    case "lg":
      buttonSize = " btn-lg";
      break;
    default:
      buttonSize = "";
  }
  let buttonType;
  switch (props.ButtonType) {
    case "danger":
      buttonType = "btn-danger";
      break;
    case "danger-outline":
      buttonType = "btn-danger btn-outline";
      break;
    case "default":
      buttonType = "btn-default";
      break;
    case "default-alt":
      buttonType = "btn-default-alt";
      break;
    case "info":
      buttonType = "btn-info";
      break;
    case "info-outline":
      buttonType = "btn-info btn-outline";
      break;
    case "primary":
      buttonType = "btn-primary";
      break;
    case "primary-inverse":
      buttonType = "btn-primary-inverse";
      break;
    case "success":
      buttonType = "btn-success";
      break;
    case "success-outline":
      buttonType = "btn-success btn-outline";
      break;
    case "warning":
      buttonType = "btn-warning";
      break;
    case "warning-outline":
      buttonType = "btn-warning btn-outline";
      break;
    default:
      buttonType = "btn-default";
  }
  let iValue;
  if (props.ButtonIcon) {
    buttonType = buttonType + " btn-icon";
    iValue = <i className={props.ButtonIcon}></i>;
  } else {
    iValue = "";
  }
  if (props.ButtonIconSpot === "left") {
    return (
      <>
        <a href={props.ButtonLink} className={"btn " + buttonType+buttonSize} target={props.TargetType} role="button" onclick="event.preventDefault();$('#span2').toggle()" onkeydown="if(event.keyCode==32){event.preventDefault();$('#span2').toggle()};">
          {iValue}{props.ButtonText}
        </a>
      </>
    );
  } else {
    return (
      <>
        <a href={props.ButtonLink} className={"btn " + buttonType+buttonSize} target={props.TargetType} role="button" onclick="event.preventDefault();$('#span2').toggle()" onkeydown="if(event.keyCode==32){event.preventDefault();$('#span2').toggle()};">
          {props.ButtonText}{iValue}
        </a>
      </>
    );
  }
  
}

Button.propTypes = {
  ButtonSize: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  ButtonType: PropTypes.oneOf(["danger", "danger-outline", "default", "default-alt", "info", "info-outline", "primary", "primary-inverse", "success", "success-outline", "warning", "warning-outline"]),
  ButtonLink: PropTypes.string,
  ButtonText: PropTypes.string,
  ButtonIcon: PropTypes.string,
  ButtonIconSpot: PropTypes.oneOf(["left", "right"]),
  TargetType: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"])
};

Button.defaultProps = {
  ButtonSize: "md",
  ButtonType: "default",
  ButtonLink: "#",
  ButtonText: "Button",
  ButtonIcon: "",
  ButtonIconSpot: "left",
  TargetType: "_self"
};