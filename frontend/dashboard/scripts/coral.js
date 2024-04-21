function changeOceanTreemap(ocean) {
  var imageSrc = "";
  switch (ocean) {
    case "atlantic":
      imageSrc = "../../plots/Coral_Bleaching/Atlantic_Treemap.png";
      break;
    case "pacific":
      imageSrc = "../../plots/Coral_Bleaching/Pacific_Treemap.png";
      break;
    case "indian":
      imageSrc = "../../plots/Coral_Bleaching/Indian_Treemap.png";
      break;
    case "red_sea":
      imageSrc = "../../plots/Coral_Bleaching/Red_Sea_Treemap.png";
      break;
    case "arabian_gulf":
      imageSrc = "../../plots/Coral_Bleaching/Arabian_Gulf_Treemap.png";
      break;
  }

  document.getElementById("treemap-image").src = imageSrc;
}

function changeOceanTurbidity(ocean) {
  var imageSrc = "";
  switch (ocean) {
    case "atlantic":
      imageSrc = "../../plots/Coral_Bleaching/Turbidity_Atlantic.png";
      break;
    case "pacific":
      imageSrc = "../../plots/Coral_Bleaching/Turbidity_Pacific.png";
      break;
    case "indian":
      imageSrc = "../../plots/Coral_Bleaching/Turbidity_Indian.png";
      break;
    case "red_sea":
      imageSrc = "../../plots/Coral_Bleaching/Turbidity_Red_Sea.png";
      break;
    case "arabian_gulf":
      imageSrc = "../../plots/Coral_Bleaching/Turbidity_Arabian_Gulf.png";
      break;
  }

  document.getElementById("turbidity-graph-image").src = imageSrc;
}

