import './carrusel-info.css';

export function Carrusel() {
  return (
    <div className="publicidad">
      <input type="radio" name="Carrusel" id="Slider1-info" />
      <input type="radio" name="Carrusel" id="Slider2-info" />
      <input type="radio" name="Carrusel" id="Slider3-info" />

      <div className="Carrusels">
        <div className="Carrusel">
          <img src="publi_FarmaDelivery.jpg"></img>
        </div>

        <div className="Carrusel">
          <img src="publi_nuxe.jpg"></img>
        </div>

        <div className="Carrusel">
          <img src="publi_isdin.jpg"></img>
        </div>
      </div>
      <div className="Selectors">
        <label htmlFor="Slider1-info" className="Selector"></label>
        <label htmlFor="Slider2-info" className="Selector"></label>
        <label htmlFor="Slider3-info" className="Selector"></label>
      </div>
    </div>
  );
}
