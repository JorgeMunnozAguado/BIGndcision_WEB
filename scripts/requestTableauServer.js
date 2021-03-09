function initViz() {
  urlSpainMonthYear = "https://public.tableau.com/views/Espaa-Mese-Aos/Historia1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  urlSpainYear = "https://public.tableau.com/views/Espaa-Aos/Historia2?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  urlCountriesMonthYear = "https://public.tableau.com/views/Paises-Meses-Aos/Historia1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  urlCountriesYear = "https://public.tableau.com/views/Paises-Aos/Historia2?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  options = {
      hideToolbar: false,
      width: "1000px",
      height: "800px",
  };
  viz = new tableau.Viz(spainMonthYear, urlSpainMonthYear, options);
  viz = new tableau.Viz(countriesMonthYear, urlCountriesMonthYear, options);
  viz = new tableau.Viz(spainYear, urlSpainYear, options);
  viz = new tableau.Viz(countriesYear, urlCountriesYear, options);
}
