function initViz() {
  urlSpain = "https://public.tableau.com/views/Mapa-Espaa-BIGndcision/ESPAA?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  urlCountries = "https://public.tableau.com/views/Mapa-Paises-BIGndcision/PAISES?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  options = {
      hideToolbar: false,
      width: "1000px",
      height: "800px",
  };
  viz = new tableau.Viz(spain, urlSpain, options);
  viz = new tableau.Viz(countries, urlCountries, options);
}
