import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
        type="checkbox"
        checked={currentTemperatureUnit === "C"}
      />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text_F">F</span>
      <span className="toggle-switch__text toggle-switch__text_C">C</span>
    </label>
  );
}
